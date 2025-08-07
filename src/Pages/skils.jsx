import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiC,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "C Language", icon: <SiC className="text-gray-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
];

const SkillsSlider = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">

      <h2 className="text-4xl font-bold text-center mb-12 text-white">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-md flex flex-col items-center justify-center p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group"

          >
            <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
              {skill.icon}
            </div>
            <p className="text-lg font-semibold text-white group-hover:tracking-wide transition-all duration-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSlider;
