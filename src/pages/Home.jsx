import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.scss';
import siteData from '../data/siteData.json';

const Home = () => {
  const { homePage } = siteData;

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1>{homePage.hero.title}</h1>
            <p>{homePage.hero.subtitle}</p>
            <Link to="/contact" className="btn btn-primary">{homePage.hero.ctaText}</Link>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2>{homePage.services.title}</h2>
          <div className="services-grid">
            {homePage.services.items.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-card__icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-card__price">{service.price}</span>
              </div>
            ))}
          </div>
          <div className="services-preview__cta">
            <Link to="/services" className="btn btn-secondary">Voir tous nos services</Link>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <h2>{homePage.about.title}</h2>
          <p>{homePage.about.description}</p>
          <Link to="/about" className="btn btn-secondary">{homePage.about.ctaText}</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 