import React, { useEffect, useState } from "react";
import robotImg from "../asset/homepageimage.png";

/**
 * HomePage — Split hero: left text block + right image
 * Fits exactly one viewport height. Professional editorial style.
 */
function HomePage({ loaded }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (loaded) {
      const t = setTimeout(() => setVisible(true), 120);
      return () => clearTimeout(t);
    }
  }, [loaded]);

  const anim = (n) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${n * 0.1}s,
                 transform 0.75s cubic-bezier(0.16,1,0.3,1) ${n * 0.1}s`,
  });

  return (
    <div
      className="
        h-screen flex flex-col justify-between
        dark:bg-black bg-white
        px-[5vw]
        overflow-hidden
      "
    >
      {/* ── Top micro-label row with comfortable spacing below fixed navbar ── */}
      <div
        className="flex justify-between items-center pt-20 sm:pt-24 lg:pt-28 pb-2 sm:pb-3 lg:pb-4 font-body text-[10px] tracking-[0.22em] uppercase dark:text-white/55 text-black/50 flex-shrink-0"
        style={anim(0)}
      >
        <span>Rishi Shrivastav</span>
        <span>Full-Stack Developer</span>
        <span className="hidden sm:flex items-center gap-2">
          <span
            className="inline-block w-[7px] h-[7px] rounded-full bg-green-400"
            style={{
              animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
              boxShadow: "0 0 6px 2px rgba(74,222,128,0.5)",
            }}
          />
          Available for work
        </span>
      </div>

      {/* ── Main two-column hero ── */}
      <div className="flex-1 flex flex-row items-start lg:items-center gap-8 lg:gap-12 min-h-0 pt-3 sm:pt-6 lg:pt-0 lg:my-auto">
        {/* ── LEFT: Text content ── */}
        <div className="flex flex-col justify-start lg:justify-center flex-1 min-w-0 py-1 lg:py-2">
          {/* Big h1 — "Full Stack" */}
          <div style={{ overflow: "hidden" }}>
            <h1
              className="font-display dark:text-white text-black leading-[0.88] select-none"
              style={{
                fontSize: "clamp(2rem, 4.8vw, 4.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                ...anim(1),
              }}
            >
              Full Stack
            </h1>
          </div>

          {/* Big h1 — "Software" */}
          <div style={{ overflow: "hidden" }}>
            <h1
              className="font-display dark:text-white text-black leading-[0.88] select-none"
              style={{
                fontSize: "clamp(2rem, 4.8vw, 4.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                ...anim(2),
              }}
            >
              Software
            </h1>
          </div>

          {/* Big h1 — "Developer" */}
          <div style={{ overflow: "hidden" }}>
            <h1
              className="font-display dark:text-white text-black leading-[0.88] select-none"
              style={{
                fontSize: "clamp(2rem, 4.8vw, 4.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                ...anim(2),
              }}
            >
              Developer
            </h1>
          </div>

          {/* Separator line */}
          <div
            className="my-3 h-px dark:bg-white/10 bg-black/10 w-full"
            style={anim(3)}
          />

          {/* Sub-headline — tagline */}
          <div style={anim(4)}>
            <h2
              className="font-display dark:text-white/70 text-black/70 leading-snug"
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.6rem)",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              Experienced in Custom Web Development —
            </h2>
            <h2
              className="font-display dark:text-white text-black leading-snug"
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.6rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              Building Products That Ship.
            </h2>
          </div>

          {/* Description */}
          <p
            className="font-body dark:text-white/55 text-black/55 leading-relaxed mt-3 max-w-md"
            style={{ fontSize: "clamp(0.85rem, 1vw, 1rem)", ...anim(5) }}
          >
            I craft scalable React interfaces, REST APIs, and MERN stack
            applications — from idea to production-ready product.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4 mt-5" style={anim(6)}>
            <a
              id="hero-hire-me"
              href="#contact"
              className="
                font-body group inline-flex items-center gap-2
                bg-black text-white dark:bg-white dark:text-black
                px-6 py-3 text-xs tracking-[0.14em] uppercase font-medium
                transition-all duration-300
                hover:opacity-80
              "
            >
              Hire Me
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              id="hero-view-work"
              href="#projects"
              className="
                font-body inline-flex items-center gap-2
                border dark:border-white/30 border-black/30
                dark:text-white/70 text-black/70
                px-6 py-3 text-xs tracking-[0.14em] uppercase font-medium
                transition-all duration-300
                hover:dark:border-white hover:border-black
                hover:dark:text-white hover:text-black
              "
            >
              View Work ↓
            </a>
          </div>
        </div>

        {/* ── RIGHT: Dev image — pinned to bottom of the hero column ── */}
        <div
          className="hidden lg:flex flex-shrink-0 items-end justify-center self-stretch"
          style={{
            width: "clamp(200px, 25vw, 380px)",
            ...anim(3),
          }}
        >
          {/* Image sits at 85% height of its column, bottom-aligned */}
          <div
            className="relative flex items-end justify-center w-full"
            style={{ height: "85%" }}
          >
            {/* Dark mode: subtle white glow */}
            <div className="dark:block hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] rounded-full bg-white/5 blur-3xl" />

            {/* Light mode: animated warm glow */}
            <div
              className="dark:hidden block absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
              style={{
                width: "85%",
                height: "85%",
                background:
                  "radial-gradient(ellipse at center, rgba(250,204,21,0.2) 0%, rgba(168,85,247,0.10) 55%, transparent 75%)",
                animation: "glowPulse 4s ease-in-out infinite",
                filter: "blur(30px)",
              }}
            />
            <img
              src={robotImg}
              alt="Developer avatar"
              className="relative z-10 w-full object-contain object-bottom"
              style={{
                maxHeight: "100%",
                filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.15))",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Single Unified Bottom Bar (Zero Overlap Guaranteed) ── */}
      <div
        className="flex-shrink-0 flex justify-between items-center py-4 border-t dark:border-white/10 border-black/10 font-body text-[10px] tracking-[0.16em] uppercase dark:text-white/40 text-black/40"
        style={anim(7)}
      >
        {/* Left: Socials & Location */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:dark:text-white hover:text-black transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:dark:text-white hover:text-black transition-colors"
          >
            LinkedIn ↗
          </a>
          <span className="hidden sm:inline dark:text-white/25 text-black/25">
            Based in India
          </span>
        </div>

        {/* Right: Copyright & Stack */}
        <div className="flex items-center gap-4">
          <span className="whitespace-nowrap">© 2025 Rishi Shrivastav</span>
          <span className="hidden md:inline dark:text-white/20 text-black/20">
            ·
          </span>
          <span className="hidden md:inline dark:text-white/25 text-black/25 whitespace-nowrap">
            MERN · React · Node.js
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
