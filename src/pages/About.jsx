import React from 'react';
import { motion } from 'framer-motion';
import siteData from '../data/siteData.json';
import '../styles/pages/About.scss';

const About = () => {
  const { aboutPage } = siteData;

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{aboutPage.hero.title}</h1>
            <p>{aboutPage.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="about-story">
        <div className="container">
          <motion.div
            className="about-story__content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-story__text">
              <h2>{aboutPage.history.title}</h2>
              <p>{aboutPage.history.content}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2>{aboutPage.values.title}</h2>
          <div className="values-grid">
            {aboutPage.values.items.map((value) => (
              <motion.div
                key={value.id}
                className="value-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="value-item__icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="about-results">
        <div className="container">
          <h2>{aboutPage.results.title}</h2>
          <div className="results-grid">
            {aboutPage.results.results.map((result) => (
              <motion.div
                key={result.id}
                className="result-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="result-item__image">
                  <img 
                    src={require(`../images/services/${result.id === 1 ? "resultat1.webp" : 
                               result.id === 2 ? "resultat2.webp" : 
                               "resultat3.webp"}`)}
                    alt={`Résultat ${result.id}`} 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 