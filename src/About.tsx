import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profile from "./images/profile4.png";
import LazyImage from "./LazyImage";

const stats = [
  { value: "4+", label: "Years Experience", icon: "💼" },
  { value: "3", label: "Companies Worked", icon: "🏢" },
  { value: "10+", label: "Projects Delivered", icon: "🚀" },
  { value: "500+", label: "DSA Problems Solved", icon: "🧠" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="About" className="py-24 relative overflow-hidden bg-bg-secondary">
      {/* Subtle orb */}
      <div
        className="orb w-72 h-72"
        style={{ background: "#6366f1", top: "10%", right: "-5%" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-mono text-sm tracking-widest uppercase mb-2">
            Get to know
          </p>
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-full h-[420px] sm:w-80 sm:h-[420px] rounded-2xl overflow-hidden">
              <LazyImage
                src={profile}
                alt="Sunny Kumar Ray"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
            </div>
            {/* Decorative elements */}
            <div
              className="absolute -top-3 -left-3 w-24 h-24 rounded-xl border-2 border-primary/30"
              style={{ zIndex: -1 }}
            />
            <div
              className="absolute -bottom-3 -right-3 w-24 h-24 rounded-xl border-2 border-accent/30"
              style={{ zIndex: -1 }}
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="glass-card p-4 text-center card-hover"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 mb-6"
            >
              <p className="text-slate-300 leading-relaxed text-base">
                I'm a passionate <span className="text-primary-light font-semibold">Full-Stack Developer</span> with over{" "}
                <span className="text-secondary font-semibold">4+ years of professional experience</span> building scalable,
                production-grade web and mobile applications. Currently working at <span className="text-primary-light font-semibold">Dynasas, Dubai</span> on smart airport systems.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm mt-3">
                I've built real-time systems (Socket.io, Agora), cross-platform mobile apps (React Native), indoor navigation (KNN + Kalman Filter),
                ERP software (1000+ daily bills), and cloud infrastructure on AWS EC2. Competitive programmer with 500+ problems on LeetCode & GFG.
              </p>
            </motion.div>

            {/* Key info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              {[
              { label: "📍 Dubai / Delhi, India" },
              { label: "📱 +91-9958693592" },
                { label: "📧 sunnyr29811@gmail.com" },
                
              ].map((item) => (
                <span
                  key={item.label}
                  className="px-3 py-1.5 text-sm text-slate-300 glass rounded-lg"
                >
                  {item.label}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 flex-wrap"
            >
              <a
                href="SUNNY_KUMAR_RAY_Resume1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center textc"
              >
                <span>View Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sunny-kumar-ray/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 justify-center"
              >
                LinkedIn
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
             </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

