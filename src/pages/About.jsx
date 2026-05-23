import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Eye, Heart, Award, ArrowRight, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Terminal from '../components/Terminal'
import site from '../data/site.json'

export default function About() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-brand-orange-500/30 bg-brand-orange-500/10 text-brand-orange-500 mb-6"
            >
              <Sparkles className="size-3" />
              About BitNByte IT
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            >
              Technology, <span className="heading-gradient-warm">human-first</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              className="mt-5 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              We're a full-service technology company helping businesses, entrepreneurs, and organizations
              succeed in the digital world. From custom software to AI integrations — we deliver tailored
              solutions that simplify technology, enhance efficiency, and create lasting value.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              className="mt-6 grid grid-cols-2 gap-4 max-w-md"
            >
              {site.stats.map((s) => (
                <div key={s.label} className="card p-4">
                  <div className="font-display font-bold text-2xl heading-gradient-warm">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
          >
            <Terminal />
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: 'Mission', text: 'To deliver high-quality, innovative, and tailored IT and software solutions that simplify technology and create lasting value for our clients.' },
              { icon: Eye, title: 'Vision', text: 'To be the trusted technology partner for businesses across South Asia — known for craftsmanship, reliability, and forward-thinking solutions.' },
              { icon: Heart, title: 'Values', text: 'Honesty, craftsmanship, continuous learning, and putting our clients\' success at the center of everything we build.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-7"
              >
                <div className="size-12 rounded-xl bg-gradient-to-br from-brand-orange-500/20 to-brand-blue-500/20 border border-white/10 flex items-center justify-center mb-5">
                  <item.icon className="size-6 text-brand-orange-500" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why us"
            title="Built for"
            accent="lasting partnerships"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Modern Design', text: 'Pixel-perfect, on-brand designs that feel premium.' },
              { title: 'Quality Development', text: 'Production-grade code, reviewed and tested.' },
              { title: 'On-time Delivery', text: 'Clear timelines, weekly demos, transparent progress.' },
              { title: '100% Satisfaction', text: 'We iterate until you\'re thrilled with the result.' },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card p-5"
              >
                <Award className="size-7 text-brand-orange-500 mb-3" />
                <h4 className="font-display font-semibold mb-1.5">{f.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-x">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-blue-950 via-brand-blue-900 to-brand-blue-950 p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-orange-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-3">
                Ready to work together?
              </h2>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
              <Link to="/contact" className="btn-primary">
                Get in touch <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
