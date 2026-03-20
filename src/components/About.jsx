import React from 'react';
import '../styles/About.css';
import profilePhoto from '../assets/Files/Photo.jpg';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <img src={profilePhoto} alt="Siddhant Shekhar" />
            </div>
          </div>
          
          <div className="about-text">
            <h3>Who am I?</h3>
            <p style ={{textAlign:"justify"}}>
              I'm a passionate developer with a strong foundation in Data Structures, Algorithms, and Web Development. 
              I love building efficient, scalable applications and contributing to real-world software projects. 
              Proficient in JavaScript, React, and Node.js.
            </p>
            
            <div className="education">
              <h4>Education</h4>
              <div className="education-item">
                <p className="year">2022 - Present</p>
                <h5>B.Tech in Computer Science & Engineering</h5>
                <p className="institution">Axis Institute of Technology & Management, Kanpur</p>
                <p className="details">Current CGPA: 7.8/10</p>
              </div>
              
              <div className="education-item">
                <p className="year">2021</p>
                <h5>Senior Secondary Education</h5>
                <p className="institution">Shemushi Vidyapeeth, Ballia</p>
                <p className="details">Percentage: 90.20%</p>
              </div>
            </div>
            
            <div className="interests">
              <h4>My Interests</h4>
              <div className="interests-tags">
                <span className="tag">Web Development</span>
                <span className="tag">Software Development</span>
                <span className="tag">Mobile Development</span>
                <span className="tag">UI/UX Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
