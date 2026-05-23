import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-display font-bold text-[8rem] md:text-[12rem] leading-none heading-gradient-warm">
          404
        </div>
        <h1 className="font-display text-2xl md:text-3xl font-bold mb-3">Page not found</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-primary">
          <Home className="size-4" /> Back home
        </Link>
      </div>
    </section>
  )
}
