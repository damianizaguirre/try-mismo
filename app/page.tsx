'use client'

import { useState } from 'react'
import Image from 'next/image'
import IPhoneMockup from './components/IPhoneMockup'

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'

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
    <main className="wl-main h-[100dvh] overflow-hidden bg-[#f4f4f4] flex items-center justify-center">
      <div className="w-full flex flex-row items-center justify-between">

        {/* Left — content */}
        <div className="wl-left">

          {/* App icon + wordmark */}
          <div className="wl-icon-gap flex items-center">
            <div className="wl-icon-wrap bg-white rounded-[14px] shadow-[0px_0px_1.088px_rgba(0,0,0,0.25)] flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image
                src="/assets/app-icon.png"
                alt="Mismo"
                width={71}
                height={71}
                quality={100}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <span className="wl-wordmark text-black leading-none tracking-tight" style={{ fontFamily: SF, fontWeight: 600 }}>
              Mismo
            </span>
          </div>

          {/* Headline */}
          <h1 className="wl-headline text-black font-semibold leading-tight" style={{ fontFamily: SF }}>
            Transforming voice into actionable intelligence.
          </h1>

          {/* Description */}
          <p className="wl-desc text-black font-normal leading-normal" style={{ fontFamily: SF }}>
            Mismo captures your voice and converts it into a structured, searchable, and personal thinking space.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div>
              <p className="wl-success-title text-black font-semibold" style={{ fontFamily: SF }}>
                You&apos;re on the list.
              </p>
              <p className="wl-success-sub text-black/50" style={{ fontFamily: SF, marginTop: '4px' }}>
                We&apos;ll reach out when it&apos;s time.
              </p>
            </div>
          ) : (
            <div className="wl-form flex rounded-[16.917px] overflow-hidden shadow-[0px_0px_2.942px_rgba(0,0,0,0.25)] bg-white">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="wl-input flex-1 text-black placeholder-[#cbcbcb] bg-transparent focus:outline-none"
                style={{ fontFamily: SF }}
              />
              <button
                type="button"
                onClick={handleSubmit as unknown as React.MouseEventHandler}
                disabled={status === 'loading'}
                className="wl-btn bg-[#2a2a2a] text-white font-semibold whitespace-nowrap hover:bg-black disabled:opacity-50 transition-colors cursor-pointer rounded-br-[16.917px] rounded-tr-[16.917px]"
                style={{ fontFamily: SF, fontWeight: 600 }}
              >
                {status === 'loading' ? 'Joining…' : 'Join Waitlist'}
              </button>
            </div>
          )}

          {status === 'duplicate' && (
            <p className="wl-feedback text-black/40 mt-2" style={{ fontFamily: SF }}>
              That email is already on the waitlist.
            </p>
          )}
          {status === 'error' && (
            <p className="wl-feedback text-red-500 mt-2" style={{ fontFamily: SF }}>
              Something went wrong. Try again.
            </p>
          )}

          <p className="wl-nospam text-black/30" style={{ fontFamily: SF }}>
            No spam. Just one email when we launch.
          </p>
        </div>

        {/* Right — iPhone, hidden on mobile */}
        <div className="hidden lg:block flex-shrink-0" style={{ height: '74.75vh', aspectRatio: '297 / 613', position: 'relative' }}>
          <IPhoneMockup />
        </div>

      </div>
    </main>
  )
}
