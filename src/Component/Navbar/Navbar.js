// src/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo"></div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link>
        <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</Link>
        <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link>
        <Link to="certifications" smooth={true} duration={500} onClick={closeMenu}>Certifications</Link>
        <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
