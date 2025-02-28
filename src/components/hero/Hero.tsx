import React from 'react';
import './heroModules.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <p>Explorando a tecnologia através de projetos criativos e inovadores.</p>
        <button className="cta-button" aria-label="Entre em contato">
          <a href="#contact">Entre em contato</a>
          </button>
      </div>
    </section>
  );
};

export default Hero;
