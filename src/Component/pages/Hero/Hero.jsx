// src/Hero.js
import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';

import chelsiavatar from '../../../Avatar/avatar.jpg';

function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <img
        loading='lazy'
          src={chelsiavatar}
          alt="Chelsi Avatar"
          className="avatar"
        />
        <h1>Hi, I'm Chelsi Gupta</h1>
        <p>
          Aspiring Software Engineer | Frontend Developer | Data Science Intern @ Celebal Technologies
        </p>
        <p>
          Seeking roles in Software Development, Frontend Engineering & Tech-Driven Teams
        </p>
        <Link
  to="about"
  smooth={true}
  duration={500}
  className="hero-btn"
>
  Let's Connect
</Link>

      </div>
    </header>
  );
}

export default Hero;
