import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter: max 3 submissions per IP per 10 minutes
const attempts = new Map<string, number[]>()
const LIMIT = 3
const WINDOW_MS = 10 * 60 * 1000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const hits = (attempts.get(ip) ?? []).filter(t => now - t < WINDOW_MS)
  if (hits.length >= LIMIT) return true
  attempts.set(ip, [...hits, now])
  return false
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    console.error('Missing env vars — SUPABASE_URL:', !!url, 'SUPABASE_SERVICE_ROLE_KEY:', !!key)
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  const supabase = createClient(url, key)

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const email = typeof (body as Record<string, unknown>).email === 'string'
    ? ((body as Record<string, unknown>).email as string).trim()
    : ''

  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  // joined_at is set by DB default — do not send from client
  const { error } = await supabase.from('waitlist').insert([{ email }])

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'Already on the waitlist' }, { status: 409 })
    }
    console.error('Supabase insert error:', error.code, error.message)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
