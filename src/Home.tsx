import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import profile from "./images/profile.png";
import LazyImage from "./LazyImage";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/sunny8851",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sunny-kumar-ray/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:sunnyr29811@gmail.com",
    isEmail: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function EmailPopup({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText("sunnyr29811@gmail.com");
    onClose();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 6 }}
      transition={{ duration: 0.18 }}
      className="absolute bottom-14 left-1/2 -translate-x-1/2 z-50 w-64 glass-card p-3 shadow-2xl"
    >
      {/* Arrow */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[rgba(13,21,38,0.9)] border-r border-b border-[rgba(99,102,241,0.2)]" />

      <p className="text-xs text-slate-400 text-center mb-3 font-mono">
        sunnyr29811@gmail.com
      </p>
      <div className="flex flex-col gap-1.5">
        <a
          href="mailto:sunnyr29811@gmail.com"
          onClick={onClose}
          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-all group"
        >
          <span className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center text-primary-light group-hover:bg-primary/25 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </span>
          Open email client
        </a>

        <Link to="Contact" smooth offset={-64} duration={500} onClick={onClose}>
          <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-all group">
            <span className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent/25 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </span>
            Go to Contact section
          </button>
        </Link>

        <button
          onClick={copyEmail}
          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-all group"
        >
          <span className="w-7 h-7 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary group-hover:bg-secondary/25 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </span>
          Copy email address
        </button>
      </div>
    </motion.div>
  );
}

const Home = () => {
  const [emailPopupOpen, setEmailPopupOpen] = useState(false);
  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center overflow-hidden animated-bg grid-pattern"
    >
      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-primary top-20 -left-32" style={{ background: "#6366f1" }} />
      <div className="orb w-80 h-80 bg-accent bottom-20 -right-20" style={{ background: "#a855f7" }} />
      <div className="orb w-64 h-64 bg-secondary top-1/2 right-1/4" style={{ background: "#06b6d4" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 pb-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              variants={itemVariants}
              className="text-secondary font-mono text-sm tracking-widest mb-3 uppercase"
            >
              &gt; Welcome to my portfolio
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="gradient-text block sm:inline">
                Sunny Kumar Ray
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl text-slate-400 font-light mb-6 h-8"
            >
              <TypeAnimation
                sequence={[
                  "Java Backend Developer",
                  2000,
                  "Java Full-Stack Developer",
                  2000,
                  "Spring Boot & Microservices",
                  2000,
                  "React Native Engineer",
                  2000,
                  "Working in Dubai 🌍",
                  2000,
                  "DSA Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary-light font-medium"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Java Backend & Full-Stack Developer with 4+ years of experience designing and delivering high-performance backend systems using Java, Spring Boot, and Microservices, alongside modern frontend experiences with React.js. Currently building smart airport solutions at{" "}
  <span className="text-primary-light font-semibold">Dynasas</span>, on-site in Dubai, with a focus on real-time systems and complex engineering challenges.
</motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start mb-8"
            >
              <Link to="Projects" smooth offset={-64} duration={600} className="flex-1 lg:flex-none">
                <button className="btn-primary w-full">
                  <span>View Projects</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </Link>
              <a
                href="SUNNY_KUMAR_RAY_Resume.pdf"
                download
                className="btn-outline flex-1 lg:flex-none justify-center"
              >
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((s) => {
                if ((s as any).isEmail) {
                  return (
                    <div key={s.label} className="relative">
                      <motion.button
                        aria-label={s.label}
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setEmailPopupOpen((v) => !v)}
                        className={`w-10 h-10 rounded-xl glass flex items-center justify-center transition-colors ${
                          emailPopupOpen
                            ? "text-white border-primary/50"
                            : "text-slate-400 hover:text-white hover:border-primary/50"
                        }`}
                      >
                        {s.icon}
                      </motion.button>
                      <AnimatePresence>
                        {emailPopupOpen && (
                          <EmailPopup onClose={() => setEmailPopupOpen(false)} />
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 transition-colors"
                  >
                    {s.icon}
                  </motion.a>
                );
              })}
              <span className="text-slate-600 text-sm ml-1">— Let's connect</span>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            {/* Spinning gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #6366f1, #a855f7, #06b6d4, #6366f1)",
                padding: "3px",
                borderRadius: "50%",
                width: "calc(100% + 6px)",
                height: "calc(100% + 6px)",
                top: "-3px",
                left: "-3px",
              }}
            >
              <div className="w-full h-full rounded-full bg-bg-primary" />
            </motion.div>

            {/* Pulsing glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
              }}
            />

            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-[rgba(99,102,241,0.3)]">
              <LazyImage
                src={profile}
                alt="Sunny Kumar Ray"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-4 glass-card px-3 py-2 flex items-center gap-2 text-sm font-semibold text-white"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

