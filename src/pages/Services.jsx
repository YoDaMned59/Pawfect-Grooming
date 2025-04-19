import React from 'react';
import { motion } from 'framer-motion';
import siteData from '../data/siteData.json';
import '../styles/pages/Services.scss';

const Services = () => {
  const { servicesPage } = siteData;

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div 
            className="services-hero__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{servicesPage.hero.title}</h1>
            <p>{servicesPage.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list">
        <div className="container">
          <div className="services-grid">
            {servicesPage.services.map((service) => (
              <motion.div
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img src={service.image} alt={service.name} />
                <h3>{service.name}</h3>
                <p className="description">{service.description}</p>
                <p className="duration">{service.duration}</p>
                <p className="price">{service.price}€</p>
                <ul className="features">
                  {service.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button className="btn-reserver">Réserver</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="services-info">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="services-info__content"
          >
            <h2>{servicesPage.additionalInfo.title}</h2>
            <p>{servicesPage.additionalInfo.content}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 