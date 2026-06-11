import React from 'react';
import './Terroir.css';
import terroirImg from '../assets/photo-7.jpg';

export default function Terroir() {
  return (
    <section id="terroir" className="terroir-section">
      <div className="container">
        <div className="terroir-grid">
          <div className="terroir-content">
            <span className="section-subtitle">Terroir & Filosofía</span>
            <h2 className="terroir-title">Vinos de Frontera e Identidad Austral</h2>
            
            <p className="terroir-intro">
              La Araucanía posee características climáticas y geológicas que desafían las normas tradicionales 
              de la vitivinicultura, permitiendo a la cooperativa VINAR crear vinos verdaderamente excepcionales.
            </p>

            <div className="terroir-features">
              <div className="feature-block">
                <div className="feature-num">01</div>
                <div className="feature-text">
                  <h3>Clima Austral y Frío</h3>
                  <p>
                    Las bajas temperaturas y la oscilación térmica ralentizan la maduración de las uvas, 
                    concentrando aromas intensos y preservando una acidez natural vibrante y refrescante.
                  </p>
                </div>
              </div>

              <div className="feature-block">
                <div className="feature-num">02</div>
                <div className="feature-text">
                  <h3>Suelos Volcánicos y Arcillosos</h3>
                  <p>
                    Nuestros viñedos crecen sobre trumaos y cenizas de volcanes milenarios, 
                    aportando una mineralidad profunda y una complejidad en boca sumamente cotizada.
                  </p>
                </div>
              </div>

              <div className="feature-block">
                <div className="feature-num">03</div>
                <div className="feature-text">
                  <h3>Cepas de Alto Valor Gastronómico</h3>
                  <p>
                    Especialistas en variedades de climas fríos como Pinot Noir, Chardonnay, Sauvignon Blanc 
                    y cepas menos comunes como el Pinot Gris. Vinos pensados para la alta gastronomía mundial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="terroir-visual">
            <div className="image-border-decor"></div>
            <img src={terroirImg} alt="Vinos de la Araucanía Grapes" className="terroir-img" />
            <div className="terroir-experience-badge">
              <h4>Vinos del Fin del Mundo</h4>
              <p>Copas cargadas de lluvia, viento y origen volcánico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
