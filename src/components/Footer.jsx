import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/Files/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <img src={logo} alt="Siddhant Shekhar Logo" className="footer-logo-image" />
          <p>Computer Science & Engineering</p>
        </div>
        
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com/siddhantshekhar18" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/siddhant-shekhar-776579254/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/SiddShekhar18" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://www.instagram.com/dead.soul__18?igsh=MWphZHlqajR3M2h0OA%3D%3D" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} ScriptShapers. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
