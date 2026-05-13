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
    <main className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-16 py-20">
      <div className="w-full max-w-[1320px] flex flex-col lg:flex-row items-center justify-between gap-20">

        {/* Left — content, exact Figma weights + sizes */}
        <div className="flex-1 max-w-[600px] w-full">

          {/* App icon + wordmark */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-[82px] h-[82px] bg-white rounded-[16px] shadow-[0px_0px_1.088px_rgba(0,0,0,0.25)] flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image src="/assets/app-icon.png" alt="Mismo" width={82} height={82} quality={100} />
            </div>
            <span className="text-[38px] font-semibold text-black leading-none tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
              Mismo
            </span>
          </div>

          {/* Headline — weight 600 */}
          <h1 className="text-[38px] font-semibold text-black leading-tight mb-5" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
            Transforming voice into actionable intelligence.
          </h1>

          {/* Description — weight 400 */}
          <p className="text-[19.86px] font-normal text-black leading-normal mb-10" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
            Mismo is note taking app that capture voice and convert it into a structured, searchable, and personal thinking space.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="py-5">
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
                className="flex-1 pl-[31.63px] pr-4 py-[18.39px] text-[19.86px] font-normal text-black placeholder-[#cbcbcb] bg-transparent focus:outline-none"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
              />
              <button
                type="button"
                onClick={handleSubmit as unknown as React.MouseEventHandler}
                disabled={status === 'loading'}
                className="px-8 py-[18.39px] bg-[#2a2a2a] text-white text-[19.86px] font-semibold whitespace-nowrap hover:bg-black disabled:opacity-50 transition-colors cursor-pointer rounded-br-[16.917px] rounded-tr-[16.917px]"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
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

        {/* Right — real Figma PNG export, pixel-perfect */}
        <div className="hidden lg:block flex-shrink-0">
          <IPhoneMockup />
        </div>

      </div>
    </main>
  )
}
