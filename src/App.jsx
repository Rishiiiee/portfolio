import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import LoaderScreen from "./Components/LoaderScreen";
import HomePage from "./Pages/HomePage";
import Aboutme from "./Pages/Aboutme";
import SkillsSlider from "./Pages/skils";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Loader — fixed overlay, slides up and unmounts when done */}
      {!loaded && <LoaderScreen onComplete={() => setLoaded(true)} />}

      {/* Main content — always mounted so it's ready when loader exits */}
      <div
        className="min-h-screen transition-colors duration-300
          dark:bg-black bg-white
          dark:text-white text-black
          scroll-smooth"
      >
        <Navbar />

        <section id="home">
          <HomePage loaded={loaded} />
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
    </>
  );
}

export default App;
