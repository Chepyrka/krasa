import React from 'react';
import './Footer.css';

const Footer = ({ isSurveyPage = false }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; 2025 {isSurveyPage ? 'KRASA' : 'BeautyBook Pro'}. 
          {isSurveyPage ? ' Built for beauty professionals.' : ' All rights reserved. Built for beauty professionals who demand excellence.'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
