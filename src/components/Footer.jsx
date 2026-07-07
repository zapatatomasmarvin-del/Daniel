import React from 'react';
import './Footer.css';
import { Anchor, Mail, Instagram } from 'lucide-react';

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
              <a href="https://instagram.com/panga.arg" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><Instagram /></a>
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
