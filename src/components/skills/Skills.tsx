import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaFigma, FaJs, FaReact } from 'react-icons/fa';
import './skills.css';

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 />, description: 'Criação de páginas web.' },
  { name: 'CSS3', icon: <FaCss3Alt />, description: 'Estilização responsiva.' },
  { name: 'Figma', icon: <FaFigma />, description: 'Prototipagem de layouts.' },
  { name: 'Bootstrap', icon: <FaBootstrap />, description: 'Framework para design responsivo.' },
  { name: 'React', icon: <FaReact />, description: 'Projetos dinâmicos' },
  { name: 'JavaScript', icon: <FaJs />, description: 'Validação e interatividade.' },
];

const Skills: React.FC = () => {
  return (
    <section className="skills" id="skills">
      <div className="containerSkills">
        <h2>Minhas Habilidades</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
