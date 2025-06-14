// src/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Chelsi</div>
      <div className="nav-links">
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
        <Link to="certifications" smooth={true} duration={500}>Certifications</Link>

      </div>
    </nav>
  );
}

export default Navbar;
