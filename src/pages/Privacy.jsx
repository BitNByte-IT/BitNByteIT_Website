import React from 'react'
import SectionHeading from '../components/SectionHeading'
import site from '../data/site.json'

export default function Privacy() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-x max-w-4xl">
        <SectionHeading
          eyebrow="Legal"
          title="Privacy"
          accent="Policy"
          align="left"
        />
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300">
          <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">1. Introduction</h2>
          <p>BitNByte IT ("we", "us", "our") respects your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Contact information</strong> — name, email, phone, and message content when you submit our contact form or subscribe to our newsletter.</li>
            <li><strong>Usage data</strong> — pages visited, time spent, and basic analytics (no personally identifying tracking).</li>
            <li><strong>Project information</strong> — details about your business and project needs that you share with us voluntarily.</li>
          </ul>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">3. How We Use Your Information</h2>
          <p>We use collected information to: respond to your inquiries, provide our services, send project updates, and improve our website. We never sell your personal data.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">4. Data Storage</h2>
          <p>Form submissions may be stored in secure services (e.g., Google Sheets, Google Workspace). We follow industry-standard security practices.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">5. Third-Party Services</h2>
          <p>We may use third-party services for analytics, hosting, and form processing. These services have their own privacy policies.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">6. Your Rights</h2>
          <p>You may request access, correction, or deletion of your personal data at any time. Contact us at <a href={`mailto:${site.contact.email}`} className="text-brand-orange-500 hover:underline">{site.contact.email}</a>.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">7. Changes to This Policy</h2>
          <p>We may update this policy from time to time. Changes will be posted on this page with a new "Last updated" date.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">8. Contact</h2>
          <p>For questions about this Privacy Policy, contact us at <a href={`mailto:${site.contact.email}`} className="text-brand-orange-500 hover:underline">{site.contact.email}</a>.</p>
        </div>
      </div>
    </section>
  )
}
