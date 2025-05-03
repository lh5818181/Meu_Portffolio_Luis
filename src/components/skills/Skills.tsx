import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
  FaJs,
  FaReact,
  FaRobot
} from 'react-icons/fa';
import './skills.css';

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 />, level: 90, description: 'Criação de páginas web.' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 85, description: 'Estilização responsiva.' },
  { name: 'Figma', icon: <FaFigma />, level: 40, description: 'Prototipagem de layouts.' },
  { name: 'Bootstrap', icon: <FaBootstrap />, level: 50, description: 'Framework para design responsivo.' },
  { name: 'React', icon: <FaReact />, level: 60, description: 'Projetos dinâmicos.' },
  { name: 'JavaScript', icon: <FaJs />, level: 40, description: 'Validação e interatividade.' },
  { name: 'IA (Básico)', icon: <FaRobot />, level: 60, description: 'Manipulação de ferramentas e IA generativa.' },
];

const Skills: React.FC = () => (
  <section className="skills" id="skills">
    <div className="containerSkills">
      <h2>Minhas Habilidades</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h4>{skill.name}</h4>
            <p>{skill.description}</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skill.level}%` }}>
                <span>{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
