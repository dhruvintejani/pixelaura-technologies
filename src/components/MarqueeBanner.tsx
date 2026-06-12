import { motion } from 'framer-motion';

const items = [
  'React', '·', 'TypeScript', '·', 'FastAPI', '·', 'MongoDB', '·',
  'Node.js', '·', 'Tailwind CSS', '·', 'Full Stack', '·', 'Web Engineering', '·',
  'UI/UX Design', '·', 'Business Systems', '·',
];

export default function MarqueeBanner() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-[#1e2a39] py-4 border-y border-[#2a3a4d]">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex items-center gap-6 whitespace-nowrap"
        style={{ width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`text-xs font-medium tracking-[0.15em] uppercase ${
              item === '·'
                ? 'text-[#b89b5e] text-base leading-none'
                : 'text-[#8a9bb0]'
            }`}
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
