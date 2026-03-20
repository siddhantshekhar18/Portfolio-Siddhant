import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/Files/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Siddhant Shekhar Logo" className="navbar-logo-image" />
        </div>
        
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a onClick={() => scrollToSection('home')} className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a onClick={() => scrollToSection('skills')} className="nav-link">Skills</a>
          </li>
          <li className="nav-item">
            <a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
