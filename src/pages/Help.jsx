import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Mail, MessageCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import site from '../data/site.json'

const faqs = [
  {
    q: 'How do I start a project with BitNByte IT?',
    a: 'Fill out our contact form or email us at our address. We typically respond within 24 hours. After an initial discovery call, we share a proposal with scope, timeline, and pricing.',
  },
  {
    q: 'What is your typical project timeline?',
    a: 'Small landing sites take 1–2 weeks. Standard web/mobile apps take 4–8 weeks. Larger custom platforms take 2–6 months. We share clear milestones upfront.',
  },
  {
    q: 'Do you offer ongoing maintenance and support?',
    a: 'Yes. We offer monthly maintenance plans covering bug fixes, updates, security patches, and small feature additions.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Absolutely. We sign NDAs for any project where confidentiality is a concern. Just let us know during initial discussion.',
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'We are primarily a MERN stack team — React, Node.js, MongoDB, Express. We also work with Next.js, React Native, Flutter, Python, AWS, and modern AI/LLM tooling.',
  },
  {
    q: 'Do you help with final year / semester projects?',
    a: 'Yes! We support university students with project development, UI/UX, backend, debugging, documentation, deployment, and presentation prep.',
  },
  {
    q: 'Can you work with overseas clients?',
    a: 'Yes. We work with clients globally and adjust meeting times to your timezone. All communication is in English.',
  },
  {
    q: 'How do payments work?',
    a: 'Most projects use milestone-based payments — typically 30% upfront, 30% mid-project, and 40% on delivery. We accept bank transfer, Wise, and other international payment methods.',
  },
]

function FAQItem({ item, index, open, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="card overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-medium text-sm md:text-base">{item.q}</span>
        <ChevronDown className={`size-5 text-brand-orange-500 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Help() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Help center"
            title="Frequently Asked"
            accent="Questions"
            description="Answers to the most common questions. Can't find what you need? Reach out anytime."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x max-w-3xl">
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FAQItem
                key={i}
                item={f}
                index={i}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-x max-w-3xl">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-orange-500/10 via-transparent to-brand-blue-500/10 p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Still have questions?</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">We're here to help. Reach out via any channel below.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`mailto:${site.contact.email}`} className="btn-primary">
                <Mail className="size-4" /> Email us
              </a>
              <a href={`https://wa.me/${site.contact.whatsapp[0].replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="btn-ghost">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
