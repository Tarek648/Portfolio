import React from 'react';
import '../Styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Tarek Semhan. All rights reserved.</p>
        <div className="footer-social">
  <a 
    href="https://github.com/Tarek648" 
    className="social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>
  <a 
    href="https://www.linkedin.com/in/tarek-semhan-323464223" 
    className="social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
</div>
      </div>
    </footer>
  );
};

export default Footer;