import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({ service, index = 0 }) {
  const Icon = Icons[service.icon] || Icons.Sparkles

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="card card-glow group p-6 md:p-7"
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div className="size-12 rounded-xl bg-gradient-to-br from-brand-orange-500/20 to-brand-blue-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
            <Icon className="size-6 text-brand-orange-500" />
          </div>
          <ArrowUpRight className="size-5 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>

        <h3 className="font-display font-semibold text-lg md:text-xl mb-2 group-hover:text-brand-orange-500 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
          {service.short}
        </p>

        {service.features && (
          <ul className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-white/10">
            {service.features.slice(0, 3).map((f) => (
              <li key={f} className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}
