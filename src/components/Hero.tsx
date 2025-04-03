import React from 'react';
import '../Styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span>Tarek Semhan</span></h1>
        <h2 className="hero-subtitle">Frontend Developer</h2>
        <p className="hero-description">
          I build exceptional digital experiences with modern technologies.
        </p>
        <a href="#contact" className="hero-button">Get In Touch</a>
      </div>
      <div className="hero-image">
      </div>
    </section>
  );
};

export default Hero;