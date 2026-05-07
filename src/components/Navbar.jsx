import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const links = ['About', 'Projects', 'Services', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="font-display font-black text-xl tracking-tight group">
            Z<span className="text-accent">.</span>
            <span className="text-muted font-light text-sm ml-1 group-hover:text-white transition-colors">Austine</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="text-muted hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
                >
                  {link}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-card hover:bg-surface text-muted hover:text-white transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => scrollTo('Contact')}
              className="px-5 py-2 rounded-lg bg-accent hover:bg-accent/90 text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-card hover:bg-surface text-muted hover:text-white transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="text-muted hover:text-white transition-colors p-1"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 text-muted hover:text-white"
            >
              <X size={24} />
            </button>
            {links.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link)}
                className="font-display font-black text-4xl hover:text-accent transition-colors duration-200"
              >
                {link}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => scrollTo('Contact')}
              className="mt-4 px-8 py-3 rounded-xl bg-accent text-white font-bold text-lg"
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
