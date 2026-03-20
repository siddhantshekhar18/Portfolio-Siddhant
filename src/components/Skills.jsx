import React from 'react';
import '../styles/Skills.css';

export default function Skills() {
  const skillsData = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Node.js', level: 50 },
    { name: 'MongoDB', level: 60 },
    { name: 'Python', level: 30 },
    { name: 'Git', level: 80 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">I've developed expertise in various areas of software development</p>
        
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <h4>{skill.name}</h4>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <h3>Technology Stack</h3>
          <div className="tech-categories">
            <div className="tech-category">
              <h5>Frontend</h5>
              <div className="tech-badges">
                <span className="badge">React</span>
                <span className="badge">HTML5</span>
                <span className="badge">CSS3</span>
                <span className="badge">JavaScript</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h5>Backend</h5>
              <div className="tech-badges">
                <span className="badge">Node.js</span>
                <span className="badge">Express</span>
                <span className="badge">MongoDB</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h5>Tools & Others</h5>
              <div className="tech-badges">
                <span className="badge">Git</span>
                <span className="badge">VS Code</span>
                <span className="badge">Figma</span>
                <span className="badge">Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
