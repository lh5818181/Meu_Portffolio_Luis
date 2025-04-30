import React from 'react';
import './aboutModules.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://github.com/lh5818181.png"
            alt="Luis Henrique Vieira de Oliveira - Foto de perfil"
            className="about-img"
          />
        </div>
        <div className="about-content">
          <h2>Explorando Possibilidades</h2>
          <h3>Construindo Experiências</h3>
          <p>
            Eu sou Luis Henrique, também conhecido como <strong>devriqueoliver</strong>. 
            Crio interfaces visionárias que unem design, propósito e tecnologia. 
            Meu foco está em entregar experiências interativas que comunicam valor, com visual impactante e execução precisa.
          </p>
          <p>
            Utilizo ferramentas como <strong>React, TypeScript e Node.js</strong> para transformar ideias em aplicações elegantes, performáticas e modernas.
            Minha stack não é só código — é identidade digital.
          </p>
          <a 
            href="https://main.d3q0n8jgkd43rl.amplifyapp.com/" 
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
