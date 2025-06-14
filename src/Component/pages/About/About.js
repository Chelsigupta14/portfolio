// src/Component/pages/About/About.js
import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import chelsiavatar from '../../../Avatar/chelsi.jpg'; // Ensure you have an avatar image in this path

function About() {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-content">
        <img src={chelsiavatar} alt="Chelsi Avatar" className="about-avatar" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am <strong>Chelsi Gupta</strong>, an aspiring <strong>Software Engineer</strong> passionate about crafting engaging and responsive web applications. 
            With skills in <strong>React.js, Python, Machine Learning, and SQL</strong>, I strive to build impactful and scalable solutions.
          </p>
          <p>
            I recently completed an internship at <strong>Celebal Technologies</strong>, where I honed my skills in <strong>data analysis and frontend development</strong>. 
            I love turning ideas into interactive experiences and am eager to contribute to innovative tech-driven teams.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
