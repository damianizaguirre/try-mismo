'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (res.ok) {
      setStatus('success')
      setEmail('')
    } else if (res.status === 409) {
      setStatus('duplicate')
    } else {
      setStatus('error')
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-[#0a0a0a]">
      <div className="max-w-lg w-full space-y-10">

        <div className="space-y-4">
          <div className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-neutral-400 border border-neutral-700 rounded-full">
            Coming Soon
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-white">
            Mismo
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed">
            A new iOS app built around how you actually live.<br />
            Join the waitlist to be first in line.
          </p>
        </div>

        {status === 'success' ? (
          <div className="py-6 space-y-2">
            <p className="text-white font-medium text-lg">You&apos;re on the list.</p>
            <p className="text-neutral-500 text-sm">We&apos;ll reach out when it&apos;s time.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 disabled:opacity-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              {status === 'loading' ? 'Joining…' : 'Join Waitlist'}
            </button>
          </form>
        )}

        {status === 'duplicate' && (
          <p className="text-neutral-500 text-sm -mt-4">That email is already on the waitlist.</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-sm -mt-4">Something went wrong. Try again.</p>
        )}

        <p className="text-neutral-700 text-xs">
          No spam. Just one email when we launch.
        </p>
      </div>
    </main>
  )
}
