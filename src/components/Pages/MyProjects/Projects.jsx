import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Portfolio from '../../../assets/project.webp'
const projects = [
  {
    id: 1,
    name: "Plant Palace",
    technologies: "MERN Stack | React.js",
    image: Portfolio,
    github: "https://github.com/Rimshaabbasi98/Plant-Palace.git",
  },
  {
    id: 2,
    name: "School's Info",
    technologies: "MERN Stack | React.js | Tailwind CSS",
    image: Portfolio,
    github: "https://github.com/Rimshaabbasi98/Schools-Info.git",
  },
  {
    id: 3,
    name: "Crud",
    technologies: "MERN Stack React.js | Tailwind CSS",
    image: Portfolio,
    github: "https://github.com/Rimshaabbasi98/crud.git",
  },
];

const Projects = () => {
  return (
    <section id="projects"  className="w-full h-auto bg-gray-100 py-12 lg:py-24">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects <span className="block h-1 w-24 bg-teal-500 mt-2 mx-auto rounded"></span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
            key={project.id}
              className="bg-teal-500 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{
                opacity: 0,
                x: project.id === 1 ? -50 : project.id === 2 ? 0 : 50,
                y: project.id === 2 ? -50 : 0
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              >
              {project.image && (
                <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
              )}
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-white mb-4">{project.technologies}</p>
              <Link to={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
          </section>
  );
};

export default Projects;
