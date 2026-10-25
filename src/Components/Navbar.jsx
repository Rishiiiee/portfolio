import React, { useEffect, useState } from "react";
import rsLogo from "../asset/rs_logo.png";

function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem("theme-version") !== "dark-default" ||
      localStorage.getItem("theme") !== "light"
    );
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    localStorage.setItem("theme-version", "dark-default");
  }, [isDark]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Let's Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        py-4
        dark:bg-black/80 bg-white/80
        backdrop-blur-md
        border-b dark:border-white/10 border-black/10
      "
    >
      <div className="w-[88%] mx-auto flex justify-between items-center">
        {/* ── Signature Logo ── */}
        <a
          href="#home"
          className="group flex items-center gap-3 select-none cursor-pointer py-1"
          aria-label="Rishi Shrivastav Home"
        >
          <div className="relative flex items-center">
            {/* Ambient hover glow */}
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-125" />

            {/* Signature Logo Image */}
            <img
              src={rsLogo}
              alt="RS Signature Logo"
              className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-110 filter dark:invert dark:brightness-200"
            />
          </div>
        </a>

        {/* ── Desktop nav links ── */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                font-body text-sm tracking-wide
                dark:text-white/60 text-black/60
                hover:dark:text-white hover:text-black
                transition-colors duration-200
              "
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            id="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label={
              isDark ? "Switch to light theme" : "Switch to dark theme"
            }
            className="
              font-body text-xs tracking-[0.12em] uppercase
              px-4 py-2
              border dark:border-white/20 border-black/20
              dark:text-white text-black
              hover:dark:bg-white hover:dark:text-black
              hover:bg-black hover:text-white
              transition-all duration-200
            "
          >
            {isDark ? "Light" : "Dark"}
          </button>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden flex flex-col gap-[5px] p-1"
          >
            <span
              className={`block w-5 h-[1.5px] dark:bg-white bg-black transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] dark:bg-white bg-black transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] dark:bg-white bg-black transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile menu dropdown ── */}
      {menuOpen && (
        <div className="md:hidden dark:bg-black bg-white border-t dark:border-white/10 border-black/10 py-4 px-8 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                font-body text-sm tracking-wide
                dark:text-white/70 text-black/70
                hover:dark:text-white hover:text-black
                transition-colors
              "
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
