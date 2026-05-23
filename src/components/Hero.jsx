import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code2, Smartphone } from 'lucide-react'
import Terminal from './Terminal'
import site from '../data/site.json'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-20 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-brand-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-brand-orange-500/20 rounded-full blur-3xl" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-brand-orange-500/30 bg-brand-orange-500/10 text-brand-orange-500 mb-6"
            >
              <Sparkles className="size-3" />
              Now exploring AI-powered solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              We craft{' '}
              <span className="heading-gradient-warm">digital products</span>
              {' '}that grow your business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl"
            >
              {site.company.longDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/contact" className="btn-primary">
                Start Your Project <ArrowRight className="size-4" />
              </Link>
              <Link to="/portfolio" className="btn-ghost">
                See Our Work
              </Link>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md"
            >
              {site.stats.map((s, i) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-xl md:text-2xl text-brand-orange-500">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Terminal + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <Terminal />

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass-strong rounded-xl p-3 shadow-xl hidden sm:flex items-center gap-2"
            >
              <div className="size-9 rounded-lg bg-brand-orange-500/20 flex items-center justify-center">
                <Code2 className="size-5 text-brand-orange-500" />
              </div>
              <div>
                <div className="text-xs font-semibold">Clean code</div>
                <div className="text-[10px] text-slate-500">Production-grade</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 glass-strong rounded-xl p-3 shadow-xl hidden sm:flex items-center gap-2"
            >
              <div className="size-9 rounded-lg bg-brand-blue-500/20 flex items-center justify-center">
                <Smartphone className="size-5 text-brand-blue-500" />
              </div>
              <div>
                <div className="text-xs font-semibold">Responsive</div>
                <div className="text-[10px] text-slate-500">All devices</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
