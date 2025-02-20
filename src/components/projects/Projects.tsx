import React from 'react';
import './projects.css';

const projectsData = [
  {
    title: 'Landing Page HTML & CSS',
    description: 'Uma landing page responsiva desenvolvida com HTML, CSS e Bootstrap.',
    image: '/src/public/images/Landingpage para evento.png',
    link: 'https://aniversario-luis-lvux.vercel.app'
  },
  {
    title: 'Calculadora Aritmética',
    description: 'Calculadora desenvolvida com React e gráficos dinâmicos.',
    image: '/src/public/images/Calculadora Aritmética.png',
    link: 'https://calculadora-aritimetica-vue-js-nu.vercel.app'
  },
  {
    title: 'Clone do Site da Disney',
    description: 'Desenvolvido com HTML, CSS e JAVASCRIPT',
    image: 'https://raw.githubusercontent.com/lh5818181/Repositorioi_imagens_sitePrincipal/refs/heads/main/clone%20da%20disney.png',
    link: 'https://clone-disney-plus-2wds.vercel.app'
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
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-project">
                Ver Projeto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
