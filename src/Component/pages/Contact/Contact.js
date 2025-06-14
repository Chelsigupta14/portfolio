import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-list">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>guptachelsi1409@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+91 9460587175</span>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/chelsi-gupta-88840b232?" target="_blank" rel="noreferrer">
            linkedin.com/in/chelsi-gupta
          </a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/chelsigupta14" target="_blank" rel="noreferrer">
            github.com/chelsi-gupta
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
