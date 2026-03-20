import React from 'react';
import '../styles/Projects.css';
import nexusBanner from '../assets/Files/nexus.png';
import weatherWebBanner from '../assets/Files/weather-web.png';
import KaryON from '../assets/Files/KaryON.png';
import AxisCon from '../assets/Files/AxisCon.png';

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'KaryON Web App',
      description: 'Home services platform that connects users with verified professionals for plumbing, electrical, cleaning, painting, and more with simple booking.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveLink: 'https://karyon.app/',
      githubLink: 'https://github.com/Cosmic-Aura-Tech-Industry-CATI/KaryON',
      image: KaryON
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce platform built for smooth product browsing, category-based shopping, and a clean checkout experience with a responsive user interface.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://nexus-ecom.netlify.app/',
      githubLink: '#',
      image: nexusBanner
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Interactive weather web app that provides real-time temperature, humidity, and forecast updates by city using the OpenWeather API with a clean, responsive interface.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      liveLink: 'https://weather-update-script-shapers.netlify.app/',
      githubLink: '#',
      image: weatherWebBanner
    },
    {
      id: 4,
      title: 'Axis College Conference Website',
      description: 'Official conference website for Axis College, designed to showcase event highlights, speaker details, schedules, and registration information in a clear and engaging layout.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveLink: 'https://axiscon.netlify.app/',
      githubLink: 'https://github.com/Cosmic-Aura-Tech-Industry-CATI/AxisCon',
      image: AxisCon
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my recent works and side projects</p>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.image && project.image !== 'placeholder' ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div className="image-placeholder">
                    <i className="fas fa-image"></i>
                    <p>Project Image</p>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description" style={{textAlign:"justify"}}>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveLink} className="project-link live-link" target='_blank'>
                    <i className="fas fa-external-link-alt"></i> Live
                  </a>
                  <a href={project.githubLink} className="project-link github-link" target='_blank'>
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
