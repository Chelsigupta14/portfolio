// src/Component/pages/Certifications/Certifications.js
import React from 'react';
import './Certifications.css';
import { motion } from 'framer-motion';

const certifications = [
  
  {
    title: 'FrontEnd Web Development with ReactJS',
    issuer: 'Grass-solutions',
    date: 'Sep 2023 – Dec 2023',
  },
  {
    title: 'Computer Networks And Internet Protocols',
    issuer: 'NPTEL',
    date: 'Jan – April 2024',
  },
  {
    title: 'Full-Stack Web Development using MERN',
    issuer: 'Grass-solutions',
    date: 'Feb 2024 – April 2024',
  },
  {
    title: 'Introduction to MongoDB',
    issuer: 'MongoDB',
    date: 'August 2024',
  },
  {
    title: 'Angular',
    issuer: 'Infosys-Springboard',
    date: 'August 2024',
  },
  {
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL',
    date: 'July – Oct 2024',
  },
  {
    title: 'Python Web Developer',
    issuer: 'Infosys Foundation',
    date: 'Nov 13, 2024 – Dec 3, 2024',
  }
];

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="certifications-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <motion.div
            className="certification-card"  // <-- updated here
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
