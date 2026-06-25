import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Mismo',
}

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'

function PlainEnglish({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl px-4 py-3 mb-4" style={{ background: '#efefef' }}>
      <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1.5">Plain English</p>
      <p className="text-sm leading-relaxed text-black/60">{children}</p>
    </div>
  )
}

function Section({ title, plain, children }: { title: string; plain: string; children: React.ReactNode }) {
  return (
    <div className="space-y-0">
      <h2 className="font-semibold text-black text-[17px] mb-3">{title}</h2>
      <PlainEnglish>{plain}</PlainEnglish>
      <div className="space-y-3 text-[14px] leading-relaxed text-black/60">{children}</div>
    </div>
  )
}

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
        <p className="text-sm text-black/40 mb-10">Last updated: June 14, 2026</p>

        <div className="space-y-10">

          <Section
            title="1. Acceptance of Terms"
            plain="By creating a Mismo account or using the app, you're agreeing to these terms. If you don't agree, don't use Mismo."
          >
            <p>
              These Terms of Service govern your access to and use of the Mismo — AI Voice Memos
              application operated by Damian Izaguirre (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By creating
              an account or using the App, you agree to be bound by these Terms. If you do not
              agree, do not access or use Mismo.
            </p>
            <p>
              These Terms apply alongside our{' '}
              <Link href="/privacy" className="text-black font-medium underline underline-offset-2 hover:text-black/60 transition-colors">
                Privacy Policy
              </Link>
              , which is incorporated by reference.
            </p>
          </Section>

          <Section
            title="2. Eligibility"
            plain="You must be at least 13 years old to use Mismo. By signing up, you're confirming you meet that requirement."
          >
            <p>
              Mismo is intended for users 13 years of age and older. By creating an account, you
              represent that you are at least 13 years old and that your use of the App complies
              with all applicable laws. If you are under 18, you represent that a parent or legal
              guardian has reviewed and agreed to these Terms on your behalf.
            </p>
          </Section>

          <Section
            title="3. Your Account"
            plain="You're responsible for keeping your account secure. Don't share your login. If something looks wrong, let us know immediately."
          >
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to:</p>
            <ul className="list-none space-y-1 mt-1">
              <li>— Provide accurate information when creating your account</li>
              <li>— Keep your password secure and not share it with others</li>
              <li>— Notify us immediately at <a href="mailto:heymismo@gmail.com" className="text-black font-medium">heymismo@gmail.com</a> if you suspect unauthorized access</li>
              <li>— Accept responsibility for all activity conducted through your account</li>
            </ul>
            <p>We reserve the right to suspend or terminate accounts that violate these Terms.</p>
          </Section>

          <Section
            title="4. Subscription & Billing"
            plain="Mismo Pro is a paid subscription billed through Apple. Apple handles all payments and refunds — not us. Your subscription renews automatically until you cancel it in your App Store settings."
          >
            <p><span className="font-medium text-black">Subscription Plans.</span> Mismo offers an optional paid subscription (&quot;Mismo Pro&quot;) with monthly and annual billing options. Pricing is displayed within the App prior to purchase.</p>
            <p><span className="font-medium text-black">Free Trial.</span> New users may be offered a free trial. At the end of the trial, your subscription begins automatically unless cancelled at least 24 hours before the trial expires. Free trials are available once per Apple ID per subscription group.</p>
            <p><span className="font-medium text-black">Billing.</span> All payments are processed by Apple through the App Store. Subscriptions automatically renew at the end of each billing period unless cancelled.</p>
            <p><span className="font-medium text-black">Cancellation.</span> You may cancel at any time through iPhone Settings → Apple ID → Subscriptions. Cancellation takes effect at the end of the current billing period.</p>
            <p><span className="font-medium text-black">Refunds.</span> All refund requests are handled by Apple. We do not process refunds directly. To request a refund, visit <span className="font-medium text-black">reportaproblem.apple.com</span>.</p>
            <p><span className="font-medium text-black">Price Changes.</span> We may change subscription pricing with advance notice. Continued use after a price change constitutes acceptance.</p>
          </Section>

          <Section
            title="5. Acceptable Use"
            plain="Use Mismo for its intended purpose — recording and organizing your own voice memos. Don't use it to record others without their consent, break laws, or abuse the service."
          >
            <p>You agree not to:</p>
            <ul className="list-none space-y-1 mt-1">
              <li>— Record conversations or individuals without their consent where required by applicable law</li>
              <li>— Collect or store personal information of others without their consent</li>
              <li>— Attempt to reverse engineer or extract source code from the App</li>
              <li>— Use automated tools to access or extract data from the App</li>
              <li>— Attempt to gain unauthorized access to the App or its infrastructure</li>
              <li>— Use the App in violation of any applicable law</li>
              <li>— Impersonate any person or entity</li>
              <li>— Interfere with the integrity or performance of the App</li>
            </ul>
          </Section>

          <Section
            title="6. Your Content"
            plain="Your recordings are yours. We don't claim ownership over anything you record or create in Mismo. We only use your content to operate the app — never to sell or share it."
          >
            <p>
              You retain full ownership of all audio recordings, transcripts, summaries, and
              other content you create within Mismo. By using the App, you grant us a limited,
              non-exclusive, royalty-free license to store, process, and transmit your content
              solely as necessary to provide the service to you.
            </p>
            <p>
              This license does not permit us to sell, share, or use your content for any purpose
              beyond operating the App for you. We do not claim any intellectual property rights
              over your content.
            </p>
          </Section>

          <Section
            title="7. Our Intellectual Property"
            plain="The Mismo app, name, design, and technology belong to us. You're licensed to use the app — not to copy, sell, or build on top of it."
          >
            <p>
              The Mismo application, including its name, logo, design, code, and features, is
              owned by Damian Izaguirre and protected by applicable intellectual property laws.
              These Terms grant you a limited, non-transferable license to use the App on your
              personal device for personal use only.
            </p>
            <p>
              You may not copy, modify, distribute, sell, or create derivative works based on
              any part of Mismo without our express written permission.
            </p>
          </Section>

          <Section
            title="8. Disclaimers"
            plain="Mismo is provided as-is. The AI transcription and summaries aren't perfect — don't rely on them for anything critical. We can't guarantee the app will always be available or error-free."
          >
            <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
            <p>We do not warrant that:</p>
            <ul className="list-none space-y-1 mt-1">
              <li>— The App will be uninterrupted or error-free</li>
              <li>— AI-generated transcripts, summaries, or folder suggestions will be accurate</li>
              <li>— The App will meet your specific requirements</li>
              <li>— Data stored in the App will never be lost or corrupted</li>
            </ul>
            <p>AI-generated content is provided for convenience only. You are responsible for verifying its accuracy before relying on it.</p>
          </Section>

          <Section
            title="9. Limitation of Liability"
            plain="If something goes wrong with Mismo, our liability is capped at what you paid us in the last 12 months. We're not on the hook for indirect damages like lost data or lost business."
          >
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, DAMIAN IZAGUIRRE SHALL NOT BE LIABLE FOR
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING
              LOSS OF DATA, LOSS OF PROFITS, OR BUSINESS INTERRUPTION.
            </p>
            <p>
              OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM THESE TERMS OR THE APP SHALL NOT
              EXCEED THE AMOUNT YOU PAID IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
            <p>Some jurisdictions do not allow these limitations, so the above may not apply to you in full.</p>
          </Section>

          <Section
            title="10. Termination"
            plain="You can delete your account anytime in Settings. We can suspend or terminate accounts that violate these Terms."
          >
            <p>
              You may terminate your account at any time through{' '}
              <span className="font-medium text-black">Settings → Delete Account</span>. Upon
              termination, your account and data are deleted per our Privacy Policy.
            </p>
            <p>
              We reserve the right to suspend or terminate your access at any time for conduct
              that violates these Terms or is harmful to other users or third parties.
            </p>
            <p>Sections 6, 7, 8, 9, and 11 of these Terms survive termination.</p>
          </Section>

          <Section
            title="10b. Apple App Store — Additional Terms"
            plain="Because Mismo is distributed through Apple's App Store, Apple has certain rights and responsibilities that are separate from ours. Apple is not responsible for the app or any support — that's on us."
          >
            <p><span className="font-medium text-black">Acknowledgement.</span> These Terms are between you and Damian Izaguirre only, not with Apple. Damian Izaguirre, not Apple, is solely responsible for the App and its content.</p>
            <p><span className="font-medium text-black">Scope of License.</span> Your license to use the App is non-transferable and limited to Apple-branded devices you own or control, subject to Apple&apos;s App Store Terms of Service.</p>
            <p><span className="font-medium text-black">Maintenance and Support.</span> Damian Izaguirre is solely responsible for maintenance and support. Apple has no obligation to provide support for the App.</p>
            <p><span className="font-medium text-black">Warranty.</span> If the App fails to conform to any applicable warranty, you may notify Apple for a refund of the purchase price. Apple has no other warranty obligation with respect to the App.</p>
            <p><span className="font-medium text-black">Product Claims.</span> Damian Izaguirre, not Apple, is responsible for addressing any claims relating to the App, including product liability, legal compliance, and consumer protection claims.</p>
            <p><span className="font-medium text-black">Intellectual Property.</span> Damian Izaguirre, not Apple, is solely responsible for defending any intellectual property infringement claims relating to the App.</p>
            <p><span className="font-medium text-black">Third-Party Beneficiary.</span> Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you upon your acceptance.</p>
            <p><span className="font-medium text-black">Legal Compliance.</span> You represent that you are not located in a U.S.-embargoed country and are not listed on any U.S. Government list of prohibited parties.</p>
          </Section>

          <Section
            title="11. Governing Law"
            plain="These terms are governed by Texas law. If there's ever a legal dispute, it would be handled in Dallas, Texas."
          >
            <p>
              These Terms are governed by the laws of the State of Texas, without regard to
              conflict of law provisions. Any legal action shall be brought exclusively in the
              state or federal courts in Dallas County, Texas, and you consent to personal
              jurisdiction there.
            </p>
          </Section>

          <Section
            title="12. Changes to These Terms"
            plain="If we make significant changes, we'll notify you in the app. Continuing to use Mismo after that means you accept the updated terms."
          >
            <p>
              We may update these Terms from time to time. We will notify you of material changes
              by posting a notice within the App and updating the date above. Continued use after
              changes take effect constitutes acceptance. If you do not agree, you must stop using
              the App and delete your account.
            </p>
          </Section>

          <div className="pt-2 border-t border-black/10">
            <h2 className="font-semibold text-black text-[17px] mb-4">13. Contact Us</h2>
            <div className="rounded-xl bg-white/60 px-5 py-4 text-[14px] leading-relaxed text-black/60">
              <p>
                <span className="font-medium text-black">Damian Izaguirre</span><br />
                Mismo — AI Voice Memos<br />
                Dallas, Texas<br />
                <a href="mailto:heymismo@gmail.com" className="text-black font-medium hover:text-black/60 transition-colors">heymismo@gmail.com</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
