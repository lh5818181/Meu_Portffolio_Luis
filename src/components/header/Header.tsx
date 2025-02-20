import React from 'react';
import './headerModules.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Luis Henrique</div>
        <nav className="menu">
          <a href="#hero" className="menu-item">Início</a>
          <a href="#about" className="menu-item">Sobre Mim</a>
          <a href="#skills" className="menu-item">Habilidades</a>
          <a href="#projects" className="menu-item">Projetos</a>
          <a href="#contact" className="menu-item">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
