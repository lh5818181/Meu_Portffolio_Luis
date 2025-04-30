import React, { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './heroModules.css';
import { initParticles } from './particlesConfig'; // Ajuste na importação

const Hero: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main); // Carrega o mecanismo do tsparticles
  };

  useEffect(() => {
    const loadParticles = async () => {
      await initParticles('tsparticles'); // Chama a função initParticles
    };

    loadParticles();
  }, []);

  return (
    <section className="hero" id="hero">
      <Particles id="tsparticles" init={particlesInit} />
      <div className="hero-container">
        <h1 className="hero-title">
          Transformando ideias em <span className="highlight">interfaces extraordinárias</span>
        </h1>
        <p className="hero-subtitle">
          Explorando a tecnologia através de projetos criativos e inovadores.
        </p>
        <button className="cta-button" aria-label="Entre em contato">
          <a href="#contact">Entre em contato</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;