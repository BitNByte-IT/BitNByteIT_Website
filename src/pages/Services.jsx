import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import services from '../data/services.json'

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our services"
            title="Everything you need to"
            accent="build & scale"
            description="A complete IT partner — from product strategy to ongoing support."
          />
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 relative">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we work"
            title="A simple,"
            accent="proven process"
          />
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: '01', title: 'Discover', desc: 'We understand your business, goals, and constraints in a deep-dive session.' },
              { step: '02', title: 'Design', desc: 'Wireframes, mockups, and technical architecture — approved before code.' },
              { step: '03', title: 'Develop', desc: 'Agile sprints with weekly demos, transparent progress, and quality reviews.' },
              { step: '04', title: 'Deploy & Support', desc: 'Launch to production, monitor, and iterate with ongoing support.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative card p-6"
              >
                <div className="font-display font-bold text-5xl heading-gradient-warm mb-3 opacity-60">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-x">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-orange-500/10 via-transparent to-brand-blue-500/10 p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">
              Not sure where to start?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-xl mx-auto">
              Book a free 30-min consultation and we'll help you scope out the right solution.
            </p>
            <Link to="/contact" className="btn-primary">
              Book free consultation <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
