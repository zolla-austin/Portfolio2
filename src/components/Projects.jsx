import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'ShopFlow — E-Commerce Platform',
    description:
      'Full-featured online store with dynamic product filtering, shopping cart, wishlist management, and Stripe payment integration. Mobile-first and conversion-optimised.',
    tags: ['React', 'Context API', 'Stripe', 'Tailwind CSS'],
    bgClass: 'bg-gradient-to-br from-[#0d0a2e] via-[#120e45] to-[#0a1a3e]',
    icon: '🛒',
    badge: 'E-Commerce',
    github: 'https://github.com/zolla-austin',
    demo: '#',
  },
  {
    title: 'Folio — Portfolio Showcase',
    description:
      'A custom-designed personal portfolio built with immersive scroll animations, unique asymmetric layouts, and a highly polished visual identity from scratch.',
    tags: ['Next.js', 'Framer Motion', 'GSAP', 'SCSS'],
    bgClass: 'bg-gradient-to-br from-[#0a1628] via-[#0d1f3d] to-[#061224]',
    icon: '🎨',
    badge: 'Portfolio',
    github: 'https://github.com/zolla-austin',
    demo: 'https://emperor001.netlify.app/',
  },
  {
    title: 'AnalyticsPro — SaaS Dashboard',
    description:
      'Real-time analytics platform with customisable widget layouts, role-based access, live WebSocket data updates, and interactive chart visualisations.',
    tags: ['React', 'TypeScript', 'Recharts', 'WebSockets'],
    bgClass: 'bg-gradient-to-br from-[#0a1f0a] via-[#0d2e14] to-[#071a0d]',
    icon: '📊',
    badge: 'SaaS Dashboard',
    github: 'https://github.com/zolla-austin',
    demo: '#',
  },
  {
    title: 'Lumina — Content Landing Page',
    description:
      'Design-heavy marketing page emphasising bold editorial typography, scroll-triggered animations, and a high-impact visual layout built to drive signups.',
    tags: ['HTML', 'CSS', 'GSAP', 'JavaScript'],
    bgClass: 'bg-gradient-to-br from-[#1a0a1f] via-[#2a0f35] to-[#150a20]',
    icon: '✦',
    badge: 'Landing Page',
    github: 'https://github.com/zolla-austin',
    demo: 'https://naija-bite.netlify.app/',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      {/* Ambient */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">// Featured Work</span>
            <h2 className="font-display font-black text-4xl md:text-5xl xl:text-6xl tracking-tighter mt-3 leading-none">
              Projects I've<br />
              <span className="text-muted font-light italic">shipped.</span>
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm leading-relaxed font-light md:text-right">
            A curated selection of real-world work spanning e-commerce, SaaS, and marketing — each built with performance and usability at the core.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
