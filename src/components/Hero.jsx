import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content fade-in">
        <span className="hero-subtitle">Hecho en Tigre, Argentina</span>
        <h1 className="hero-title">Navegá hacia la <span>Excelencia</span></h1>
        <p className="hero-description">
          Construimos matrices y embarcaciones deportivas con los más altos estándares de calidad y diseño minimalista.
        </p>
        <div className="hero-cta">
          <a href="#models" className="btn btn-primary">
            Ver Modelos <ArrowRight size={18} className="ml-2 inline-block" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
