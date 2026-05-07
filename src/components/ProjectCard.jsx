import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, index, inView }) {
  const { title, description, tags, bgClass, icon, github, demo, badge } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-3xl border border-white/7 bg-card overflow-hidden hover:border-white/15 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50"
    >
      {/* Project visual header */}
      <div className={`relative h-52 flex items-center justify-center overflow-hidden ${bgClass}`}>
        {/* Inner grid texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />

        {/* Icon */}
        <span className="text-6xl relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">
          {icon}
        </span>

        {/* Badge */}
        <span className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-black/40 border border-white/15 backdrop-blur-sm text-white/70">
          {badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-display font-black text-lg tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed font-light mb-5">{description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-lg bg-accent/8 border border-accent/15 text-accent/80 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/7">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-muted hover:text-white transition-colors duration-200 group/link"
          >
            <Github size={14} className="group-hover/link:text-accent transition-colors" />
            GitHub
          </a>
          <span className="text-white/20 text-xs">|</span>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-accent hover:text-white transition-colors duration-200 group/link"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  )
}
