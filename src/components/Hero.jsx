import React from 'react';
import '../styles/Hero.css';
import resumeFile from '../assets/Files/SiddhantShekhar_Resume_2026.pdf';
import profilePhoto from '../assets/Files/Photo2.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-status-badge">Open To Opportunities</div>
          <h2 className="hero-subtitle">Hello, I'm</h2>
          <h1 className="hero-title">SIDDHANT SHEKHAR</h1>
          <p className="hero-tagline">
            Computer Science <span className="tagline-accent">& Engineering</span>
          </p>
          <p className="hero-description">
            Passionate about creating innovative solutions through code. Currently pursuing B.Tech in Computer Science Engineering.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW MY WORK
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              CONTACT ME
            </button>
          </div>
          
          <div className="hero-cta">
            <a href={resumeFile} download="SiddhantShekhar_Resume_2026.pdf" className="download-cv">DOWNLOAD CV</a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-placeholder">
            <img src={profilePhoto} alt="Siddhant Shekhar" />
          </div>
        </div>
      </div>
    </section>
  );
}
