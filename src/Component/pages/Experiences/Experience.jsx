import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Celebal Technologies',
    duration: 'Jan 2024 – Mar 2024',
    description: 'Worked on data analysis and machine learning models as part of the COE program. Gained hands-on experience in Python, pandas, and scikit-learn.',
  },
  
  {
    role: 'Python Web Developer Trainee',
    company: 'Infosys Foundation',
    duration: 'Nov 2024 – Dec 2024',
    description: 'Completed Python web development training, covering Flask, Django, and deployment techniques.',
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div
            className="experience-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>{exp.role}</h3>
            <p><strong>Company:</strong> {exp.company}</p>
            <p><strong>Duration:</strong> {exp.duration}</p>
            <p className="experience-desc">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
