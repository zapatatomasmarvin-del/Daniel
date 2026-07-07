import React from 'react';
import './Footer.css';
import { Anchor, Mail } from 'lucide-react';

// Ícono de Instagram como SVG propio (evita depender de versiones de lucide-react)
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/#home" className="logo" style={{color: '#fff'}}>
              <Anchor className="logo-icon" />
              <span>Panga.Arg</span>
            </a>
            <p className="footer-desc">
              Excelencia en matrices y embarcaciones desde Tigre para todo el país.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Navegación</h4>
            <ul>
              <li><a href="/#home">Inicio</a></li>
              <li><a href="/#models">Modelos</a></li>
              <li><a href="/#about">Astillero</a></li>
              <li><a href="/#contact">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Seguinos</h4>
            <div className="social-icons">
              <a href="mailto:consultas@panga.arg" className="social-link" aria-label="Email"><Mail /></a>
              <a href="https://instagram.com/panga.arg" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><InstagramIcon /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Panga.Arg. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
