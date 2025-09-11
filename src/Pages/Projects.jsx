import { useState } from "react";
import samsung from "../asset/samsung.png"
import mini from "../asset/mini.png"
import note from "../asset/notes.png"
import snap from "../asset/snap.png"

const projectData = {
  starter: [
    {
      title: "React Groceries-lisgt",
      description: "A basic react groceries list using Axios ,React and JS. Clean and responsive layout.",
      img: "/images/calculator.png",
      tags: ["React", "CSS", "JavaScript"],
      demo: "Demo not available",
      code: "https://github.com/Rishiiiee/react-groceries-list",
    },
    {
      title: "React Country-list Api",
      description: "A basic react app using fetch api .",
      img: "/images/weather.png",
      tags: ["React", "CSS", "JS", "API"],
      demo: "Demo not available",
      code: "https://github.com/Rishiiiee/react-country-list",
    },
  ],
  frontend: [
    {
      title: "Samsung E-commerce Clone",
      description: "This is a frontend practice project, designed to apply and improve React development skills — including page routing, component reusability, state management, and mock API integration. While it simulates e-commerce functionality, it does not include real-time backend or user authentication..",
      img: samsung,
      tags: ["React", "Bootstrap", ""],
      demo: "https://samsung-clone-fe.vercel.app/",
      code: "https://github.com/Rishiiiee/Samsung-clone_Fe",
    },
    {
      title: "Mini E-commerce",
      description: "This project is designed to practice e-commerce app logic in React using mock APIs and some features like Search, filteration , sorting based on price ,  state handling. It does not include authentication or a real backend..",
      img: mini,
      tags: ["React", "Tailwind", "Responsive"],
      demo: "https://mini-ecommerce-fe-tawny.vercel.app/",
      code: "https://github.com/Rishiiiee/mini_ecommerce_fe",
    },
  ],
  fullstack: [
    {
      title: "Mini Notes Web (Full-stack)",
      description: "This is a basic fullstack project, created to practice backend logic, authentication, and API integration. It may not include advanced features or UI polish, but serves as a strong foundation for future fullstack projects..",
      img: note,
      tags: ["React", "Node.js", "MongoDB"],
      demo: "https://notes-web-fe.vercel.app/",
      code: "https://github.com/Rishiiiee/NotesWeb_fe",
    },
    {
      title: "SnapCart – Full-Stack E-Commerce Application",
      description: " full-stack e-commerce web application built with React.js, Node.js, Express, and MongoDB, featuring secure authentication, cart management, and Razorpay payment integration.",
      img: snap,
      tags: ["Node.js", "MongoDB", "Express"],
      demo: "https://snap-cart-fe.vercel.app/",
      code: "https://github.com/Rishiiiee/SnapCart_Fe",
    },
  ],
};

function Projects() {
  const [activeTab, setActiveTab] = useState("fullstack");

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <span className="bg-indigo-500/10 text-white-400 px-4 py-1 rounded-full text-2xl font-medium">
          My Projects
        </span>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-indigo rounded-lg p-1">
          <button
            onClick={() => setActiveTab("starter")}
            className={`px-6 py-2 text-lg font-medium rounded-lg transition-colors duration-300 ${
              activeTab === "starter" ? "bg-black/30 text-white" : "text-gray-300 hover:text-white hover:scale-105"
            }`}
          >
            Starter
          </button>
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
              activeTab === "frontend" ? "bg-black/30 text-white" : "text-gray-300 hover:text-white hover:scale-105"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab("fullstack")}
            className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
              activeTab === "fullstack" ? "bg-black/30 text-white" : "text-gray-300 hover:text-white hover:scale-105"
            }`}
          >
            Fullstack
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projectData[activeTab].map((project, idx) => (
          <div key={idx} className="w-full max-w-xl bg-black/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img src={project.img} alt={project.title} className="w-full h-40 md:h-56 lg:h-64 object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4 text-justify">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-indigo-500/10 text-indigo-300 text-xs font-medium px-2.5 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-all">
                  Live Demo →
                </a>
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-all">
                  Source Code →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
