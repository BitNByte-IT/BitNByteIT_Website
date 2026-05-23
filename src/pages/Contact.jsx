import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, MessageCircle, Send, CheckCircle2, AlertCircle, Linkedin, Github, Facebook } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import site from '../data/site.json'

const topics = ['Web Development', 'Mobile App', 'Custom Software', 'UI/UX Design', 'Cloud / DevOps', 'AI Integration', 'Project Support', 'Other']

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', topic: '', budget: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const validate = () => {
    const e = {}
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Please enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (form.phone && !/^[+]?[0-9\s\-()]{7,20}$/.test(form.phone)) e.phone = 'Please enter a valid phone number.'
    if (!form.topic) e.topic = 'Please select a topic.'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    return e
  }

  const handleChange = (k) => (ev) => {
    setForm((f) => ({ ...f, [k]: ev.target.value }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length) { setErrors(v); return }

    setStatus('sending')
    try {
      const url = site.googleSheets.contactFormUrl
      if (!url || url.startsWith('REPLACE')) {
        // Demo mode — no real backend yet
        await new Promise((r) => setTimeout(r, 1000))
        setStatus('success')
        setForm({ name: '', email: '', phone: '', topic: '', budget: '', message: '' })
        return
      }
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          ...form,
          timestamp: new Date().toISOString(),
          source: 'website-contact',
        }),
      })
      setStatus('success')
      setForm({ name: '', email: '', phone: '', topic: '', budget: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Let's talk"
            title="Have a project"
            accent="in mind?"
            description="Drop us a message and we'll get back to you within 24 hours. We respond to every inquiry."
          />
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            {/* Left: Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="card p-6">
                <h3 className="font-display font-semibold text-lg mb-4">Get in touch</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="size-10 rounded-lg bg-brand-orange-500/10 border border-brand-orange-500/20 flex items-center justify-center shrink-0">
                      <Mail className="size-4 text-brand-orange-500" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Email</div>
                      <a href={`mailto:${site.contact.email}`} className="text-sm font-medium hover:text-brand-orange-500 transition-colors break-all">
                        {site.contact.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-10 rounded-lg bg-brand-orange-500/10 border border-brand-orange-500/20 flex items-center justify-center shrink-0">
                      <MapPin className="size-4 text-brand-orange-500" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Location</div>
                      <div className="text-sm font-medium">{site.contact.address}</div>
                    </div>
                  </li>
                  {site.contact.whatsapp.map((w) => (
                    <li key={w} className="flex items-start gap-3">
                      <div className="size-10 rounded-lg bg-brand-orange-500/10 border border-brand-orange-500/20 flex items-center justify-center shrink-0">
                        <MessageCircle className="size-4 text-brand-orange-500" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">WhatsApp</div>
                        <a href={`https://wa.me/${w.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-brand-orange-500 transition-colors">
                          {w}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-display font-semibold text-lg mb-4">Follow us</h3>
                <div className="flex gap-2 flex-wrap">
                  <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="btn-ghost !py-2 !px-4 !text-sm">
                    <Linkedin className="size-4" /> LinkedIn
                  </a>
                  <a href={site.social.github} target="_blank" rel="noreferrer" className="btn-ghost !py-2 !px-4 !text-sm">
                    <Github className="size-4" /> GitHub
                  </a>
                  <a href={site.social.facebook} target="_blank" rel="noreferrer" className="btn-ghost !py-2 !px-4 !text-sm">
                    <Facebook className="size-4" /> Facebook
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="card p-5 sm:p-6 md:p-8 space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    className={`w-full rounded-xl px-4 py-3 bg-white dark:bg-white/5 border ${errors.name ? 'border-rose-500' : 'border-slate-300 dark:border-white/15'} focus:outline-none focus:border-brand-orange-500 transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    className={`w-full rounded-xl px-4 py-3 bg-white dark:bg-white/5 border ${errors.email ? 'border-rose-500' : 'border-slate-300 dark:border-white/15'} focus:outline-none focus:border-brand-orange-500 transition-colors`}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone (optional)</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className={`w-full rounded-xl px-4 py-3 bg-white dark:bg-white/5 border ${errors.phone ? 'border-rose-500' : 'border-slate-300 dark:border-white/15'} focus:outline-none focus:border-brand-orange-500 transition-colors`}
                    placeholder="+880..."
                  />
                  {errors.phone && <p className="mt-1 text-xs text-rose-500">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Topic *</label>
                  <select
                    value={form.topic}
                    onChange={handleChange('topic')}
                    className={`w-full rounded-xl px-4 py-3 bg-white dark:bg-white/5 border ${errors.topic ? 'border-rose-500' : 'border-slate-300 dark:border-white/15'} focus:outline-none focus:border-brand-orange-500 transition-colors`}
                  >
                    <option value="">Select a topic...</option>
                    {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.topic && <p className="mt-1 text-xs text-rose-500">{errors.topic}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Estimated Budget (optional)</label>
                <select
                  value={form.budget}
                  onChange={handleChange('budget')}
                  className="w-full rounded-xl px-4 py-3 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/15 focus:outline-none focus:border-brand-orange-500 transition-colors"
                >
                  <option value="">Prefer not to say</option>
                  <option value="<500">Under $500</option>
                  <option value="500-2k">$500 – $2,000</option>
                  <option value="2k-5k">$2,000 – $5,000</option>
                  <option value="5k-10k">$5,000 – $10,000</option>
                  <option value="10k+">$10,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Message *</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={handleChange('message')}
                  className={`w-full rounded-xl px-4 py-3 bg-white dark:bg-white/5 border ${errors.message ? 'border-rose-500' : 'border-slate-300 dark:border-white/15'} focus:outline-none focus:border-brand-orange-500 transition-colors resize-none`}
                  placeholder="Tell us about your project, goals, and timeline..."
                />
                {errors.message && <p className="mt-1 text-xs text-rose-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : <>Send Message <Send className="size-4" /></>}
              </button>

              {status === 'success' && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong>Message sent!</strong> We'll get back to you within 24 hours.
                  </div>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400">
                  <AlertCircle className="size-5 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong>Something went wrong.</strong> Please try again or email us directly.
                  </div>
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </section>
    </>
  )
}
