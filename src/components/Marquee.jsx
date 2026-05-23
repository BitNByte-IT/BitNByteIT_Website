import React from 'react'
import site from '../data/site.json'

export default function Marquee({ items = site.marquee }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden py-6 border-y border-slate-200 dark:border-white/10 bg-white/30 dark:bg-white/[0.02]">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-brand-blue-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-brand-blue-950 to-transparent z-10" />
      <div className="flex gap-4 animate-scroll-x w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-sm whitespace-nowrap px-5 py-2 rounded-full border border-slate-300/60 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-brand-orange-500/60 hover:text-brand-orange-500 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
