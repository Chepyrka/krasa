import React from 'react';
import './Header.css';

const Header = ({ showSurveyLink = true }) => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="logo">KRASA</div>
        <ul className="nav-links">
          <li><a href="/#features">Features</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        {showSurveyLink && (
          <a href="/survey" className="cta-btn">Get Started</a>
        )}
      </nav>
    </header>
  );
};

export default Header;
