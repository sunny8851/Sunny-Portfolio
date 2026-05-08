import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  github: string | null;
  demo: string | null;
}

const projects: Project[] = [
  {
    title: "Real-Time Dating & Matchmaking App (Ximoo)",
    description:
      "A cross-platform dating app with real-time user matching based on preferences, likes, age, gender, and distance. Features live video calling (Agora SDK), real-time chat via Socket.io, and seamless cross-platform experience on iOS & Android.",
    image: "./images/ximoo1.webp",
    tags: ["React Native", "Node.js", "Socket.io", "MongoDB", "Agora SDK"],
    category: ["Node.js", "React Native"],
    github: null,
    demo: "https://play.google.com/store/apps/details?id=com.cherryme&hl=en",
  },
  {
    title: "AITS – Airport Intelligent Trolley System",
    description:
      "Indoor mapping & navigation system for airports (similar to Google Maps). Uses WiFi RSSI positioning, Accelerometer tracking, Kalman Filter, and KNN for real-time trolley tracking, shortest-path navigation, and an integrated food ordering system.",
    image: "./images/aits.jpg",
    tags: ["Node.js", "React.js", "KNN", "Kalman Filter", "Socket.io"],
    category: ["Node.js", "React Native"],
    github: null,
    demo: null,
  },
  {
    title: "Easync Books – ERP Accounting Software",
    description:
      "All-in-one accounting platform similar to Zoho Books / Tally ERP. Handles 1000+ daily bills with GST billing, e-invoicing, vendor management, BillPay reconciliation, role-based access (Admin/Sub-admin/User), and a real-time sales & purchase analytics dashboard.",
    image: "./images/easync.png",
    tags: ["React.js", "Node.js", "MongoDB", "Express", "SQL"],
    category: ["React", "Node.js"],
    github: null,
    demo: "https://www.easyncbooks.com/",
  },
  {
    title: "AntCloud – Cloud Computing Platform",
    description:
      "Developed and managed a live cloud platform offering virtual PCs for individuals and organizations, supporting 200+ concurrent users with a hassle-free computing experience. Includes an affiliate dashboard tracking commissions & payouts, organization management software, and AWS EC2 infrastructure for scalability and reliability.",
    image: "./images/antcloud.png",
    tags: ["React.js", "Node.js", "AWS EC2", "MongoDB", "Express"],
    category: ["React", "Node.js"],
    github: null,
    demo: "https://antcloud.co/",
  },
  {
    title: "Virtual PC Platform",
    description:
      "Cloud-based virtual PC service supporting 200+ concurrent users for individuals and organizations. Delivers a hassle-free, fast computing experience via browser with AWS EC2 infrastructure for scalability and reliability.",
    image: "./images/disney.png",
    tags: ["React.js", "Node.js", "AWS EC2", "MongoDB"],
    category: ["React", "Node.js"],
    github: null,
    demo: null,
  },
  {
    title: "Affiliate Dashboard",
    description:
      "Comprehensive dashboard for affiliate users tracking commissions, revenue from affiliate links, payout records, automated payments, and coupon/offer code validation.",
    image: "./images/Affilate.png",
    tags: ["React.js", "Node.js", "MongoDB"],
    category: ["React", "Node.js"],
    github: null,
    demo: null,
  },
  {
    title: "Factory Product Management System",
    description:
      "QR code-based product tracking system for manufacturing. Auto-generates QR codes per product, enables real-time status tracking throughout production, QR scanner integration, and role-based access control.",
    image: "./images/smart.jpg",
    tags: ["React.js", "Node.js", "QR Code", "MongoDB"],
    category: ["React", "Node.js"],
    github: null,
    demo: null,
  },
  {
    title: "Live Video Streaming Platform",
    description:
      "A live video streaming platform built with Socket.io supporting 10,000+ concurrent users. Features real-time commenting, sharing, and interactive discussions during live streams.",
    image: "./images/chat.jpg",
    tags: ["React.js", "Socket.io", "Node.js", "WebRTC"],
    category: ["React", "Node.js"],
    github: null,
    demo: null,
  },
  {
    title: "Smart AI Voice Assistant",
    description:
      "Advanced voice assistant application that responds to user commands — reads articles, opens links, and performs tasks. Built with Alan AI, React.js, Node.js, TypeScript, and Tailwind CSS.",
    image: "./images/smart.jpg",
    tags: ["React.js", "Node.js", "Alan AI", "TypeScript", "Tailwind CSS"],
    category: ["React", "Node.js"],
    github: null,
    demo: null,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured online shopping platform with user authentication, product browsing, cart management, and order processing. Built with React, Redux, Firebase, and TypeScript.",
    image: "./images/amazon.png",
    tags: ["React.js", "Redux", "Firebase", "TypeScript", "Tailwind CSS"],
    category: ["React", "Firebase"],
    github: null,
    demo: null,
  },
  {
    title: "Talk Buddy – Chat App",
    description:
      "Real-time instant messaging platform supporting group chats and one-on-one conversations with live updates via Firebase.",
    image: "./images/chat.jpg",
    tags: ["React.js", "Firebase", "Material-UI"],
    category: ["React", "Firebase"],
    github: null,
    demo: null,
  },
];

const filterTabs = ["All", "React", "Node.js","React Native"];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  const handleDemo = (project: Project) => {
    if (project.demo) {
      window.open(project.demo, "_blank");
    } else {
      alert(
        "Live demo currently unavailable. Please contact me for a demonstration."
      );
    }
  };

  return (
    <section id="Projects" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div
        className="orb w-80 h-80"
        style={{ background: "#06b6d4", top: "-5%", right: "10%" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-mono text-sm tracking-widest uppercase mb-2">
            What I've built
          </p>
          <h2 className="section-title gradient-text">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4 mb-8" />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {filterTabs.map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === tab
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                    : "glass text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Project cards */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                exit="exit"
                layout
                className="glass-card overflow-hidden card-hover group"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/600x300/1a1a2e/6366f1?text=Project";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
                  {/* Category badges overlay */}
                  <div className="absolute top-3 right-3 flex gap-1">
                    {project.category.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="px-2 py-0.5 text-xs font-medium rounded-full bg-black/60 backdrop-blur-sm text-primary-light border border-primary/30"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-1 border-t border-white/5">
                    <button
                      onClick={() => handleDemo(project)}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-secondary transition-colors py-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-slate-500 mt-8"
          >
            No projects found for this filter.
          </motion.p>
        )}
      </div>
    </section>
  );
}

