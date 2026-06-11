import React, { useState } from 'react';
import './ShopTeaser.css';
import bgImage from '../assets/photo-3.jpg';

export default function ShopTeaser() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Save mock lead to localStorage
    const leads = JSON.parse(localStorage.getItem('vinar_shop_leads') || '[]');
    leads.push({ email, date: new Date().toISOString() });
    localStorage.setItem('vinar_shop_leads', JSON.stringify(leads));

    setSubmitted(true);
    setError('');
    setEmail('');
  };

  return (
    <section id="tienda" className="shop-teaser-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="teaser-overlay"></div>
      <div className="teaser-content container">
        <span className="teaser-subtitle">Tienda VINAR</span>
        <h2 className="teaser-title">De la Araucanía hacia el mundo</h2>
        <div className="title-separator"></div>
        
        <p className="teaser-description">
          Estamos preparando nuestra plataforma exclusiva de comercio electrónico. Muy pronto podrás 
          adquirir los mejores ensambles de clima frío directamente de sus productores, con envíos a 
          todo Chile y mercados internacionales.
        </p>

        {!submitted ? (
          <form className="teaser-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Tu correo electrónico para acceso exclusivo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="teaser-input"
                aria-label="Correo electrónico"
              />
              <button type="submit" className="btn btn-primary teaser-btn">Suscribirse</button>
            </div>
            {error && <p className="form-error">{error}</p>}
          </form>
        ) : (
          <div className="teaser-success animate-fade">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="success-icon"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <p>¡Gracias por tu interés! Te notificaremos en cuanto abramos las puertas de la tienda VINAR.</p>
          </div>
        )}

        <div className="teaser-perks">
          <div className="perk-item">
            <span>📦 Envíos Directos</span>
          </div>
          <div className="perk-item">
            <span>🍷 Ediciones Limitadas</span>
          </div>
          <div className="perk-item">
            <span>👨‍🌾 Trato Justo y Cooperativo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
