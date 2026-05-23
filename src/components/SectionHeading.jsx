import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, accent, description, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'
  const mxClass = align === 'left' ? '' : 'mx-auto'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${mxClass} ${alignClass} mb-12 md:mb-16`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-brand-orange-500/30 bg-brand-orange-500/10 text-brand-orange-600 dark:text-brand-orange-400 mb-4`}>
          <span className="size-1.5 rounded-full bg-brand-orange-500 animate-glow" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}{' '}
        {accent && <span className="heading-gradient-warm">{accent}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}
    </motion.div>
  )
}
