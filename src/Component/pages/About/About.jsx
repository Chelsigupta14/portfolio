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
            I’m a passionate and motivated tech enthusiast actively looking for opportunities in the 
            <strong> Software Development</strong>, <strong> Frontend Development</strong>, or 
            <strong> Software Engineering</strong> domains. I recently completed an internship at 
            <strong> Celebal Technologies</strong>, where I worked in the <strong>Data Science</strong> domain and 
            gained hands-on experience with real-world data and analytical tools.
          </p>
          <p>
            I have a basic understanding of <strong>C++</strong> and <strong>Python</strong>, and I’m continuously 
            working to strengthen my skills through personal projects, online courses, and certifications. My primary 
            interest lies in web development and creating interactive, user-friendly digital experiences. I'm eager to 
            contribute to dynamic teams, grow in a challenging environment, and apply my learning to build impactful 
            solutions.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
