// src/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "20px", background: "#f0f0f0" }}>
  © {new Date().getFullYear()} Chelsi Gupta • All rights reserved.
</footer>

  );
}

export default Footer;
