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
    // h-screen + overflow-hidden = zero scrolling on any display
    // padding mirrors Figma frame: 322/1570 = 20.5vw, 206/1024 = 20.1vh
    <main
      className="h-screen overflow-hidden bg-[#f4f4f4] flex items-center justify-center"
      style={{ padding: '20.1vh 20.5vw' }}
    >
      <div className="w-full flex flex-row items-center justify-between">

        {/* Left — content, proportional to Figma frame (509/1570 = 32.4vw) */}
        <div style={{ width: 'clamp(220px, 32.4vw, 560px)', flexShrink: 0 }}>

          {/* App icon + wordmark — icon is 71/1570 = 4.52vw */}
          <div
            className="flex items-center"
            style={{ gap: 'clamp(10px, 1.3vw, 20px)', marginBottom: 'clamp(12px, 2.02vh, 28px)' }}
          >
            <div
              className="bg-white rounded-[14px] shadow-[0px_0px_1.088px_rgba(0,0,0,0.25)] flex items-center justify-center overflow-hidden flex-shrink-0"
              style={{ width: 'clamp(36px, 4.52vw, 80px)', height: 'clamp(36px, 4.52vw, 80px)' }}
            >
              <Image
                src="/assets/app-icon.png"
                alt="Mismo"
                width={71}
                height={71}
                quality={100}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <span
              className="text-black leading-none tracking-tight"
              style={{ fontFamily: SF, fontWeight: 600, fontSize: 'clamp(18px, 2.42vw, 48px)' }}
            >
              Mismo
            </span>
          </div>

          {/* Headline — 38/1570 = 2.42vw, gap below is 21px = 2.05vh */}
          <h1
            className="text-black font-semibold leading-tight"
            style={{ fontFamily: SF, fontSize: 'clamp(16px, 2.42vw, 48px)', marginBottom: 'clamp(10px, 2.05vh, 24px)' }}
          >
            Transforming voice into actionable intelligence.
          </h1>

          {/* Description — 19.86/1570 = 1.27vw, 0px gap to form in Figma */}
          <p
            className="text-black font-normal leading-normal"
            style={{ fontFamily: SF, fontSize: 'clamp(11px, 1.27vw, 24px)', marginBottom: 'clamp(16px, 2.26vh, 36px)', maxWidth: 'clamp(220px, 30.3vw, 550px)' }}
          >
            Mismo captures your voice and convert it into a structured, searchable, and personal thinking space.
          </p>

          {/* Form — frame width 475/1570 = 30.3vw, height 51.56/1024 = 5.03vh */}
          {status === 'success' ? (
            <div style={{ paddingTop: 'clamp(8px, 1.5vh, 20px)' }}>
              <p className="text-black font-semibold" style={{ fontFamily: SF, fontSize: 'clamp(12px, 1.1vw, 20px)' }}>
                You&apos;re on the list.
              </p>
              <p className="text-black/50" style={{ fontFamily: SF, fontSize: 'clamp(10px, 0.9vw, 16px)', marginTop: '0.4vh' }}>
                We&apos;ll reach out when it&apos;s time.
              </p>
            </div>
          ) : (
            <div
              className="flex rounded-[16.917px] overflow-hidden shadow-[0px_0px_2.942px_rgba(0,0,0,0.25)] bg-white"
              style={{ maxWidth: 'clamp(220px, 30.3vw, 550px)' }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 text-black placeholder-[#cbcbcb] bg-transparent focus:outline-none"
                style={{
                  fontFamily: SF,
                  fontSize: 'clamp(11px, 1.27vw, 24px)',
                  padding: 'clamp(10px, 1.8vh, 22px) clamp(14px, 2vw, 32px)',
                }}
              />
              <button
                type="button"
                onClick={handleSubmit as unknown as React.MouseEventHandler}
                disabled={status === 'loading'}
                className="bg-[#2a2a2a] text-white font-semibold whitespace-nowrap hover:bg-black disabled:opacity-50 transition-colors cursor-pointer rounded-br-[16.917px] rounded-tr-[16.917px]"
                style={{
                  fontFamily: SF,
                  fontWeight: 600,
                  fontSize: 'clamp(11px, 1.27vw, 24px)',
                  padding: 'clamp(10px, 1.8vh, 22px) clamp(12px, 1.4vw, 28px)',
                }}
              >
                {status === 'loading' ? 'Joining…' : 'Join Waitlist'}
              </button>
            </div>
          )}

          {status === 'duplicate' && (
            <p className="text-black/40 mt-2" style={{ fontSize: 'clamp(9px, 0.85vw, 14px)' }}>
              That email is already on the waitlist.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-500 mt-2" style={{ fontSize: 'clamp(9px, 0.85vw, 14px)' }}>
              Something went wrong. Try again.
            </p>
          )}

          <p className="text-black/30" style={{ fontSize: 'clamp(8px, 0.76vw, 13px)', marginTop: 'clamp(6px, 0.8vh, 12px)' }}>
            No spam. Just one email when we launch.
          </p>
        </div>

        {/* Right — iPhone scales with viewport height: 612.73/1024 = 59.8vh */}
        <div className="hidden lg:block flex-shrink-0" style={{ height: '74.75vh', aspectRatio: '297 / 613', position: 'relative' }}>
          <IPhoneMockup />
        </div>

      </div>
    </main>
  )
}
