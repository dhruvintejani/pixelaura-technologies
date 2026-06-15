import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Inventory Management System",
    description:
      "Full-stack business system for real-world stock tracking, product management, and operational workflows. Built for scale with a clean admin interface.",
    tech: ["React", "Python" ,"FastAPI", "MongoDB", "Tailwind CSS"],
    live: "https://sreya-digital-wear.vercel.app/",
    images: [
      "/projects/SDW_image_1.png",
      "/projects/SDW_image_2.png",
      "/projects/SDW_image_3.png",
      "/projects/SDW_image_4.png",
    ],
    type: "Full Stack System",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "React-based UI system with complete product catalogue, cart management, and a sophisticated admin panel for store operations.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    live: "https://react-ecommerce-demo-three.vercel.app/",
    images: [
      "/projects/E-commerce_image_1.png",
      "/projects/E-commerce_image_2.png",
      "/projects/E-commerce_image_3.png",
      "/projects/E-commerce_image_4.png",
      "/projects/E-commerce_image_5.png",
    ],
    type: "Frontend + Admin UI",
    featured: true,
  },
  {
    id: 3,
    title: "Landing Page — Velocity",
    description:
      "High-performance marketing landing page built for conversion. Features bold typography, smooth micro-animations, and a refined visual system.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://landing-page-velocity.vercel.app/",
    images: [
      "/projects/Velocity_image_1.png",
      "/projects/Velocity_image_2.png",
      "/projects/Velocity_image_3.png",
      "/projects/Velocity_image_4.png",
      "/projects/Velocity_image_5.png",
    ],
    type: "Landing Page",
    featured: false,
  },
  {
    id: 4,
    title: "Landing Page — Nexus",
    description:
      "Premium agency-style landing page with asymmetric layout, elegant motion design, and a distinctive dark aesthetic.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://landing-page-nexus-seven.vercel.app/",
    images: [
      "/projects/Nexus_image_1.png",
      "/projects/Nexus_image_2.png",
      "/projects/Nexus_image_3.png",
      "/projects/Nexus_image_4.png",
    ],
    type: "Landing Page",
    featured: false,
  },
];

export default function Projects() {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section id="projects" className="py-25 lg:py-18 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={ref}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20"
        >
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="section-label">Selected Work</span>
              <span className="w-8 h-px bg-[#b89b5e]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
              className="font-serif-display text-[#1f1f1f]"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Projects built for
              <br />
              <span className="italic text-[#1e2a39]">the real world.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm text-[#555555] font-sans-body font-light max-w-xs lg:text-right leading-relaxed"
          >
            Every project listed here is live, functional, and built with
            production-grade standards.
          </motion.p>
        </div>

        {/* Featured projects (large) */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-7 mb-6 lg:mb-7">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                index={i}
              />
            ))}
        </div>

        {/* Standard projects (smaller) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <StandardProjectCard
                key={project.id}
                project={project}
                index={i}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

type Project = (typeof projects)[0];

function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, isInView } = useScrollReveal(0.1);

  const [iindex, setIndex] = useState(0);

  const images = project.images || [];
  const hasMultiple = images.length > 1;

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
      className="group relative rounded-2xl overflow-hidden border border-[#e7e2db]/60 bg-[#f5f1ea] hover:border-[#d8d2c8] hover:shadow-[0_12px_40px_rgba(30,42,57,0.08)] transition-all duration-400"
    >
      {/* Image container */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-[#e7e2db] group">
        {/* Image */}
        <motion.img
          key={iindex}
          src={images[iindex]}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0.5, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a39]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Left button */}
        {hasMultiple && (
          <button
            onClick={prevImage}
            className="absolute left-3 cursor-pointer top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition"
          >
            ‹
          </button>
        )}

        {/* Right button */}
        {hasMultiple && (
          <button
            onClick={nextImage}
            className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition"
          >
            ›
          </button>
        )}

        {/* Dots indicator */}
        {hasMultiple && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition ${
                  i === iindex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        {/* Type badge (keep yours unchanged) */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase bg-[#1e2a39]/85 text-[#faf9f6]">
            {project.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className="font-serif-display text-xl text-[#1f1f1f] leading-snug"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {project.title}
          </h3>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 2, y: -2 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-[#1e2a39]/20 flex items-center justify-center text-[#1e2a39] hover:bg-[#1e2a39] hover:text-[#faf9f6] hover:border-[#1e2a39] transition-all duration-300"
            aria-label={`Open ${project.title}`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M2 10L10 2M5 2h5v5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>

        <p className="text-sm text-[#555555] leading-relaxed mb-5 font-sans-body font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-medium text-[#555555] bg-[#e7e2db]/60 font-sans-body"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function StandardProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, isInView } = useScrollReveal(0.1);

  const [iindex, setIndex] = useState(0);

  const images = project.images || [];
  const hasMultiple = images.length > 1;

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.12 }}
      className="group relative rounded-2xl overflow-hidden border border-[#e7e2db]/60 bg-[#f5f1ea] hover:border-[#d8d2c8] hover:shadow-[0_8px_32px_rgba(30,42,57,0.07)] transition-all duration-400"
    >
      {/* Image */}
      <div className="relative h-44 sm:h-64 overflow-hidden bg-[#e7e2db] group">
        {/* Image */}
        <motion.img
          key={iindex}
          src={images[iindex]}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0.5, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a39]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Left button */}
        {hasMultiple && (
          <button
            onClick={prevImage}
            className="absolute left-3 cursor-pointer top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition"
          >
            ‹
          </button>
        )}

        {/* Right button */}
        {hasMultiple && (
          <button
            onClick={nextImage}
            className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition"
          >
            ›
          </button>
        )}

        {/* Dots indicator */}
        {hasMultiple && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition ${
                  i === iindex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        {/* Type badge (keep yours unchanged) */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase bg-[#1e2a39]/85 text-[#faf9f6]">
            {project.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-2.5">
          <h3
            className="font-serif-display text-lg text-[#1f1f1f] leading-snug"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {project.title}
          </h3>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 2, y: -2 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 w-8 h-8 rounded-full border border-[#1e2a39]/20 flex items-center justify-center text-[#1e2a39] hover:bg-[#1e2a39] hover:text-[#faf9f6] hover:border-[#1e2a39] transition-all duration-300"
            aria-label={`Open ${project.title}`}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M2 10L10 2M5 2h5v5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>

        <p className="text-xs text-[#555555] leading-relaxed mb-4 font-sans-body font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-medium text-[#555555] bg-[#e7e2db]/60 font-sans-body"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
