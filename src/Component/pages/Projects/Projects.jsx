// src/Component/pages/Projects/Projects.js
import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built using React.js to showcase my resume, skills, and work.',
    link: 'https://portfolio-dusky-iota-98.vercel.app/',
  },
  {
    title: 'Kamgar Sahayak Platform',
    description: 'A React-based job portal for unorganized sector workers to find local jobs easily.',
    link: 'https://kaamgharsahayak.web.app/',
  },
 
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-project"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
