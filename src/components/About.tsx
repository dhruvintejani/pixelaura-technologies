import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    label: 'Inventory Management System',
    desc: 'Real-world live project — stock tracking & business management',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    label: 'E-commerce Frontend + Admin Panel',
    desc: 'Full product listing, cart, and admin management system',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: 'Landing Page Development',
    desc: 'Conversion-focused, pixel-perfect marketing pages',
  },
];

export default function About() {
  const { ref, isInView } = useScrollReveal();
  const { ref: ref2, isInView: inView2 } = useScrollReveal();

  return (
    <section id="about" className="relative py-28 lg:py-24 bg-[#faf9f6]">
      {/* Top divider */}
      <div className="divider mb-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">

          {/* LEFT: Label + Heading */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="section-label">About</span>
              <span className="w-8 h-px bg-[#b89b5e]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="font-serif-display text-[#1f1f1f] mb-6"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: 1.15,
              }}
            >
              Built on precision.
              <br />
              <span className="italic text-[#1e2a39]">Delivered</span> with craft.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.22 }}
              className="text-[#555555] text-base leading-relaxed font-sans-body font-light max-w-sm"
            >
              Full-stack developer specialising in modern web applications,
              scalable backend systems, and UI-driven digital products.
              Every project is built with production-grade standards —
              clean code, thoughtful architecture, and obsessive attention to detail.
            </motion.p>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#e7e2db] bg-[#f5f1ea]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-[#555555] font-sans-body tracking-wide">
                Available for new projects
              </span>
            </motion.div>
          </div>

          {/* RIGHT: Highlight cards */}
          <div ref={ref2} className="flex flex-col gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 24 }}
                animate={inView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.12 }}
                className="group flex items-start gap-5 p-6 rounded-2xl border border-[#e7e2db] bg-[#f5f1ea] hover:border-[#d8d2c8] hover:bg-[#f0ece4] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e7e2db] flex items-center justify-center text-[#1e2a39] group-hover:bg-[#1e2a39] group-hover:text-[#faf9f6] transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1f1f1f] mb-1 font-sans-body tracking-tight">
                    {item.label}
                  </p>
                  <p className="text-xs text-[#555555] leading-relaxed font-sans-body font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
