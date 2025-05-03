import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './contactModules.css';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="containerContact">
        <h2>Entre em Contato</h2>
        <p>Conecte-se comigo através das redes sociais abaixo.</p>
        <div className="social-icons">
          <a
            href="https://github.com/lh5818181"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-henrique-76245231a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/devriqueoliver/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/5581999429143"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
