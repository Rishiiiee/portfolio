import React, { useState } from "react";
import {
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaServer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVite,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiJsonwebtokens,
  SiFirebase,
  SiAuth0,
} from "react-icons/si";

const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "devops", label: "Tools & Deployment" },
  { id: "api_auth", label: "Testing & Auth" },
];

const allSkills = [
  // ── Frontend ──
  {
    name: "React.js",
    category: "frontend",
    icon: <FaReact className="text-[#61DAFB]" />,
    desc: "Component Architecture & Hooks",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: <SiNextdotjs className="dark:text-white text-black" />,
    desc: "SSR, SSG & Fullstack Apps",
  },
  {
    name: "Vue.js",
    category: "frontend",
    icon: <FaVuejs className="text-[#42B883]" />,
    desc: "Reactive UI & Component State",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    desc: "Modern Utility-First Styling",
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: <FaHtml5 className="text-[#E34F26]" />,
    desc: "Semantic & Accessible Web",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: <FaCss3Alt className="text-[#1572B6]" />,
    desc: "Responsive Layouts & Keyframes",
  },

  // ── Backend ──
  {
    name: "Node.js",
    category: "backend",
    icon: <FaNodeJs className="text-[#5FA04E]" />,
    desc: "Runtime & Asynchronous Engines",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: <SiExpress className="dark:text-white text-black" />,
    desc: "Robust Web APIs & Middleware",
  },
  {
    name: "REST APIs",
    category: "backend",
    icon: <FaServer className="text-[#818CF8]" />,
    desc: "Scalable Endpoint Architecture",
  },
  {
    name: "MongoDB",
    category: "backend",
    icon: <SiMongodb className="text-[#47A248]" />,
    desc: "NoSQL Schemas & Aggregations",
  },
  {
    name: "MySQL",
    category: "backend",
    icon: <SiMysql className="text-[#4479A1]" />,
    desc: "Relational Queries & Optimization",
  },

  // ── Tools & Deployment ──
  {
    name: "Git",
    category: "devops",
    icon: <FaGitAlt className="text-[#F05032]" />,
    desc: "Version Control & Branching",
  },
  {
    name: "GitHub",
    category: "devops",
    icon: <FaGithub className="dark:text-white text-black" />,
    desc: "CI/CD & Collaborative Repos",
  },
  {
    name: "Vite",
    category: "devops",
    icon: <SiVite className="text-[#646CFF]" />,
    desc: "Ultra-Fast Modern Bundling",
  },
  {
    name: "Vercel",
    category: "devops",
    icon: <SiVercel className="dark:text-white text-black" />,
    desc: "Serverless & Edge Deployment",
  },
  {
    name: "Netlify",
    category: "devops",
    icon: <SiNetlify className="text-[#00C7B7]" />,
    desc: "Continuous Frontend Hosting",
  },
  {
    name: "Docker",
    category: "devops",
    icon: <FaDocker className="text-[#2496ED]" />,
    desc: "Containerization & Environments",
  },

  // ── Testing & API / Auth ──
  {
    name: "Postman",
    category: "api_auth",
    icon: <SiPostman className="text-[#FF6C37]" />,
    desc: "API Testing & Automation",
  },
  {
    name: "JWT",
    category: "api_auth",
    icon: <SiJsonwebtokens className="text-[#D63AFF]" />,
    desc: "Stateless Token Authentication",
  },
  {
    name: "OAuth 2.0",
    category: "api_auth",
    icon: <SiAuth0 className="text-[#EB5424]" />,
    desc: "Secure Third-Party Authorization",
  },
  {
    name: "Firebase Auth",
    category: "api_auth",
    icon: <SiFirebase className="text-[#FFCA28]" />,
    desc: "Multi-Provider User Auth",
  },
];

const SkillsSlider = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <section className="w-full dark:bg-black bg-white dark:text-white text-black py-20 px-[5vw] transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-400" />
            <p className="font-body text-[10px] tracking-[0.28em] uppercase dark:text-white/50 text-black/50 font-medium">
              Technical Stack
            </p>
          </div>
          
          <h2
            className="font-display dark:text-white text-black leading-[0.92] select-none"
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Skills &amp;{" "}
            <span className="italic font-display dark:text-white/60 text-black/50" style={{ fontWeight: 400 }}>
              Technologies
            </span>
          </h2>
          
          <p className="font-body dark:text-white/60 text-black/60 text-sm md:text-base max-w-xl">
            A comprehensive overview of the modern libraries, frameworks, and deployment tools I use to ship production-ready products.
          </p>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  font-body text-xs tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "bg-black text-white dark:bg-white dark:text-black font-bold shadow-md scale-105 border border-transparent"
                      : "dark:bg-white/[0.08] bg-black/[0.04] dark:text-white/85 text-black/75 dark:border-white/20 border-black/15 border hover:dark:bg-white/[0.15] hover:bg-black/[0.08] hover:dark:text-white hover:text-black hover:dark:border-yellow-400/60 hover:border-yellow-400/60 hover:scale-102"
                  }
                `}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── Skills Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-5 w-full">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="
                group relative
                dark:bg-white/[0.03] bg-white
                hover:dark:bg-white/[0.07] hover:bg-white
                border dark:border-white/10 border-black/[0.08]
                hover:dark:border-yellow-400/50 hover:border-yellow-400/60
                shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-none
                hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:dark:shadow-xl
                backdrop-blur-md
                flex flex-col items-center text-center
                p-6 rounded-2xl
                transition-all duration-300
                hover:-translate-y-1.5
              "
            >
              {/* Subtle category micro-tag */}
              <span className="text-[8px] font-body tracking-[0.2em] uppercase dark:text-white/30 text-black/30 mb-3 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors">
                {skill.category.replace("_", " & ")}
              </span>

              {/* Skill Icon */}
              <div className="text-4xl md:text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm flex items-center justify-center">
                {skill.icon}
              </div>

              {/* Skill Title */}
              <h3 className="font-display text-base font-bold dark:text-white text-black mb-1 transition-colors">
                {skill.name}
              </h3>

              {/* Skill Description */}
              <p className="font-body text-[11px] leading-snug dark:text-white/45 text-black/50 transition-colors">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Summary Badge ── */}
        <div className="mt-14 flex items-center gap-3 py-2 px-5 rounded-full dark:bg-white/[0.04] bg-black/[0.03] border dark:border-white/10 border-black/10 font-body text-xs dark:text-white/50 text-black/50">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>Active Stack: <strong>{allSkills.length} Production Technologies</strong></span>
        </div>

      </div>
    </section>
  );
};

export default SkillsSlider;
