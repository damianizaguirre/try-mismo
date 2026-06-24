import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Mismo',
}

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'

export default function TermsPage() {
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

        <h1 className="text-2xl font-semibold text-black mb-1">Terms of Service</h1>
        <p className="text-sm text-black/40 mb-10">Effective June 24, 2026</p>

        <section className="space-y-8 text-[15px] leading-relaxed text-black/80">
          <div>
            <h2 className="font-semibold text-black mb-2">1. Purpose of the waitlist</h2>
            <p>
              The Mismo waitlist at TryMismo.app is an expression of interest in a forthcoming
              iOS application. Joining the waitlist does not guarantee access to the app, any
              specific feature set, a particular launch date, or any pricing terms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">2. Your information</h2>
            <p>
              You represent that the email address you submit is yours and is accurate. See
              our{' '}
              <Link
                href="/privacy"
                className="text-black underline underline-offset-2 hover:text-black/60 transition-colors"
              >
                Privacy Policy
              </Link>{' '}
              for details on how we store and use it.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">3. No warranties</h2>
            <p>
              The waitlist and all related communications are provided &quot;as is&quot; without
              warranties of any kind. We make no representations about when or whether the app
              will launch, or that it will meet any particular requirements.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">4. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Mismo and its creator are not liable for
              any indirect, incidental, or consequential damages arising from your participation
              in the waitlist.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">5. Changes</h2>
            <p>
              We may update these terms at any time. Continued use of the waitlist after changes
              are posted constitutes your acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">6. Contact</h2>
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
