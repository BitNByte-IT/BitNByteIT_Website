import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Logo from './Logo'
import { useTheme } from '../hooks/useTheme'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container-x">
        <nav
          className={`flex items-center justify-between rounded-2xl px-3 sm:px-4 py-2.5 transition-all duration-500 ${
            scrolled
              ? 'glass-strong shadow-xl shadow-brand-blue-950/10'
              : 'glass'
          }`}
        >
          <Link to="/" className="shrink-0">
            <Logo size={36} />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `link-underline text-sm font-medium transition-colors ${
                      isActive
                        ? 'active text-brand-orange-500'
                        : 'text-slate-700 dark:text-slate-200 hover:text-brand-orange-500'
                    }`
                  }
                  end={l.to === '/'}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full p-2 hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="inline-block"
                >
                  {theme === 'dark' ? (
                    <Sun className="size-5 text-brand-orange-400" />
                  ) : (
                    <Moon className="size-5 text-brand-blue-700" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            <Link
              to="/contact"
              className="hidden md:inline-flex btn-primary !py-2 !px-5 !text-sm"
            >
              Get a Quote
            </Link>

            <button
              className="lg:hidden rounded-full p-2 hover:bg-slate-200/60 dark:hover:bg-white/10"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-4"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-brand-orange-500/10 text-brand-orange-500'
                            : 'hover:bg-slate-100 dark:hover:bg-white/5'
                        }`
                      }
                      end={l.to === '/'}
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-2">
                  <Link to="/contact" className="btn-primary w-full">
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
