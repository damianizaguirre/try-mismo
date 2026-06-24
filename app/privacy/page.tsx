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
            <p>
              Mismo (&quot;we&quot;, &quot;us&quot;) is an AI-powered voice memo app for iOS built by
              Damian Izaguirre. This policy explains what data we collect, why we collect it,
              and how it is handled.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-3">Information we collect</h2>
            <ul className="space-y-3 list-none">
              <li>
                <span className="font-medium text-black">Account information.</span>{' '}
                Your email address and display name when you create an account via email/password,
                Google Sign-In, or Sign in with Apple.
              </li>
              <li>
                <span className="font-medium text-black">Voice recordings.</span>{' '}
                Audio files you record inside the app (M4A format). These are uploaded to secure
                cloud storage and are private to your account.
              </li>
              <li>
                <span className="font-medium text-black">Transcripts and summaries.</span>{' '}
                Your audio is automatically transcribed and summarized by AI. The resulting text
                is stored alongside your recording and is private to your account.
              </li>
              <li>
                <span className="font-medium text-black">Location data.</span>{' '}
                If you grant location permission, we attach an approximate location to recordings
                for context. This is optional and can be disabled in your device settings.
              </li>
              <li>
                <span className="font-medium text-black">Folders and reminders.</span>{' '}
                The organizational structure you create — folder names, icons, colors — and any
                reminders extracted from your recordings.
              </li>
              <li>
                <span className="font-medium text-black">Push notification token.</span>{' '}
                A device token issued by Apple used solely to deliver reminder notifications you
                have set up in the app.
              </li>
              <li>
                <span className="font-medium text-black">Crash and error data.</span>{' '}
                Technical information (device model, OS version, stack traces) collected
                automatically when the app crashes. No recording content is included.
              </li>
              <li>
                <span className="font-medium text-black">Usage analytics.</span>{' '}
                Anonymized event data about how features are used (e.g., recording started,
                folder created). No audio or transcript content is included.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-3">How we use your information</h2>
            <ul className="space-y-2 list-none">
              <li>— Transcribing and summarizing your voice recordings</li>
              <li>— Organizing recordings into folders and surfacing reminders</li>
              <li>— Delivering push notifications for reminders you create</li>
              <li>— Diagnosing crashes and improving app stability</li>
              <li>— Understanding which features are used so we can improve the product</li>
            </ul>
            <p className="mt-4">
              We do not sell your data. We do not use your recordings, transcripts, or personal
              information for advertising.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-3">Third-party services</h2>
            <p className="mb-4">
              Mismo uses the following third-party providers. Each processes only the data
              necessary for its function.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-black">Supabase</p>
                <p className="text-black/60 text-sm mt-0.5">
                  Backend infrastructure — database, file storage, authentication, and realtime
                  updates. Your account data, recordings, transcripts, folders, and reminders are
                  stored on Supabase.{' '}
                  <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-black/80 transition-colors">
                    supabase.com/privacy
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium text-black">OpenAI</p>
                <p className="text-black/60 text-sm mt-0.5">
                  AI transcription and summarization. Your audio is sent to OpenAI for processing
                  after each recording. Processed audio is not retained by OpenAI for training
                  purposes under our API agreement.{' '}
                  <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-black/80 transition-colors">
                    openai.com/privacy
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium text-black">Google</p>
                <p className="text-black/60 text-sm mt-0.5">
                  Sign-in with Google (optional). If you choose Google Sign-In, Google shares
                  your name and email with us for authentication only.{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-black/80 transition-colors">
                    policies.google.com/privacy
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium text-black">Apple</p>
                <p className="text-black/60 text-sm mt-0.5">
                  Sign in with Apple (optional) and push notification delivery via APNs. Apple&apos;s
                  privacy practices apply to any data shared through these services.{' '}
                  <a href="https://www.apple.com/legal/privacy" target="_blank" rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-black/80 transition-colors">
                    apple.com/legal/privacy
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium text-black">Sentry</p>
                <p className="text-black/60 text-sm mt-0.5">
                  Crash reporting and error tracking. Receives device model, OS version, and
                  stack traces when the app encounters an error. No personal content is
                  transmitted.{' '}
                  <a href="https://sentry.io/privacy" target="_blank" rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-black/80 transition-colors">
                    sentry.io/privacy
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium text-black">PostHog</p>
                <p className="text-black/60 text-sm mt-0.5">
                  Product analytics. Receives anonymized usage events to help us understand how
                  the app is used. No audio, transcripts, or personally identifiable content is
                  included in these events.{' '}
                  <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-black/80 transition-colors">
                    posthog.com/privacy
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium text-black">UserJot</p>
                <p className="text-black/60 text-sm mt-0.5">
                  In-app feedback collection. Used to gather feature requests and bug reports you
                  voluntarily submit through the app.{' '}
                  <a href="https://userjot.com/privacy" target="_blank" rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-black/80 transition-colors">
                    userjot.com/privacy
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">Data retention and deletion</h2>
            <p>
              Your recordings, transcripts, folders, and account data are retained as long as
              your account is active. You can delete individual recordings at any time from
              within the app. To delete your entire account and all associated data, go to{' '}
              <span className="font-medium text-black">Settings → Delete Account</span> —
              deletion is immediate and permanent. For any other data requests, contact us at{' '}
              <a href="mailto:heymismo@gmail.com"
                className="text-black underline underline-offset-2 hover:text-black/60 transition-colors">
                heymismo@gmail.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">Children&apos;s privacy</h2>
            <p>
              Mismo is not directed at children under 13. We do not knowingly collect personal
              information from children under 13.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">Changes to this policy</h2>
            <p>
              We may update this policy as the product evolves. Significant changes will be
              reflected here with a new effective date. Continued use of the app after changes
              are posted constitutes acceptance.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black mb-2">Contact</h2>
            <p>
              Questions or requests?{' '}
              <a href="mailto:heymismo@gmail.com"
                className="text-black underline underline-offset-2 hover:text-black/60 transition-colors">
                heymismo@gmail.com
              </a>
            </p>
          </div>

        </section>
      </div>
    </main>
  )
}
