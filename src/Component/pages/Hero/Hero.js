// src/Hero.js
import React from 'react';
import './Hero.css';
import chelsiavatar from '../../../Avatar/avatar.jpg';

function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <img
          src={chelsiavatar}
                    alt="chelsiAvatar"
          className="avatar"
        />
        <h1>Hi, I'm Chelsi Gupta</h1>
        <p>Aspiring Software Engineer | FrontEnd Enthusiast</p>
        <a href="#contact" className="hero-btn">Contact Me</a>
      </div>
    </header>
  );
}

export default Hero;
