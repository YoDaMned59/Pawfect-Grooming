import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.scss';
import siteData from '../data/siteData.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { contact } = siteData;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>{siteData.siteName}</h3>
            <p>{siteData.siteDescription}</p>
          </div>
          
          <div className="footer__section">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">À Propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h4>Contact</h4>
            <ul>
              <li>📍 {contact.address}</li>
              <li>📞 {contact.phone}</li>
              <li>✉️ {contact.email}</li>
            </ul>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>&copy; {currentYear} {siteData.siteName}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 