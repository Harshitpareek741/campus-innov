// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-icons">
          <a href="http://linkedin.com/in/gaurav-khandelwal-08108a255" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.instagram.com/gaurav.810?igshid=OGY3MTU3OGY1Mw==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
    
        <div className="download-app">
          <a href="/path/to/download/app" download>
            <FontAwesomeIcon icon={faDownload} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
