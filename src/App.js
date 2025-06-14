import React, { useEffect } from 'react';
import Navbar from './Component/Navbar/Navbar';
import './App.css';
import 'animate.css';
import Hero from './Component/pages/Hero/Hero';
import About from './Component/pages/About/About';
import Skills from './Component/pages/Skills/Skills';
import Education from './Component/pages/Education/Education';
import Projects from './Component/pages/Projects/Projects';
import Experience from './Component/pages/Experiences/Experience';
import Contact from './Component/pages/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Certifications from './Component/pages/Certifications/Certifications';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <Skills />
      <Projects />
      <Experience/>
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
