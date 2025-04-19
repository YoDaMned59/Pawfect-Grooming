import React, { useState } from 'react';
import '../styles/pages/Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    animalType: 'chien',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique pour envoyer le formulaire à un serveur
    console.log('Formulaire soumis:', formData);
    setIsSubmitted(true);
    
    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        animalType: 'chien',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contactez-nous</h1>
          <p>Nous sommes à votre écoute pour répondre à toutes vos questions</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form">
              <h2>Envoyez-nous un message</h2>
              
              {isSubmitted ? (
                <div className="form-success">
                  <p>Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="animalType">Type d'animal</label>
                    <select
                      id="animalType"
                      name="animalType"
                      value={formData.animalType}
                      onChange={handleChange}
                    >
                      <option value="chien">Chien</option>
                      <option value="chat">Chat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
              )}
            </div>
            
            <div className="contact-info">
              <h2>Informations de contact</h2>
              
              <div className="info-item">
                <div className="info-item__icon">📍</div>
                <div className="info-item__content">
                  <h3>Adresse</h3>
                  <p>123 Rue des Toiletteurs<br />75001 Paris, France</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-item__icon">📞</div>
                <div className="info-item__content">
                  <h3>Téléphone</h3>
                  <p>01 23 45 67 89</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-item__icon">✉️</div>
                <div className="info-item__content">
                  <h3>Email</h3>
                  <p>contact@toiletteurpro.fr</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-item__icon">🕒</div>
                <div className="info-item__content">
                  <h3>Horaires</h3>
                  <p>Lundi - Vendredi: 9h - 19h<br />Samedi: 9h - 17h<br />Dimanche: Fermé</p>
                </div>
              </div>
              
              <div className="map-container">
                <div className="map-placeholder">
                  <span>Carte Google Maps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 