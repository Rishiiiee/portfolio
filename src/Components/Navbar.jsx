import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
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
  }, [isDark]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Let's Contact", href: "#contact" },
  ];
  const navLinkClass = "hover:text-orange-300 transition font-medium";

  return (
    <nav className="bg-transparent text-white py-4 fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="w-[80%] mx-auto px-4 flex justify-between items-center">
        <div className="flex flex-row items-center space-y-2">
          <div className="flex flex-row items-center space-y-1">
            <div className="w-10 h-10 rounded-full border-2 border-dashed border-yellow-400 flex items-center justify-center shadow-[0_0_0_2px_rgba(79,70,229,0.15)] animate-spin-slow">
              <span className="text-sm font-semibold tracking-wide bg-gradient-to-r from-yellow-300 to-yellow-400 text-transparent bg-clip-text">
                RS
              </span>
            </div>
            <span className="text-sm md:text-base font-semibold bg-gradient-to-r from-slate-100 via-gray-200 to-slate-100 text-transparent bg-clip-text tracking-wide mt-2">
              Rishi Shrivastav
            </span>
          </div>
        </div>

        <div className="hidden md:flex space-x-8 items-center justify-center text-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-orange-300 transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="ml-4 px-3 py-1 rounded-md bg-white/20 hover:bg-white/30 text-white transition"
        >
          {isDark ? "🌞 Light" : "🌙 Dark"}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl ml-4"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-2 text-center py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive ? `text-orange-300 font-medium` : navLinkClass
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
