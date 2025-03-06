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
          <h2>Sobre Mim</h2>
          <h3>Desenvolvedor Full-Stack</h3>
          <p>
            Olá! Sou Luis Henrique Vieira de Oliveira, um desenvolvedor apaixonado por tecnologia, 
            especializado na criação de soluções eficientes e inovadoras. Trabalho com tecnologias 
            modernas para desenvolver aplicações intuitivas e responsivas.
          </p>
          <p>
            Possuo experiência em <strong>React, Node.js, TypeScript</strong>, 
            sempre buscando aprender e aprimorar minhas habilidades.
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
