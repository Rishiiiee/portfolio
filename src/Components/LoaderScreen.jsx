import React, { useEffect, useState, useRef } from "react";

/**
 * LoaderScreen
 * ─────────────
 * Phase 1 (0–800ms):   Black screen fades in, name types character by character
 * Phase 2 (800–2400ms): Name fully visible + blinking cursor
 * Phase 3 (2400–3200ms): Loader panel slides upward, revealing the page behind
 */

const FULL_NAME = "Rishi Shrivastav";
const CHAR_DELAY = 70; // ms per character
const HOLD_AFTER_TYPE = 900; // pause after fully typed
const SLIDE_DURATION = 900; // ms for slide-up animation

function LoaderScreen({ onComplete }) {
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState("typing"); // "typing" | "holding" | "sliding"
  const indexRef = useRef(0);

  useEffect(() => {
    // Lock body scroll while loader is active
    document.body.classList.add("loader-active");

    // Type out the name
    const typingInterval = setInterval(() => {
      if (indexRef.current < FULL_NAME.length) {
        setDisplayedName(FULL_NAME.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        clearInterval(typingInterval);
        setPhase("holding");

        // After hold, start the slide-up
        setTimeout(() => {
          setPhase("sliding");
          setTimeout(() => {
            document.body.classList.remove("loader-active");
            onComplete();
          }, SLIDE_DURATION);
        }, HOLD_AFTER_TYPE);
      }
    }, CHAR_DELAY);

    return () => {
      clearInterval(typingInterval);
      document.body.classList.remove("loader-active");
    };
  }, [onComplete]);

  if (phase === null) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black
        ${phase === "sliding" ? "animate-loader-slide-up" : ""}
      `}
      style={phase === "sliding" ? { animationDuration: `${SLIDE_DURATION}ms` } : {}}
    >
      {/* Progress bar at bottom */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-white/10 w-full">
        <div
          className="h-full bg-white transition-all ease-linear"
          style={{
            width: phase === "holding" || phase === "sliding" ? "100%" : `${(displayedName.length / FULL_NAME.length) * 100}%`,
            transitionDuration: phase === "typing" ? `${CHAR_DELAY}ms` : "400ms",
          }}
        />
      </div>

      {/* Name display */}
      <div className="text-center px-8">
        <p
          className="font-display text-white tracking-[0.08em] select-none"
          style={{
            fontSize: "clamp(1.4rem, 5vw, 3rem)",
            fontWeight: 400,
            letterSpacing: "0.12em",
            opacity: displayedName.length > 0 ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          {displayedName}
          {/* Blinking cursor */}
          <span
            className="inline-block w-[2px] ml-[3px] bg-white align-middle"
            style={{
              height: "0.85em",
              animation: showCursor ? "cursorBlink 0.8s step-end infinite" : "none",
              opacity: phase === "sliding" ? 0 : 1,
            }}
          />
        </p>

        {/* Subtle role line fades in after name is done */}
        <p
          className="font-body text-white/40 tracking-[0.3em] uppercase mt-4 text-xs"
          style={{
            opacity: phase === "holding" || phase === "sliding" ? 1 : 0,
            transform: phase === "holding" || phase === "sliding" ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            letterSpacing: "0.3em",
          }}
        >
          Portfolio
        </p>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-8 left-10 font-body text-white/20 text-xs tracking-[0.2em] uppercase">
        2025
      </div>
      <div className="absolute top-8 right-10 font-body text-white/20 text-xs tracking-[0.2em] uppercase">
        RS
      </div>
    </div>
  );
}

export default LoaderScreen;
