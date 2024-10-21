import React from 'react';
import './styles.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="navbar-header">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><Link to="/">Home</Link></li>
          <li className="navbar-item"><Link to="/about">About Us</Link></li>
          <li className="navbar-item"><Link to="/projects">Projects</Link></li>
          <li className="navbar-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
