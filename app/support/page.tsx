import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support — Mismo',
}

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="font-semibold text-black text-[17px]">{title}</h2>
      <div className="space-y-2 text-[14px] leading-relaxed text-black/60">{children}</div>
    </div>
  )
}

export default function SupportPage() {
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

        <h1 className="text-2xl font-semibold text-black mb-1">Support</h1>
        <p className="text-sm text-black/40 mb-10">We&apos;re here to help.</p>

        <div className="rounded-xl bg-white/60 px-5 py-5 mb-10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1.5">Contact</p>
          <p className="text-[15px] leading-relaxed text-black/70">
            Questions, bugs, or feedback? Email us and we&apos;ll get back to you, usually within 1–2 business days.
          </p>
          <a
            href="mailto:heymismo@gmail.com"
            className="inline-block mt-3 text-[15px] font-semibold text-black underline underline-offset-2 hover:text-black/60 transition-colors"
          >
            heymismo@gmail.com
          </a>
        </div>

        <div className="space-y-10">
          <Section title="Manage or cancel your subscription">
            <p>
              Mismo Pro is billed through Apple. You can manage or cancel anytime from
              within the app under <span className="font-medium text-black">Settings → Manage Subscription</span>,
              or through <span className="font-medium text-black">iPhone Settings → your name → Subscriptions</span>.
              Cancellation takes effect at the end of the current billing period, and you keep access until then.
            </p>
            <p>
              Refunds are handled by Apple at{' '}
              <span className="font-medium text-black">reportaproblem.apple.com</span>.
            </p>
          </Section>

          <Section title="Delete your account">
            <p>
              You can permanently delete your account and all associated data from within the app under{' '}
              <span className="font-medium text-black">Settings → Delete Account</span>.
            </p>
          </Section>

          <Section title="Privacy & terms">
            <p>
              See our{' '}
              <Link href="/privacy" className="text-black font-medium underline underline-offset-2 hover:text-black/60 transition-colors">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="text-black font-medium underline underline-offset-2 hover:text-black/60 transition-colors">
                Terms of Service
              </Link>
              .
            </p>
          </Section>
        </div>

        <p className="text-xs text-black/30 mt-14">
          Mismo — AI Voice Memos · Dallas, Texas
        </p>
      </div>
    </main>
  )
}
