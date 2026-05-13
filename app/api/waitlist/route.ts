import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const { error } = await supabase
    .from('waitlist')
    .insert([{ email, joined_at: new Date().toISOString() }])

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'Already on the waitlist' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
