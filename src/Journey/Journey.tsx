import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  score?: string;
  description?: string;
  type: "education" | "work";
}

const timelineData: TimelineItem[] = [
  {
    type: "work",
    title: "Software Engineer",
    subtitle: "Dynasas",
    period: "Jan 2025 – Present",
    location: "Dubai & Gurugram",
    description:
      "Worked on-site in Dubai for 6 months on the AITS (Airport Intelligent Trolley System) — built indoor mapping (WiFi RSSI, Accelerometer, Kalman Filter, KNN), real-time trolley tracking, shortest-path navigation, and a food ordering system. Also built Ximoo, a cross-platform dating app (React Native + Node.js + Socket.io + Agora SDK).",
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    subtitle: "Ant Cloud",
    period: "Mar 2024 – Jan 2025",
    location: "Delhi, India",
    description:
      "Built a Virtual PC platform supporting 200+ concurrent users. Developed an Affiliate Dashboard tracking commissions, payouts & coupon validation. Created Organization Management Software and worked with AWS EC2 for cloud infrastructure deployment.",
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    subtitle: "Easync Books",
    period: "Nov 2022 – Mar 2024",
    location: "Noida, UP",
    description:
      "Built accounting ERP software from scratch handling 1000+ daily bills — GST billing, invoice generation, role-based access (Admin/User/Sub-admin), sales & purchase analytics dashboard, email notification logs, and backend API architecture.",
  },{
    type: "work",
    title: "Frontend Developer Intern",
    subtitle: "Parentune",
    period: "Mar 2022 – Aug 2022",
    location: "Gurgaon,Hr",
    description:
      "Worked on frontend development tasks, including building user interfaces, implementing responsive designs, and collaborating with the backend team to integrate APIs.",
  },
];

const educationData: TimelineItem[] = [
  {
    type: "education",
    title: "B.Tech – Computer Science",
    subtitle: "G.L Bajaj Institute of Technology & Management",
    period: "2019 – 2023",
    location: "Greater Noida, UP",
    score: "CGPA: 8.1 / 10",
  },
  {
    type: "education",
    title: "12th – CBSE",
    subtitle: "Govt. Boys Sr. Sec. School No. 1",
    period: "2017 – 2018",
    location: "New Delhi",
    score: "Percentage: 73%",
  },
  {
    type: "education",
    title: "10th – CBSE",
    subtitle: "Govt. Boys Sr. Sec. School No. 3",
    period: "2015 – 2016",
    location: "New Delhi",
    score: "Percentage: 80%",
  },
];

function WorkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}

function TimelineColumn({
  items,
  title,
  icon,
  inView,
  side,
}: {
  items: TimelineItem[];
  title: string;
  icon: React.ReactNode;
  inView: boolean;
  side: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: side === "left" ? 0.2 : 0.35 }}
      className="flex-1 min-w-0"
    >
      {/* Column header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary-light">
          {icon}
        </div>
        <h3 className="text-xl font-bold gradient-text">{title}</h3>
      </div>

      {/* Timeline items */}
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary opacity-30" />

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
            className="relative flex gap-4 mb-6 last:mb-0"
          >
            {/* Dot */}
            <div className="relative flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full glass border border-primary/30 flex items-center justify-center z-10 relative">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent" />
              </div>
            </div>

            {/* Card */}
            <div className="flex-1 glass-card p-4 card-hover">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <span className="text-xs text-slate-500 font-mono whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <div className="text-xs font-semibold text-primary-light mb-1">
                {item.subtitle}
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {item.location}
              </div>
              {item.description && (
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              )}
              {item.score && (
                <span className="inline-block mt-2 px-2 py-0.5 text-xs rounded-full bg-green-500/10 border border-green-500/30 text-green-400">
                  {item.score}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const Journey = () => {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="Journey" className="py-24 bg-bg-primary relative overflow-hidden">
      <div
        className="orb w-72 h-72"
        style={{ background: "#6366f1", top: "20%", left: "50%", transform: "translateX(-50%)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-mono text-sm tracking-widest uppercase mb-2">
            My path
          </p>
          <h2 className="section-title gradient-text">Experience & Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Two columns */}
        <div className="flex flex-col lg:flex-row gap-10">
          <TimelineColumn
            items={timelineData}
            title="Work Experience"
            icon={<WorkIcon />}
            inView={inView}
            side="left"
          />

          <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <TimelineColumn
            items={educationData}
            title="Education"
            icon={<SchoolIcon />}
            inView={inView}
            side="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Journey;

