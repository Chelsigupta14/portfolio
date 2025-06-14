// src/Component/pages/Education/Education.js
import React from 'react';
import './Education.css';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Arya College of Engineering And IT — RTU',
    year: '2021 - 2025',
    qualification: 'Bachelor of Technology in Computer Science',
    score: 'CGPA 9.00',
    location: 'Jaipur, Rajasthan'
  },
  {
    institution: 'Nirmal Happy Senior Secondary School — RBSE',
    year: '2020',
    qualification: 'Senior Secondary Standard',
    score: 'Aggregate: 72.60%',
    location: 'Hindaun, Rajasthan'
  },
  {
    institution: 'Nirmal Public English Medium School — RBSE',
    year: '2018',
    qualification: 'Secondary Standard',
    score: 'Aggregate: 78.00%',
    location: 'Hindaun, Rajasthan'
  }
];

const Education = () => {
  return (
    <motion.section
      id="education"
      className="education-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="education-title">Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <motion.div
            className="education-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>{edu.institution}</h3>
            <p><strong>{edu.year}</strong></p>
            <p>{edu.qualification}</p>
            <p>{edu.score}</p>
            <p>{edu.location}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
