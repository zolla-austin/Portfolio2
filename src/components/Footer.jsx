import { Github, Linkedin, Twitter, Globe, Heart } from 'lucide-react'

const links = ['About', 'Projects', 'Services', 'Contact']
const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Globe, href: '#', label: 'Dribbble' },
]

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/7 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <div className="font-display font-black text-xl tracking-tight mb-1">
              Z<span className="text-accent">.</span>
              <span className="text-muted font-light text-sm ml-1">Austine</span>
            </div>
            <p className="text-xs text-muted">Front-End Developer · Lagos, Nigeria</p>
          </div>

          {/* Nav */}
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="text-muted hover:text-white text-sm transition-colors duration-200"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-white/8 bg-card flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted/60">
            © {new Date().getFullYear()} Zolla Austine. All rights reserved.
          </p>
          <p className="text-xs text-muted/60 flex items-center gap-1.5">
            Built with <Heart size={11} className="text-rose-500" fill="currentColor" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
