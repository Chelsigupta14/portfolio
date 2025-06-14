import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Celebal Technologies',
    duration: 'Jan 2024 – Mar 2024',
    description: `Selected for the prestigious COE (Center of Excellence) Internship Program where I worked on real-world data science projects. 
    Gained hands-on experience in data preprocessing, exploratory data analysis (EDA), and building predictive models using Python libraries 
    such as pandas, NumPy, matplotlib, seaborn, and scikit-learn. Also contributed to generating meaningful insights from datasets and 
    developed small-scale dashboards for internal evaluations.`,
    certificateLink: 'https://drive.google.com/file/d/1RMe8ZpL2Twf4U0u6c0LpZt9pPtSS-2Vz/view?usp=drive_link'
    
  },
  {
    role: 'Python Web Developer Trainee',
    company: 'Infosys Foundation',
    duration: 'Nov 2024 – Dec 2024',
    description: `Successfully completed a structured training program that focused on backend web development using Python. 
    Developed foundational understanding of Flask and Django frameworks, RESTful APIs, database handling with SQLite and MySQL, 
    and deployment techniques using Heroku. Gained practical exposure to building dynamic, secure, and scalable web applications.`,
    certificateLink: 'https://drive.google.com/file/d/13W-7Yeoh5pytneTopkZtoIcLGoJgriNX/view?usp=drive_link'  },
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
            {exp.certificateLink && (
              <a
                href={exp.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="view-certificate"
              >
                View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
