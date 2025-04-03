import React from "react";
import "../Styles/About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image"></div>
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p>
            I'm passionate about frontend
            development with hands-on experience in building modern web
            applications. I specialize in creating intuitive and responsive user
            interfaces that deliver exceptional user experiences, combining my
            academic knowledge with practical skills.
          </p>
          <p>
            My fresh perspective and up-to-date education in the latest
            technologies allow me to approach problems with innovative
            solutions. When I'm not coding, you can find me exploring new
            frameworks, contributing to open source projects, or continuously
            expanding my skill set through personal projects.
          </p>
          
          <a
            href="/documents/TarekSemhan.docx" 
            className="about-button"
            download="TarekSemhanResume.docx" 
            target="_blank" 
            rel="noopener noreferrer" 
          >
            Download Resume
        
            <svg
              className="download-icon"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path
                d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
