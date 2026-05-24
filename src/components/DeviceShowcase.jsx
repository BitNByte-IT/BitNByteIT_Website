import React from 'react'
import { motion } from 'framer-motion'

// Place your homepage screenshot at public/homepage_preview.png
const largePreview = '/largeview.png'
const tabPreview = '/tabview.png'
const mobilePreview = '/mobileview.png'

export default function DeviceShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="relative flex items-end justify-center gap-2 sm:gap-4 md:gap-6 px-2"
    >
      {/* Mobile phone — uses object-contain so full width of site is visible, no left/right crop */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        className="relative w-9 sm:w-20 md:w-32 rounded-[0.75rem] sm:rounded-[1.2rem] border-[2px] sm:border-[3px] border-slate-700 dark:border-slate-300 bg-slate-900 overflow-hidden shadow-2xl shrink-0"
      >
        {/* Notch */}
        <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-4 sm:w-8 h-[3px] sm:h-1 bg-slate-700 rounded-full z-10" />
        <div className="relative aspect-[9/19] bg-slate-900">
          <img
            src={mobilePreview}
            alt="BitNByte IT website on mobile"
            className="absolute inset-0 w-full h-full object-contain object-top opacity-90"
          />
        </div>
      </motion.div>

      {/* Tablet — landscape screenshot fits 4:3 frame well with object-cover */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 0.2 }}
        className="relative w-16 sm:w-40 md:w-64 rounded-lg sm:rounded-2xl border-[2px] sm:border-[5px] border-slate-700 dark:border-slate-300 bg-slate-900 overflow-hidden shadow-2xl shrink-0"
      >
        <div className="relative aspect-[4/3] bg-slate-900">
          <img
            src={tabPreview}
            alt="BitNByte IT website on tablet"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </motion.div>

      {/* Desktop monitor */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="relative w-36 sm:w-72 md:w-[28rem] shrink-0"
      >
        <div className="rounded-t-xl border-[3px] sm:border-[6px] border-slate-700 dark:border-slate-300 border-b-0 bg-slate-900 overflow-hidden shadow-2xl">
          {/* Browser chrome bar */}
          <div className="bg-slate-800 px-2 sm:px-3 py-1 sm:py-1.5 flex gap-1 sm:gap-1.5">
            <span className="size-1.5 sm:size-2 rounded-full bg-rose-500" />
            <span className="size-1.5 sm:size-2 rounded-full bg-amber-400" />
            <span className="size-1.5 sm:size-2 rounded-full bg-emerald-500" />
          </div>
          <div className="relative aspect-[16/10] bg-slate-900">
            <img
              src={largePreview}
              alt="BitNByte IT website on desktop"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        </div>
        {/* Monitor stand */}
        <div className="h-1.5 sm:h-2 bg-slate-700 dark:bg-slate-300 rounded-b-md mx-auto w-3/5" />
        <div className="h-0.5 sm:h-1 bg-slate-700/60 dark:bg-slate-300/60 rounded-b mx-auto w-1/4" />
      </motion.div>
    </motion.div>
  )
}
