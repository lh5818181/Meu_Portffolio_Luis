import React from 'react';
import './projects.css';

const projectsData = [
  {
    title: 'Landing Page Áurea Financeira',
    description: 'Landing page de vendas desenvolvida com React, TypeScript e Vite.',
    image: 'https://raw.githubusercontent.com/lh5818181/SERVIDOR-ESTATICO-IMAGENS/refs/heads/main/AUREA%20FINANCEIRA.png',
    link: 'https://landing-page-aurea-financeira.vercel.app/'
  },
  {
    title: 'Calculadora Aritmética',
    description: 'Calculadora desenvolvida com React e gráficos dinâmicos.',
    image: 'https://raw.githubusercontent.com/lh5818181/SERVIDOR-ESTATICO-IMAGENS/refs/heads/main/calculadora.png',
    link: 'https://calculadora-aritimetica-vue-js-nu.vercel.app'
  },
  {
    title: 'Lista de Contatos',
    description: 'Lista de contatos desenvolvida com React e TypeScript.',
    image: 'https://raw.githubusercontent.com/lh5818181/SERVIDOR-ESTATICO-IMAGENS/refs/heads/main/Lista%20de%20contatos%20react.png',
    link: 'https://lista-contatos-react-five.vercel.app/'
  }
];

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <div className="containerProject">
        <h2>Meus Projetos</h2>
        <p>Confira alguns dos projetos que desenvolvi.</p>
        <div className="project-list">
          {projectsData.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
