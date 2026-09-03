import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface Category {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    id: "languages",
    label: "Languages",
    icon: "🔤",
    skills: [
      { name: "Java (8, 11, 17)", level: 92, color: "#f89820" },
      { name: "JavaScript", level: 90, color: "#f7df1e" },
      { name: "TypeScript", level: 82, color: "#3178c6" },
      { name: "SQL", level: 85, color: "#4479a1" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Spring Boot", level: 92, color: "#6db33f" },
      { name: "Spring Security", level: 85, color: "#6db33f" },
      { name: "Spring Data JPA / Hibernate", level: 85, color: "#59666c" },
      { name: "Microservices / REST APIs", level: 93, color: "#6366f1" },
      { name: "JWT / OAuth 2.0", level: 85, color: "#d63aff" },
      { name: "Node.js", level: 88, color: "#68a063" },
      { name: "Socket.io", level: 85, color: "#010101" },
      { name: "Elasticsearch", level: 75, color: "#005571" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 93, color: "#61dafb" },
      { name: "React Native", level: 85, color: "#61dafb" },
      { name: "Next.js", level: 78, color: "#ffffff" },
      { name: "Redux / Context API", level: 84, color: "#764abc" },
      { name: "Material UI", level: 82, color: "#007fff" },
      { name: "Tailwind CSS", level: 88, color: "#06b6d4" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MySQL", level: 88, color: "#f29111" },
      { name: "PostgreSQL", level: 78, color: "#336791" },
      { name: "MongoDB", level: 85, color: "#47a248" },
      { name: "Redis", level: 80, color: "#dc382d" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 82, color: "#ff9900" },
      { name: "Docker", level: 85, color: "#2496ed" },
      { name: "Kubernetes", level: 65, color: "#326ce5" },
      { name: "Apache Kafka", level: 80, color: "#231f20" },
      { name: "Linux", level: 80, color: "#fcc624" },
      { name: "CI/CD", level: 75, color: "#6366f1" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Concepts",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 90, color: "#f05032" },
      { name: "JUnit & Mockito", level: 78, color: "#25a162" },
      { name: "Postman / Swagger", level: 88, color: "#ff6c37" },
      { name: "System Design / DSA", level: 82, color: "#a855f7" },
      { name: "Kalman Filter / KNN", level: 68, color: "#06b6d4" },
    ],
  },
];

const techBadges = [
  "Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate",
  "Microservices", "REST APIs", "JWT", "OAuth 2.0", "Node.js", "Socket.io",
  "Elasticsearch", "React.js", "React Native", "Next.js", "Redux",
  "Tailwind CSS", "Material-UI", "MySQL", "PostgreSQL", "MongoDB", "Redis",
  "AWS", "Docker", "Kubernetes", "Apache Kafka", "Linux", "CI/CD",
  "JUnit", "Mockito", "Postman", "Swagger", "Git", "Maven",
  "TypeScript", "JavaScript", "SQL", "Agora SDK", "Firebase",
  "Kalman Filter", "KNN",
];

function SkillBar({ skill, inView }: { skill: Skill; inView: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
        <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0 }}
          style={{ background: `linear-gradient(90deg, #6366f1, ${skill.color})` }}
        />
      </div>
    </div>
  );
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("backend");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  return (
    <section id="Skills" className="py-24 bg-bg-primary relative overflow-hidden">
      <div
        className="orb w-96 h-96"
        style={{ background: "#a855f7", bottom: "10%", left: "-5%" }}
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
            What I work with
          </p>
          <h2 className="section-title gradient-text">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Category tabs + progress bars */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                      : "glass text-slate-400 hover:text-white"
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </motion.button>
              ))}
            </div>

            {/* Progress bars */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                {currentCategory.icon}{" "}
                <span className="gradient-text">{currentCategory.label}</span>
              </h3>
              {currentCategory.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} inView={inView} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right: All tech badges + quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Quote card */}
            <div className="glass-card p-6 gradient-border">
              <div className="text-4xl text-primary/60 font-serif mb-2">"</div>
              <p className="text-slate-300 italic leading-relaxed">
                Learning never stops, and the great thing about it is that no one
                can ever take it away from you.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-0.5 bg-primary/60" />
                <span className="text-slate-500 text-sm">Sunny Kumar Ray</span>
              </div>
            </div>

            {/* All tech badges */}
            <div className="glass-card p-6 flex-1">
              <h3 className="text-base font-semibold text-white mb-4">
                Full Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge, i) => (
                  <motion.span
                    key={badge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.04 + 0.4, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="tech-badge cursor-default"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Domain highlights */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "☕", label: "Java Backend" },
                { icon: "🧩", label: "Microservices" },
                { icon: "☁️", label: "Cloud Native" },
              ].map((d) => (
                <div
                  key={d.label}
                  className="glass-card p-4 text-center card-hover"
                >
                  <div className="text-2xl mb-2">{d.icon}</div>
                  <div className="text-xs text-slate-400">{d.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
