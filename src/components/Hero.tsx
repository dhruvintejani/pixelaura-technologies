import { motion } from "framer-motion";

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

const anim = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen md:min-h-[100px] md:pt-9 md:pb-25 lg:pb-0 flex items-center overflow-hidden bg-[#f5f1ea]"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #d8d2c8 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #e7e2db 0%, transparent 50%)`,
        }}
      />

      {/* Decorative vertical lines */}
      <div className="absolute top-24 right-0 w-px h-48 bg-gradient-to-b from-transparent via-[#d8d2c8] to-transparent hidden lg:block" />
      <div className="absolute top-24 right-12 w-px h-32 bg-gradient-to-b from-transparent via-[#b89b5e]/30 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-18 pb-16 lg:pt-18 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* ── LEFT: Typography ── */}
          <div className="relative z-10">
            <motion.div {...anim(0)} className="flex items-center gap-3 mb-8">
              <span className="section-label">Digital Engineering Studio</span>
              <span className="w-8 h-px bg-[#b89b5e]" />
            </motion.div>

            <motion.h1
              {...anim(0.1)}
              className="font-serif-display text-[#1f1f1f] leading-[1.05] mb-6"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
              }}
            >
              Crafting Digital
              <br />
              <span className="italic text-[#1e2a39]">Experiences</span>
              <br />
              That Scale.
            </motion.h1>

            <motion.p
              {...anim(0.25)}
              className="text-[#555555] text-base lg:text-lg leading-relaxed max-w-md mb-10 font-sans-body font-light"
            >
              Crafting scalable digital systems and elegant web experiences for
              modern businesses — from concept to production.
            </motion.p>

            <motion.div
              {...anim(0.38)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#projects");
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1e2a39] text-[#faf9f6] text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#2a3a4d] transition-colors duration-300"
              >
                View Work
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#contact");
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center hover:bg-[#1e2a39] hover:text-white justify-center gap-2 px-7 py-3.5 border border-[#1e2a39]/25 text-[#1e2a39] text-sm font-semibold tracking-wider uppercase rounded-full hover:border-[#1e2a39]/60 transition-all duration-300"
              >
                Contact
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...anim(0.52)}
              className="flex items-center gap-8 mt-14 pt-10 border-t border-[#e7e2db]"
            >
              {[
                { value: "4+", label: "Live Projects" },
                { value: "3+", label: "Years Experience" },
                { value: "100%", label: "Client Focus" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-serif-display text-2xl text-[#1e2a39] mb-0.5"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#555555] tracking-wide font-sans-body uppercase font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Abstract Illustration ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative flex items-center justify-center order-first lg:order-last"
          >
            <div className="relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-full max-w-lg aspect-square mx-auto">
              {" "}
              {/* Background circle */}
              <div className="absolute inset-8 rounded-full bg-[#e7e2db]/50" />
              {/* Hero illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/hero-illustration.png"
                  alt="Digital Craft Illustration"
                  className="w-full h-full object-contain"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(30,42,57,0.08))",
                  }}
                />
              </div>
              {/* Floating badge: Stack */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-4 glass-card rounded-xl px-4 py-3 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#b89b5e]" />
                  <span className="text-xs font-semibold text-[#1e2a39] font-sans-body tracking-wide">
                    React + FastAPI
                  </span>
                </div>
              </motion.div>
              {/* Floating badge: Live */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-2 -right-4 glass-card rounded-xl px-4 py-3 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1e2a39]" />
                  <span className="text-xs font-semibold text-[#1e2a39] font-sans-body tracking-wide">
                    Deployed & Live
                  </span>
                </div>
              </motion.div>
              {/* Floating badge: Full-Stack */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/2 -right-8 -translate-y-1/2 glass-card rounded-xl px-4 py-3 shadow-sm"
              >
                <div className="text-center">
                  <p className="text-[10px] text-[#555555] font-sans-body uppercase tracking-widest mb-0.5">
                    Stack
                  </p>
                  <p className="text-xs font-semibold text-[#1e2a39] font-sans-body">
                    Full-Stack
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative dots grid */}
            <div
              className="absolute -bottom-8 -left-8 w-24 h-24 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #1e2a39 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#555555] tracking-[0.25em] uppercase font-sans-body">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#555555] to-transparent"
        />
      </motion.div> */}
    </section>
  );
}
