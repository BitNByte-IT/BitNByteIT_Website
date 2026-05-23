import React from 'react'
import { motion } from 'framer-motion'
import cover from '../assets/cover_BnBIt.png'

export default function DeviceShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="relative flex items-end justify-center gap-2 sm:gap-4 md:gap-6 px-2"
    >
      {/* Mobile */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        className="relative w-12 sm:w-20 md:w-32 rounded-[1rem] sm:rounded-[1.2rem] border-[2px] sm:border-[3px] border-slate-700 dark:border-slate-300 bg-slate-900 overflow-hidden shadow-2xl shrink-0"
      >
        <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-0.5 sm:h-1 bg-slate-700 rounded-full z-10" />
        <div className="aspect-[9/19] bg-gradient-to-br from-brand-blue-950 to-brand-blue-900 flex items-center justify-center">
          <img src={cover} alt="" className="w-full h-full object-cover opacity-90" />
        </div>
      </motion.div>

      {/* Tablet */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 0.2 }}
        className="relative w-24 sm:w-40 md:w-64 rounded-xl sm:rounded-2xl border-[3px] sm:border-[5px] border-slate-700 dark:border-slate-300 bg-slate-900 overflow-hidden shadow-2xl shrink-0"
      >
        <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue-950 to-brand-blue-900 flex items-center justify-center">
          <img src={cover} alt="" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* Desktop */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="relative w-44 sm:w-72 md:w-[28rem] shrink-0"
      >
        <div className="rounded-t-xl border-[6px] border-slate-700 dark:border-slate-300 border-b-0 bg-slate-900 overflow-hidden shadow-2xl">
          <div className="bg-slate-800 px-3 py-1.5 flex gap-1.5">
            <span className="size-2 rounded-full bg-rose-500" />
            <span className="size-2 rounded-full bg-amber-400" />
            <span className="size-2 rounded-full bg-emerald-500" />
          </div>
          <div className="aspect-[16/10] bg-gradient-to-br from-brand-blue-950 to-brand-blue-900">
            <img src={cover} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="h-2 bg-slate-700 dark:bg-slate-300 rounded-b-md mx-auto w-3/5" />
        <div className="h-1 bg-slate-700/60 dark:bg-slate-300/60 rounded-b mx-auto w-1/4" />
      </motion.div>
    </motion.div>
  )
}
