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
            <p>
              By creating an account or using Mismo (&quot;the app&quot;, &quot;the service&quot;),
              you agree to these terms. If you do not agree, do not use the service.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">1. The service</h2>
            <p>
              Mismo is an AI-powered voice memo app for iOS that records audio, transcribes it,
              generates summaries, and organizes your content into folders. Features may change
              over time as the product evolves.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">2. Account registration</h2>
            <p>
              You must provide a valid email address to create an account. You are responsible
              for maintaining the security of your account and for all activity that occurs
              under it. You must be at least 13 years old to use Mismo.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">3. Your content</h2>
            <p>
              You own the recordings, transcripts, and other content you create in Mismo. By
              using the service, you grant us a limited license to store, process, and transmit
              your content solely to provide the features of the app — including sending audio
              to third-party AI services for transcription and summarization. We do not claim
              ownership of your content and do not use it for any purpose beyond operating the
              service.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">4. AI processing</h2>
            <p>
              Your audio recordings are processed by third-party AI providers (Deepgram for
              transcription, Anthropic for summarization) to deliver the core features of the
              app. By using Mismo, you consent to this processing. See our{' '}
              <Link
                href="/privacy"
                className="text-black underline underline-offset-2 hover:text-black/60 transition-colors"
              >
                Privacy Policy
              </Link>{' '}
              for details on how these providers handle your data.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">5. Acceptable use</h2>
            <p>You agree not to use Mismo to:</p>
            <ul className="mt-2 space-y-1 list-none">
              <li>— Record or store content that violates any applicable law</li>
              <li>— Attempt to access, reverse-engineer, or interfere with the service</li>
              <li>— Use the service in any way that could harm other users or third parties</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">6. No warranties</h2>
            <p>
              Mismo is provided &quot;as is&quot; without warranties of any kind. We do not
              guarantee that the service will be uninterrupted, error-free, or that AI-generated
              transcriptions, summaries, or reminders will be accurate.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">7. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Mismo and its creator are not liable for
              any indirect, incidental, or consequential damages arising from your use of the
              service, including any loss of data or reliance on AI-generated content.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">8. Account termination</h2>
            <p>
              You may delete your account at any time via{' '}
              <span className="font-medium text-black">Settings → Delete Account</span> in the
              app. Deletion is immediate and permanent. We reserve the right to suspend or
              terminate accounts that violate these terms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">9. Changes</h2>
            <p>
              We may update these terms as the product evolves. Continued use of the service
              after changes are posted constitutes your acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">10. Contact</h2>
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
