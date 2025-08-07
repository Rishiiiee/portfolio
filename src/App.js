import React from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Aboutme from "./Pages/Aboutme";
import SkillsSlider from "./Pages/skils";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div
      className="min-h-screen transition-colors duration-300 
      bg-gradient-to-br from-[#585c3f] via-[#585c3f] to-[#585c3f]
      dark:from-black dark:via-gray-900 dark:to-gray-800 
      text-white scroll-smooth"
    >
      <Navbar />

      <section id="home">
        <HomePage />
      </section>

      <section id="about">
        <Aboutme />
      </section>

      <section id="skills">
        <SkillsSlider />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
