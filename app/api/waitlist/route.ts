import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    console.error('Missing env vars — SUPABASE_URL:', !!url, 'SUPABASE_SERVICE_ROLE_KEY:', !!key)
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  const supabase = createClient(url, key)

  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const { error } = await supabase
    .from('waitlist')
    .insert([{ email, joined_at: new Date().toISOString() }])

  if (error) {
    console.error('Supabase insert error:', JSON.stringify(error))
    if (error.code === '23505') {
      return NextResponse.json({ error: 'Already on the waitlist' }, { status: 409 })
    }
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
