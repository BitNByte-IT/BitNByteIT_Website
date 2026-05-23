import React, { useEffect, useState, useRef } from 'react'
import site from '../data/site.json'

export default function Terminal({ lines = site.terminalLines, className = '' }) {
  const [displayed, setDisplayed] = useState([])
  const [currentText, setCurrentText] = useState('')
  const [currentLine, setCurrentLine] = useState(0)
  const [phase, setPhase] = useState('typing') // typing | pausing | clearing
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (phase === 'typing') {
      const line = lines[currentLine]
      if (currentText.length < line.length) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(line.slice(0, currentText.length + 1))
        }, 35 + Math.random() * 35)
      } else {
        // Done typing this line
        timeoutRef.current = setTimeout(() => {
          setDisplayed((d) => [...d, line])
          setCurrentText('')
          setPhase('pausing')
        }, 600)
      }
    } else if (phase === 'pausing') {
      timeoutRef.current = setTimeout(() => {
        if (currentLine >= lines.length - 1) {
          // Reset after final line
          setPhase('clearing')
        } else {
          setCurrentLine((i) => i + 1)
          setPhase('typing')
        }
      }, 400)
    } else if (phase === 'clearing') {
      timeoutRef.current = setTimeout(() => {
        setDisplayed([])
        setCurrentLine(0)
        setPhase('typing')
      }, 2000)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [phase, currentText, currentLine, lines])

  const colorize = (line) => {
    if (line.startsWith('$')) return 'text-brand-orange-400'
    if (line.startsWith('→')) return 'text-brand-blue-300'
    if (line.startsWith('✓')) return 'text-emerald-400'
    if (line.startsWith('✗') || line.startsWith('✕')) return 'text-rose-400'
    return 'text-slate-300'
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-950/95 to-brand-blue-950/95 shadow-2xl shadow-brand-blue-950/40 ${className}`}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-black/30">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-rose-500/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="font-mono text-[11px] text-slate-400">~ bitnbyte ~ zsh</span>
        <span className="text-[11px] text-slate-500">⌘+T</span>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-[13px] leading-relaxed min-h-[200px] sm:min-h-[260px] overflow-hidden break-all">
        {displayed.map((line, i) => (
          <div key={i} className={colorize(line)}>{line}</div>
        ))}
        {phase === 'typing' && (
          <div className={colorize(lines[currentLine])}>
            {currentText}
            <span className="inline-block w-1.5 sm:w-2 h-3.5 sm:h-4 ml-0.5 bg-brand-orange-400 align-middle animate-blink" />
          </div>
        )}
      </div>

      {/* Subtle scanline */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
           style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)' }} />
    </div>
  )
}
