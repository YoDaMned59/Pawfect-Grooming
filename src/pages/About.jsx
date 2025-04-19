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

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <h2>{aboutPage.team.title}</h2>
          <div className="team-grid">
            {aboutPage.team.members.map((member) => (
              <motion.div
                key={member.id}
                className="team-member"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="team-member__image">
                  <img
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="team-member__role">{member.role}</p>
                <p className="team-member__bio">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 