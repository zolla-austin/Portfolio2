import { motion } from 'framer-motion'

export default function ServiceCard({ service, index, inView }) {
  const { icon, title, description, accent } = service

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09, ease: 'easeOut' }}
      className="group relative p-6 rounded-2xl border border-white/7 bg-card hover:border-white/14 transition-all duration-400 hover:-translate-y-1 overflow-hidden"
    >
      {/* Hover glow bg */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 30% 20%, ${accent}10 0%, transparent 70%)` }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-xl border transition-colors duration-300"
        style={{
          background: `${accent}12`,
          borderColor: `${accent}25`,
        }}
      >
        {icon}
      </div>

      <h3 className="font-display font-black text-base mb-2 tracking-tight group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed font-light">{description}</p>

      {/* Decorative bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}60, transparent)` }}
      />
    </motion.div>
  )
}
