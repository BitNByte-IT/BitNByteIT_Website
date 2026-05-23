import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import projects from '../data/projects.json'

export default function Portfolio() {
  const [filter, setFilter] = useState('All')

  const categories = useMemo(() => {
    const set = new Set(projects.projects.map((p) => p.category))
    return ['All', ...Array.from(set)]
  }, [])

  const filtered = useMemo(() => {
    if (filter === 'All') return projects.projects
    return projects.projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our portfolio"
            title="Real projects,"
            accent="real impact"
            description="A selection of products we've designed, built, and shipped for our clients."
          />

          {/* Filter chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition-all ${
                  filter === c
                    ? 'border-brand-orange-500 bg-brand-orange-500 text-white'
                    : 'border-slate-300 dark:border-white/15 hover:border-brand-orange-500 hover:text-brand-orange-500'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="card overflow-hidden group"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-brand-blue-500/20 to-brand-orange-500/20 flex items-center justify-center relative">
                    <div className="text-5xl font-display font-bold text-white/30">
                      {p.title.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                    </div>
                    {p.link && p.link !== '#' && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute top-3 right-3 size-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand-orange-500 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    )}
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
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
