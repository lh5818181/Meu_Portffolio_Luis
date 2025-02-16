import React from 'react';
import './aboutModules.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <img
          src="https://github.com/lh5818181.png"
          alt="Luis Henrique Vieira de Oliveira - Foto de perfil"
          className="about-img"
        />
        <div className="about-content">
          <h2>Luis Henrique Vieira de Oliveira</h2>
          <p>
            Sou um desenvolvedor full-stack apaixonado por tecnologia e inovação. 
            Meu foco é criar experiências digitais intuitivas e funcionais, unindo 
            design e código de forma eficiente.
          </p>
          <a 
            href="https://main.d3e1i5z5vdswnl.amplifyapp.com/" 
            className="btn-saiba-mais" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
