import React from 'react';
import './About.css';
import { ShieldCheck, Anchor, Wrench } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src="/shipyard.png" alt="Astillero Panga.Arg en Tigre" />
            <div className="experience-badge">
              <span className="years">+20</span>
              <span className="text">Años de<br/>Experiencia</span>
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="section-title" style={{textAlign: 'left'}}>Maestría Naval en Tigre</h2>
            <p className="about-text">
              Ubicados en el corazón del Delta, en Panga.Arg combinamos la tradición naval argentina con las tecnologías más modernas en fabricación de matrices y cascos de fibra de vidrio. 
            </p>
            <p className="about-text">
              Bajo la dirección de Daniel, nuestro astillero se enorgullece de entregar embarcaciones que destacan por su seguridad, eficiencia hidrodinámica y acabados premium. Cada matriz es una obra de ingeniería diseñada para conquistar las aguas.
            </p>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon"><ShieldCheck /></div>
                <div className="feature-text">
                  <h4>Construcción Sólida</h4>
                  <p>Materiales de primera calidad para máxima durabilidad.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Anchor /></div>
                <div className="feature-text">
                  <h4>Diseño Hidrodinámico</h4>
                  <p>Navegación suave y eficiente consumo de combustible.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Wrench /></div>
                <div className="feature-text">
                  <h4>Matrices de Precisión</h4>
                  <p>Desarrollo a medida con tolerancias milimétricas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
