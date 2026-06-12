import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skills = [
  { name: 'React', level: 'Expert' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'Express.js', level: 'Advanced' },
  { name: 'FastAPI', level: 'Advanced' },
  { name: 'MongoDB', level: 'Advanced' },
  { name: 'Python', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Expert' },
  { name: 'Framer Motion', level: 'Proficient' },
  { name: 'Git & GitHub', level: 'Advanced' },
  { name: 'REST APIs', level: 'Expert' },
  { name: 'Vercel / Deployment', level: 'Proficient' },
];

export default function Skills() {
  const { ref, isInView } = useScrollReveal(0.15);

  return (
    <section className="py-24 lg:py-10 bg-[#f5f1ea]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="divider mb-16" />

        <div ref={ref} className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
          {/* Label + Heading */}
          <div className="lg:w-72 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="section-label">Expertise</span>
              <span className="w-8 h-px bg-[#b89b5e]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
              className="font-serif-display text-[#1f1f1f] mb-4"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                lineHeight: 1.2,
              }}
            >
              Tools &amp;
              <br />
              <span className="italic text-[#1e2a39]">Technologies</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-sm text-[#555555] font-sans-body font-light leading-relaxed"
            >
              A curated stack of modern tools used daily to build fast,
              scalable, and maintainable software.
            </motion.p>
          </div>

          {/* Skill pills */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 + i * 0.045 }}
                  whileHover={{ y: -2 }}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#e7e2db] bg-[#faf9f6] hover:border-[#1e2a39]/20 hover:bg-white hover:shadow-[0_2px_12px_rgba(30,42,57,0.06)] transition-all duration-300 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d8d2c8] group-hover:bg-[#b89b5e] transition-colors duration-300" />
                  <span className="text-sm font-medium text-[#1f1f1f] font-sans-body">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-[#555555] font-sans-body font-light tracking-wide hidden sm:inline">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="divider mt-16" />
      </div>
    </section>
  );
}
