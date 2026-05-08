import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Achievement {
  icon: string;
  title: string;
  rank: string;
  description?: string;
  highlight?: boolean;
}

const achievements: Achievement[] = [
  {
    icon: "🏆",
    title: "LeetCode Weekly Contest #332",
    rank: "Global Rank: 1,519 | AIR: 229",
    description: "Out of 25,000 participants worldwide",
    highlight: true,
  },
  {
    icon: "🏆",
    title: "LeetCode Weekly Contest #322",
    rank: "All India Rank: 400",
    description: "Top competitive programmer nationally",
    highlight: true,
  },
  {
    icon: "🥇",
    title: "CodeChef January Challenge",
    rank: "Global Rank: 439",
    description: "Top performers in monthly challenge",
    highlight: true,
  },
  {
    icon: "🥈",
    title: "CodeChef Sep Lunchtime",
    rank: "Global Rank: 669",
    description: "Consistent top-tier performance",
  },
  {
    icon: "⭐",
    title: "CodeChef Rating",
    rank: "3-Star Coder",
    description: "Achieved through consistent competitive programming",
  },
  {
    icon: "⭐",
    title: "HackerRank",
    rank: "5-Star Badge",
    description: "Problem Solving & Data Structures",
    highlight: true,
  },
  {
    icon: "💡",
    title: "LeetCode + GeeksforGeeks",
    rank: "500+ Problems Solved",
    description: "Consistent DSA practice across platforms",
  },
];

const codingProfiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/sunnyr29811/",
    icon: "🔥",
    color: "#f89820",
  },
  {
    name: "CodeChef",
    url: "https://codechef.com",
    icon: "👨‍🍳",
    color: "#5b4638",
  },
  {
    name: "HackerRank",
    url: "https://hackerrank.com",
    icon: "💻",
    color: "#2ec866",
  },
  {
    name: "GeeksforGeeks",
    url: "https://geeksforgeeks.org",
    icon: "🌿",
    color: "#2f8d46",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Achievements = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="Achievements"
      className="py-24 bg-bg-secondary relative overflow-hidden"
    >
      <div
        className="orb w-80 h-80"
        style={{ background: "#f59e0b", top: "10%", right: "-10%", opacity: 0.08 }}
      />
      <div
        className="orb w-72 h-72"
        style={{ background: "#6366f1", bottom: "5%", left: "-5%" }}
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
            Recognition & Milestones
          </p>
          <h2 className="section-title gradient-text">Achievements</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Achievement cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`glass-card p-5 relative overflow-hidden ${
                item.highlight
                  ? "border-[rgba(99,102,241,0.3)] shadow-[0_0_30px_rgba(99,102,241,0.1)]"
                  : ""
              }`}
            >
              {item.highlight && (
                <div className="absolute top-2 right-2 px-2 py-0.5 text-xs rounded-full bg-primary/20 border border-primary/30 text-primary-light font-medium">
                  Top Rank
                </div>
              )}
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
              <div className="gradient-text font-bold text-lg mb-1">{item.rank}</div>
              {item.description && (
                <p className="text-xs text-slate-500">{item.description}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Coding profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-center text-slate-400 text-sm font-medium mb-6 uppercase tracking-widest">
            Find me on
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {codingProfiles.map((profile) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="glass-card px-5 py-3 flex items-center gap-3 text-sm font-medium text-slate-300 hover:text-white transition-colors card-hover"
              >
                <span className="text-xl">{profile.icon}</span>
                {profile.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

