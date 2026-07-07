import React, { useState } from 'react';
import './Contact.css';
import { MapPin, Phone, Mail } from 'lucide-react';

// Número de WhatsApp de Daniel - Cambiar por el número real
const WHATSAPP_NUMBER = '5491112345678'; // Formato: 54 (Argentina) + 9 + código de área + número

// Ícono de WhatsApp como SVG propio
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', model: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola! Me contacto desde la web de Panga.Arg 🚤\n\n` +
      `*Nombre:* ${form.name}\n` +
      `*Modelo de interés:* ${form.model || 'Sin especificar'}\n` +
      `*Mensaje:* ${form.message || 'Quiero recibir más información.'}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="section bg-surface">
      <div className="container">
        <h2 className="section-title">Empezá tu Proyecto</h2>
        <p className="section-subtitle">
          Completá el formulario y te respondemos en minutos por WhatsApp.
        </p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <MapPin className="info-icon" />
              <h3>Ubicación</h3>
              <p>Tigre, Buenos Aires<br/>Argentina</p>
            </div>
            <div className="info-card">
              <Phone className="info-icon" />
              <h3>WhatsApp Directo</h3>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-direct-link"
              >
                <WhatsAppIcon /> Escribinos ahora
              </a>
            </div>
            <div className="info-card">
              <Mail className="info-icon" />
              <h3>Email</h3>
              <p>consultas@panga.arg</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleWhatsApp}>
            <div className="form-group">
              <label htmlFor="name">Tu Nombre *</label>
              <input 
                type="text" 
                id="name" 
                placeholder="¿Cómo te llamás?" 
                required 
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="model">Modelo de Interés</label>
              <input 
                type="text" 
                id="model" 
                placeholder="Ej: Panga Pro 22, Matrix 25..." 
                value={form.model}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea 
                id="message" 
                rows="4" 
                placeholder="¿Qué necesitás saber? Consultá por precio, disponibilidad, medidas..."
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-whatsapp w-100">
              <WhatsAppIcon />
              Enviar por WhatsApp
            </button>
            <p className="form-note">Al hacer clic, se abrirá WhatsApp con tu consulta lista para enviar.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
