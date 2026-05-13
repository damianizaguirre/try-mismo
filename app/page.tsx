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
    <main className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-8 py-20 lg:py-24">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">

        {/* Left — content */}
        <div className="flex-1 max-w-[500px] w-full">
          {/* App icon + name */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-[82px] h-[82px] bg-white rounded-[16.018px] shadow-[0px_0px_1.088px_rgba(0,0,0,0.25)] flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image src="/assets/app-icon-logo.svg" alt="Mismo icon" width={74} height={57} />
            </div>
            <span className="font-['SF_Pro_Display:Semibold',sans-serif] font-semibold text-[38px] text-black leading-none">Mismo</span>
          </div>

          {/* Headline */}
          <h1 className="font-['SF_Pro_Display:Semibold',sans-serif] font-semibold text-[38px] text-black leading-tight mb-5">
            Transforming voice into actionable intelligence.
          </h1>

          {/* Description */}
          <p className="font-['SF_Pro_Display:Regular',sans-serif] font-normal text-[19.859px] text-black leading-normal mb-10">
            Mismo is note taking app that capture voice and convert it into a structured, searchable, and personal thinking space.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="py-4">
              <p className="text-black font-semibold text-lg">You&apos;re on the list.</p>
              <p className="text-black/50 text-sm mt-1">We&apos;ll reach out when it&apos;s time.</p>
            </div>
          ) : (
            <div className="flex rounded-[16.917px] overflow-hidden shadow-[0px_0px_2.942px_rgba(0,0,0,0.25)] bg-white w-full max-w-[549px]">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-[31.63px] py-[18.39px] font-['SF_Pro_Display:Regular',sans-serif] font-normal text-[19.859px] text-black placeholder-[#cbcbcb] bg-transparent focus:outline-none"
              />
              <button
                type="button"
                onClick={handleSubmit as unknown as React.MouseEventHandler}
                disabled={status === 'loading'}
                className="px-8 py-[18.39px] bg-[#2b2b2b] text-white font-['SF_Pro_Display:Semibold',sans-serif] font-semibold text-[19.859px] whitespace-nowrap hover:bg-black disabled:opacity-50 transition-colors cursor-pointer rounded-br-[16.917px] rounded-tr-[16.917px]"
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

        {/* Right — iPhone mockup, vertically centered */}
        <div className="hidden lg:flex flex-shrink-0 items-center justify-center">
          <IPhoneMockup />
        </div>

      </div>
    </main>
  )
}
