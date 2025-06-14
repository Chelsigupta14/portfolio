// src/Component/pages/Skills/Skills.js
import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

const Skills = () => {
  const sections = {
    'Programming Languages': ['C++', 'Python'],
    'Frontend Technologies': ['HTML', 'CSS', 'React.js'],
    'Tools & Platforms': ['Git & GitHub', 'SQL', 'MongoDB']
  };

  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="skills-title">Skills</h2>
      <div className="skills-wrapper">
        {Object.entries(sections).map(([category, skills], i) => (
          <div className="skills-category" key={i}>
            <h3>{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  className="skill-card"
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
