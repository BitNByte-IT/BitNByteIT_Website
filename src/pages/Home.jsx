import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Quote } from 'lucide-react'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import DeviceShowcase from '../components/DeviceShowcase'
import services from '../data/services.json'
import projects from '../data/projects.json'
import reviews from '../data/reviews.json'
import linkedin from '../data/linkedin.json'

export default function Home() {
  const featuredServices = services.services.slice(0, 6)
  const featuredProjects = projects.projects.slice(0, 3)

  return (
    <>
      <Hero />

      <Marquee />

      {/* Services preview */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title="Services that"
            accent="ship results"
            description="From custom software to AI integrations - we build the digital infrastructure that scales your business."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-ghost">
              See all services <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Device showcase / hero-style splash */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue-500/5 to-transparent" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Built for every screen"
            title="One codebase,"
            accent="every device"
            description="Responsive design baked in - your product looks gorgeous on desktop, tablet, and mobile."
          />
          <DeviceShowcase />
        </div>
      </section>

      {/* Projects preview */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects we're"
            accent="proud of"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card overflow-hidden group"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-brand-blue-500/20 to-brand-orange-500/20 flex items-center justify-center text-4xl font-display font-bold text-white/40">
                  {p.title.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-brand-orange-500/10 text-brand-orange-500 border border-brand-orange-500/20">
                      {p.category}
                    </span>
                    <span className="text-[11px] text-slate-500">{p.year}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-brand-orange-500 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/portfolio" className="btn-ghost">
              View full portfolio <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28 relative">
        <div className="container-x">
          <SectionHeading
            eyebrow="Client voices"
            title="What our clients"
            accent="say about us"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.reviews.slice(0, 6).map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card p-6"
              >
                <Quote className="size-8 text-brand-orange-500/30 mb-3" />
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-brand-orange-500 text-brand-orange-500" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                  <div className="size-10 rounded-full bg-gradient-to-br from-brand-orange-500 to-brand-blue-500 flex items-center justify-center text-white font-semibold text-sm">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-slate-500">{r.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn posts */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="From our LinkedIn"
            title="Latest"
            accent="updates"
            description="Stay connected with our latest posts, project showcases, and industry insights."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {linkedin.posts.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card overflow-hidden group block"
              >
                <div className="overflow-hidden bg-slate-100 dark:bg-brand-blue-950/30">
                  <img src={p.image} alt={p.title} className="w-full h-auto block object-contain group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-mono text-brand-orange-500">{p.date}</span>
                  <h3 className="font-display font-semibold text-base mt-1 mb-2 group-hover:text-brand-orange-500 transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {p.excerpt}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-blue-950 via-brand-blue-900 to-brand-blue-950 p-8 md:p-16 text-center"
          >
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-brand-orange-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-brand-blue-500/30 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
                Let's build something <span className="heading-gradient-warm">remarkable</span>
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                From idea to launch - we're with you every step of the way. Tell us about your project.
              </p>
              <Link to="/contact" className="btn-primary">
                Start a conversation <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
