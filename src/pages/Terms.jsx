import React from 'react'
import SectionHeading from '../components/SectionHeading'
import site from '../data/site.json'

export default function Terms() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-x max-w-4xl">
        <SectionHeading
          eyebrow="Legal"
          title="Terms &"
          accent="Conditions"
          align="left"
        />
        <div className="space-y-6 text-slate-700 dark:text-slate-300">
          <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">1. Acceptance of Terms</h2>
          <p>By accessing or using BitNByte IT's services or website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">2. Services</h2>
          <p>BitNByte IT provides software development, web and mobile application development, design, cloud, AI, and IT consulting services. Specific deliverables and timelines are agreed upon in individual project contracts.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">3. Intellectual Property</h2>
          <p>Upon full payment, ownership of custom-developed code and assets transfers to the client, unless otherwise specified. BitNByte IT retains the right to showcase the work in our portfolio.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">4. Payment Terms</h2>
          <p>Project payments follow milestones agreed upon in individual contracts. Invoices are typically due within 14 days unless otherwise stated.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">5. Confidentiality</h2>
          <p>We treat all client information as confidential. NDAs can be signed for sensitive projects upon request.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">6. Warranty & Support</h2>
          <p>We provide a 30-day bug-fix warranty after project delivery for issues directly related to delivered code. Ongoing support is available under separate maintenance agreements.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">7. Limitation of Liability</h2>
          <p>BitNByte IT is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Total liability is limited to the amount paid for the specific service in question.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">8. Termination</h2>
          <p>Either party may terminate a project with written notice. Payment will be owed for all work completed up to the termination date.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">9. Governing Law</h2>
          <p>These terms are governed by the laws of Bangladesh. Disputes will be resolved in the courts of Dhaka.</p>

          <h2 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mt-8">10. Contact</h2>
          <p>For questions about these Terms, contact us at <a href={`mailto:${site.contact.email}`} className="text-brand-orange-500 hover:underline">{site.contact.email}</a>.</p>
        </div>
      </div>
    </section>
  )
}
