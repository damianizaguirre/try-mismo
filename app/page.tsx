'use client'

import { useState } from 'react'
import Image from 'next/image'
import IPhoneMockup from './components/IPhoneMockup'

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
    <main className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6 py-16 lg:py-0">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

        {/* Left — content */}
        <div className="flex-1 max-w-xl w-full">
          {/* App icon + name */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-[72px] h-[72px] bg-white rounded-[16px] shadow-[0px_0px_1px_rgba(0,0,0,0.25)] flex items-center justify-center overflow-hidden">
              <Image src="/assets/app-icon-logo.svg" alt="Mismo icon" width={58} height={46} />
            </div>
            <span className="text-[32px] font-semibold text-black tracking-tight">Mismo</span>
          </div>

          {/* Headline */}
          <h1 className="text-[40px] sm:text-[48px] font-semibold text-black leading-tight tracking-tight mb-5">
            Transforming voice into actionable intelligence.
          </h1>

          {/* Description */}
          <p className="text-[17px] text-black/70 leading-relaxed mb-10 max-w-lg">
            Mismo is a note taking app that captures voice and converts it into a structured, searchable, and personal thinking space.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="py-4">
              <p className="text-black font-semibold text-lg">You&apos;re on the list.</p>
              <p className="text-black/50 text-sm mt-1">We&apos;ll reach out when it&apos;s time.</p>
            </div>
          ) : (
            <div className="flex rounded-[20px] overflow-hidden shadow-[0px_0px_3.5px_rgba(0,0,0,0.25)] bg-white w-full max-w-[500px]">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-8 py-5 text-[17px] text-black placeholder-[#cbcbcb] bg-transparent focus:outline-none"
              />
              <button
                type="button"
                onClick={handleSubmit as unknown as React.MouseEventHandler}
                disabled={status === 'loading'}
                className="px-8 py-5 bg-[#2b2b2b] text-white text-[17px] font-semibold whitespace-nowrap hover:bg-black disabled:opacity-50 transition-colors cursor-pointer"
              >
                {status === 'loading' ? 'Joining…' : 'Join Waitlist'}
              </button>
            </div>
          )}

          {status === 'duplicate' && (
            <p className="text-black/40 text-sm mt-3">That email is already on the waitlist.</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-sm mt-3">Something went wrong. Try again.</p>
          )}

          <p className="text-black/30 text-xs mt-4">No spam. Just one email when we launch.</p>
        </div>

        {/* Right — iPhone mockup */}
        <div className="hidden lg:flex flex-shrink-0 items-center justify-center">
          <IPhoneMockup />
        </div>

      </div>
    </main>
  )
}
