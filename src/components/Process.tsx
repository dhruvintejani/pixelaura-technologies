import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'Understanding your business goals, technical requirements, and the problem we need to solve. No assumptions — just deep listening.',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'Translating requirements into wireframes and visual systems. Architecture decisions made before a single line of code is written.',
  },
  {
    number: '03',
    title: 'Development',
    desc: 'Clean, maintainable code built iteratively. Regular check-ins ensure we stay aligned with your vision throughout.',
  },
  {
    number: '04',
    title: 'Deployment',
    desc: 'Production-ready launch with thorough testing, performance optimisation, and post-launch monitoring.',
  },
];

export default function Process() {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section id="process" className="py-28 lg:py-25 bg-[#1e2a39] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} className="max-w-xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-6"
          >
            <span
              className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-[#b89b5e]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Process
            </span>
            <span className="w-8 h-px bg-[#b89b5e]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
            className="font-serif-display text-[#faf9f6]"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              lineHeight: 1.15,
            }}
          >
            How every project
            <br />
            <span className="italic text-[#b89b5e]">comes to life.</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-[#2a3a4d]" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Step = typeof steps[0];

function StepCard({ step, index }: { step: Step; index: number }) {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.12 }}
      className="relative"
    >
      {/* Number circle */}
      <div className="relative z-10 flex items-center gap-4 mb-6">
        <div
          className="w-16 h-16 rounded-full border border-[#2a3a4d] bg-[#1e2a39] flex items-center justify-center flex-shrink-0"
        >
          <span
            className="font-serif-display text-lg text-[#b89b5e]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {step.number}
          </span>
        </div>
        {/* Mobile connector */}
        <div className="lg:hidden flex-1 h-px bg-[#2a3a4d]" />
      </div>

      <h3
        className="font-serif-display text-xl text-[#faf9f6] mb-3 leading-snug"
        style={{ fontFamily: "'DM Serif Display', serif" }}
      >
        {step.title}
      </h3>

      <p
        className="text-sm text-[#8a9bb0] leading-relaxed font-light"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {step.desc}
      </p>
    </motion.div>
  );
}
