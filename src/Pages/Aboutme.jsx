import React from "react";
import robotThinking from "../asset/robot_thinking.png";

function Aboutme() {
  return (
    <section className="w-full dark:bg-black bg-white dark:text-white text-black py-16 lg:py-24 px-[5vw] transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* ── LEFT: Thinking Robot Illustration (Seamless cutout, no box/card) ── */}
        <div className="w-full lg:w-[45%] flex items-center justify-center flex-shrink-0">
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            {/* Dark mode glow */}
            <div className="dark:block hidden absolute inset-6 rounded-full bg-white/5 blur-3xl scale-95" />

            {/* Light mode animated warm glow */}
            <div
              className="dark:hidden block absolute rounded-full"
              style={{
                inset: "6%",
                background:
                  "radial-gradient(ellipse at center, rgba(250,204,21,0.22) 0%, rgba(168,85,247,0.10) 50%, transparent 75%)",
                animation: "glowPulse 4s ease-in-out infinite",
                filter: "blur(30px)",
              }}
            />

            {/* Seamless Cutout Robot with Organic Shadow */}
            <img
              src={robotThinking}
              alt="Rishi Shrivastav thinking and ideating robot avatar"
              className="relative z-10 w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.18))",
              }}
            />
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="flex-1 flex flex-col justify-center space-y-6 max-w-2xl">
          {/* Section micro-label */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-400" />
            <p className="font-body text-[10px] tracking-[0.28em] uppercase dark:text-white/50 text-black/50 font-medium">
              About Me
            </p>
          </div>

          {/* Heading */}
          <h2
            className="font-display dark:text-white text-black leading-[0.85] select-none"
            style={{
              fontSize: "clamp(2.2rem, 3.8vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Building things
            <span
              className="block dark:text-white/60 text-black/50 italic font-display"
              style={{ fontWeight: 400 }}
            >
              that matter.
            </span>
          </h2>

          {/* Divider */}
          {/* <div className="h-px dark:bg-white/10 bg-black/10 w-24" /> */}

          {/* Main paragraphs */}
          <div className="space-y-4 font-body dark:text-white/75 text-black/75 leading-relaxed text-sm md:text-base mt-0">
            <p className="mt-0">
              I'm a{" "}
              <span className="dark:text-white text-black font-semibold">
                Full-Stack Developer
              </span>{" "}
              from Surat building real-world web applications, CRM systems, and
              SaaS products that solve business problems.
            </p>
            <p>
              I specialize in scalable React interfaces, robust APIs, and
              complete product ecosystems. I've worked on CRM platforms,
              AI-integrated tools, and custom web solutions — always focusing on{" "}
              <span className="dark:text-white text-black font-medium">
                clean code, great UX, and production-ready results.
              </span>
            </p>
            <p>
              I completed my{" "}
              <span className="dark:text-white text-black font-medium">
                BCA from SDJ International College
              </span>{" "}
              — but my real education comes from shipping products and solving
              real client challenges.
            </p>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 ">
            {[
              "React",
              "Next.js",
              "Node.js",
              "MongoDB",
              "MySQL",
              "Tailwind CSS",
              "REST APIs",
            ].map((tech) => (
              <span
                key={tech}
                className="font-body text-xs font-medium tracking-wide px-3 py-1 rounded-full dark:bg-white/[0.07] bg-black/[0.05] dark:text-white/80 text-black/80 dark:border-white/15 border-black/10 border transition-colors hover:border-yellow-400/50 hover:text-yellow-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Closing callout */}
          <p className="font-display dark:text-white text-black font-bold text-base md:text-lg ">
            Let's build something that matters.
          </p>

          {/* CTA Button */}
          <div className="">
            <a
              href="/Resume_Rishi.pdf"
              download="Resume_Rishi.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                font-body group inline-flex items-center gap-2
                bg-black text-white dark:bg-white dark:text-black
                px-7 py-3 text-xs tracking-[0.14em] uppercase font-semibold
                transition-all duration-300
                hover:opacity-85 shadow-lg cursor-pointer
              "
            >
              Download CV
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
