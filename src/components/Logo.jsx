import React from 'react'
import logoPng from '../assets/BNB_logo.png'

export default function Logo({ size = 40, withText = true, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoPng}
        alt="BitNByte IT logo"
        width={size}
        height={size}
        className="object-contain drop-shadow-[0_0_12px_rgba(251,85,16,0.35)]"
      />
      {withText && (
        <span className="font-display font-bold text-base sm:text-xl tracking-tight">
          <span className="text-brand-blue-500 dark:text-brand-blue-400">Bit</span>
          <span className="text-brand-orange-500">N</span>
          <span className="text-brand-blue-500 dark:text-brand-blue-400">Byte</span>
          <span className="ml-1 text-brand-orange-500 font-medium">IT</span>
        </span>
      )}
    </div>
  )
}
