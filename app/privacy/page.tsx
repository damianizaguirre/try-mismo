import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Mismo',
}

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'

export default function PrivacyPage() {
  return (
    <main
      className="min-h-screen bg-[#f4f4f4] px-6 py-12"
      style={{ fontFamily: SF }}
    >
      <div className="mx-auto max-w-[640px]">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-black/40 hover:text-black/70 transition-colors mb-10 text-sm"
        >
          ← Back
        </Link>

        <h1 className="text-2xl font-semibold text-black mb-1">Privacy Policy</h1>
        <p className="text-sm text-black/40 mb-10">Effective June 24, 2026</p>

        <section className="space-y-8 text-[15px] leading-relaxed text-black/80">
          <div>
            <h2 className="font-semibold text-black mb-2">What we collect</h2>
            <p>
              When you join the Mismo waitlist, we collect your email address. That is the only
              personal information we store.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">How we use it</h2>
            <p>
              Your email is used solely to notify you when Mismo becomes available on the App
              Store. We will not send marketing emails, sell your address, or share it with
              third parties for any purpose.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">Data retention</h2>
            <p>
              Your email is stored until you request deletion or we have sent you the launch
              notification. To remove your address at any time, email us at{' '}
              <a
                href="mailto:heymismo@gmail.com"
                className="text-black underline underline-offset-2 hover:text-black/60 transition-colors"
              >
                heymismo@gmail.com
              </a>{' '}
              and we will delete it within 7 days.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">Third-party services</h2>
            <p>
              Waitlist emails are stored using Supabase. You can review Supabase&apos;s privacy
              practices at{' '}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline underline-offset-2 hover:text-black/60 transition-colors"
              >
                supabase.com/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">Changes to this policy</h2>
            <p>
              We may update this policy as the product evolves. Any significant changes will be
              noted here with a new effective date.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">Contact</h2>
            <p>
              Questions?{' '}
              <a
                href="mailto:heymismo@gmail.com"
                className="text-black underline underline-offset-2 hover:text-black/60 transition-colors"
              >
                heymismo@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
