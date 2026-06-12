import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    number: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Website Development',
    desc: 'Pixel-perfect, responsive websites engineered for performance, accessibility, and lasting impressions.',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    number: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Full Stack Applications',
    desc: 'End-to-end web systems with robust APIs, database architecture, and seamless frontend integration.',
    tags: ['FastAPI', 'Node.js', 'MongoDB'],
  },
  {
    number: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
        <rect x="7" y="6" width="4" height="3" />
        <rect x="13" y="6" width="4" height="3" />
      </svg>
    ),
    title: 'Business Software Systems',
    desc: 'Custom inventory management, CRM, and operational tools tailored to real-world business workflows.',
    tags: ['Inventory', 'CRM', 'Analytics'],
  },
  {
    number: '04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h10M7 11h6" />
      </svg>
    ),
    title: 'Landing Page Design',
    desc: 'Conversion-optimised landing pages that combine elegant visual design with clear messaging.',
    tags: ['UI/UX', 'Conversion', 'Performance'],
  },
];

export default function Services() {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section id="services" className="py-28 lg:py-25 bg-[#f5f1ea]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} className="max-w-2xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="section-label">Services</span>
            <span className="w-8 h-px bg-[#b89b5e]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
            className="font-serif-display text-[#1f1f1f]"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              lineHeight: 1.15,
            }}
          >
            What we build,
            <br />
            <span className="italic text-[#1e2a39]">and how we do it.</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Service = typeof services[0];

function ServiceCard({ svc, index }: { svc: Service; index: number }) {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative p-8 rounded-2xl border border-[#e7e2db]/80 bg-white/40 backdrop-blur-sm hover:bg-white/70 hover:border-[#d8d2c8] hover:shadow-[0_8px_32px_rgba(30,42,57,0.06)] transition-all duration-400 cursor-default overflow-hidden"
    >
      {/* Number watermark */}
      <span
        className="absolute top-5 right-6 font-serif-display text-6xl font-bold text-[#e7e2db] group-hover:text-[#d8d2c8] transition-colors duration-300 select-none leading-none"
        style={{ fontFamily: "'DM Serif Display', serif" }}
      >
        {svc.number}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[#f5f1ea] border border-[#e7e2db] flex items-center justify-center text-[#1e2a39] mb-6 group-hover:bg-[#1e2a39] group-hover:text-[#faf9f6] group-hover:border-[#1e2a39] transition-all duration-350">
        {svc.icon}
      </div>

      <h3
        className="font-serif-display text-xl text-[#1f1f1f] mb-3 leading-snug"
        style={{ fontFamily: "'DM Serif Display', serif" }}
      >
        {svc.title}
      </h3>

      <p className="text-sm text-[#555555] leading-relaxed font-sans-body font-light mb-6">
        {svc.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {svc.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-medium text-[#1e2a39] border border-[#1e2a39]/15 bg-[#1e2a39]/5 font-sans-body tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b89b5e]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    </motion.div>
  );
}
