import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1e2a39] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-14">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-sm bg-[#b89b5e]/20 border border-[#b89b5e]/30 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="5" height="5" fill="#b89b5e" />
                  <rect
                    x="8"
                    y="1"
                    width="5"
                    height="5"
                    fill="#faf9f6"
                    opacity="0.4"
                  />
                  <rect
                    x="1"
                    y="8"
                    width="5"
                    height="5"
                    fill="#faf9f6"
                    opacity="0.2"
                  />
                  <rect
                    x="8"
                    y="8"
                    width="5"
                    height="5"
                    fill="#b89b5e"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <span
                className="font-serif-display text-[#faf9f6] text-base tracking-tight"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                PixelAura Technologies
              </span>
            </div>
            <p
              className="text-xs text-[#8a9bb0] font-light leading-relaxed"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Building digital experiences that are scalable, elegant, and
              engineered for lasting impact.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p
                className="text-[10px] font-semibold text-[#b89b5e] tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Navigation
              </p>
              <ul className="flex flex-col gap-2.5">
                {["About", "Services", "Work", "Process", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const id =
                            item === "Work"
                              ? "#projects"
                              : `#${item.toLowerCase()}`;
                          document
                            .querySelector(id)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-xs text-[#8a9bb0] hover:text-[#faf9f6] transition-colors duration-300 font-light"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <p
                className="text-[10px] font-semibold text-[#b89b5e] tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Services
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Web Development",
                  "Full Stack Apps",
                  "Business Systems",
                  "Landing Pages",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector("#services")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-xs text-[#8a9bb0] hover:text-[#faf9f6] transition-colors duration-300 font-light"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className="text-[10px] font-semibold text-[#b89b5e] tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Connect
              </p>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href="mailto:dhruvintejani.work@gmail.com"
                    className="text-xs text-[#8a9bb0] hover:text-[#faf9f6] transition-colors duration-300 font-light break-all"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#8a9bb0] hover:text-[#faf9f6] transition-colors duration-300 font-light"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#8a9bb0] hover:text-[#faf9f6] transition-colors duration-300 font-light"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#2a3a4d] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p
            className="text-xs text-[#4a5a6a] font-light"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            © {year} PixelAura Technologies. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              {
                label: "GitHub",
                href: "",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
              },
              {
                label: "Instagram",
                href: "",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 rounded-full border border-[#2a3a4d] flex items-center justify-center text-[#4a5a6a] hover:text-[#faf9f6] hover:border-[#4a5a6a] transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
