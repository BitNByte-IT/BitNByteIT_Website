import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import blog from '../data/blog.json'

export default function Blog() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Blog & insights"
            title="Ideas, tutorials &"
            accent="industry thoughts"
            description="Practical guides, technical deep-dives, and reflections on building software in 2026."
          />
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-3">
            {blog.posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card overflow-hidden group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-brand-blue-950/30">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-brand-orange-500/10 text-brand-orange-500 border border-brand-orange-500/20 font-mono">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="font-display font-semibold text-xl mb-2 group-hover:text-brand-orange-500 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><User className="size-3" />{post.author}</span>
                      <span className="flex items-center gap-1"><Clock className="size-3" />{post.readTime}</span>
                    </div>
                    <button className="text-brand-orange-500 hover:text-brand-orange-400 transition-colors">
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
