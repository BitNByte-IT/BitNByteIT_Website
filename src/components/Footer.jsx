import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Facebook, Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import site from '../data/site.json'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const handleNewsletter = async (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ ok: false, msg: 'Please enter a valid email.' })
      return
    }
    setStatus({ ok: null, msg: 'Subscribing...' })
    try {
      const url = site.googleSheets.newsletterUrl
      if (!url || url.startsWith('REPLACE')) {
        // Demo fallback
        setStatus({ ok: true, msg: 'Thanks! We\'ll keep you posted.' })
        setEmail('')
        return
      }
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email, source: 'newsletter' }),
      })
      setStatus({ ok: true, msg: 'Thanks! We\'ll keep you posted.' })
      setEmail('')
    } catch (err) {
      setStatus({ ok: false, msg: 'Something went wrong. Try again.' })
    }
  }

  return (
    <footer className="relative mt-32 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-brand-blue-950/80">
      <div className="container-x py-16">
        {/* Newsletter */}
        <div className="mb-16 grid gap-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-brand-blue-500/5 via-transparent to-brand-orange-500/5 p-8 md:p-12 md:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Stay in the <span className="heading-gradient-warm">loop</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
              Subscribe for updates, new posts, project insights, and exclusive offers.
            </p>
          </div>
          <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 rounded-full px-5 py-3 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/15 focus:outline-none focus:border-brand-orange-500 transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe <Send className="size-4" />
            </button>
          </form>
          {status && (
            <p className={`md:col-span-2 text-sm ${status.ok ? 'text-emerald-500' : 'text-rose-500'}`}>
              {status.msg}
            </p>
          )}
        </div>

        {/* Main grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size={40} />
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {site.company.shortTagline}
            </p>
            <div className="mt-5 flex gap-3">
              <a href={site.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full p-2 border border-slate-300 dark:border-white/15 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">
                <Github className="size-4" />
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full p-2 border border-slate-300 dark:border-white/15 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">
                <Linkedin className="size-4" />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full p-2 border border-slate-300 dark:border-white/15 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">
                <Facebook className="size-4" />
              </a>
              <a href={`https://wa.me/${site.contact.whatsapp[0].replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="rounded-full p-2 border border-slate-300 dark:border-white/15 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><Link to="/about" className="hover:text-brand-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-orange-500 transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-brand-orange-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Legal & Help</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><Link to="/privacy" className="hover:text-brand-orange-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-orange-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/help" className="hover:text-brand-orange-500 transition-colors">Help & Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 text-brand-orange-500 shrink-0" />
                <span>{site.contact.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 text-brand-orange-500 shrink-0" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-brand-orange-500 transition-colors break-all">
                  {site.contact.email}
                </a>
              </li>
              {site.contact.whatsapp.map((w) => (
                <li key={w} className="flex items-start gap-2">
                  <Phone className="size-4 mt-0.5 text-brand-orange-500 shrink-0" />
                  <a href={`https://wa.me/${w.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="hover:text-brand-orange-500 transition-colors">
                    {w}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {site.company.name}. All rights reserved.</p>
          <p className="font-mono">Your Vision. Our Code. Your Success.</p>
        </div>
      </div>
    </footer>
  )
}
