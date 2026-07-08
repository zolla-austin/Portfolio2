import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'ShopFlow — E-Commerce Platform',
    description:
      'Full-featured online store with dynamic product filtering, shopping cart, wishlist management, and Stripe payment integration. Mobile-first and conversion-optimised.',
    challengeSolution:
      'Built a scalable e-commerce experience by implementing responsive layouts, efficient state management, and optimized product filtering for a smooth shopping experience.',
    achievements: [
      'Fully Responsive Design',
      'Secure Authentication',
      'Optimized Performance',
      'Smooth Shopping Experience',
    ],
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
    challengeSolution:
      'Created a modern and responsive portfolio with reusable components, smooth animations, and an intuitive user experience.',
    achievements: [
      'Responsive on All Devices',
      'Clean & Modern UI',
      'Fast Loading Performance',
      'SEO-Friendly Structure',
    ],
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
    challengeSolution:
      'Developed a dynamic analytics dashboard with interactive charts, reusable components, and efficient state management for displaying complex data.',
    achievements: [
      'Interactive Dashboard',
      'Data Visualization',
      'Reusable Components',
      'Performance Optimized',
    ],
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
    challengeSolution:
      'Designed a conversion-focused landing page with responsive layouts, engaging animations, and a strong emphasis on user experience.',
    achievements: [
      'Mobile-First Design',
      'High Performance',
      'Smooth Animations',
      'Modern User Experience',
    ],
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
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="section-label">// Featured Work</span>
            <h2 className="heading-section mt-3">
              Projects I've<br />
              <span className="text-muted italic font-normal">shipped.</span>
            </h2>
          </div>
          <p className="text-body max-w-sm text-sm md:text-right">
            A curated selection of real-world work spanning e-commerce, SaaS, and marketing — each built with performance and usability at the core.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
