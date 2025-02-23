import React, { useState } from 'react'; // Adicionada importação do useState
import './headerModules.css';

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false); // Adicionada declaração do estado do menu

  const toggleMenu = () => {
    setMenuActive(!menuActive); // Função para alternar o estado do menu
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Luis Henrique</div>
        <nav className={`menu ${menuActive ? 'active' : ''}`}> {/* Alteração para adicionar classe 'active' */}
          <a href="#hero" className="menu-item">Início</a>
          <a href="#about" className="menu-item">Sobre Mim</a>
          <a href="#skills" className="menu-item">Habilidades</a>
          <a href="#projects" className="menu-item">Projetos</a>
          <a href="#contact" className="menu-item">Contato</a>
        </nav>
        <div className="hamburger" onClick={toggleMenu}> {/* Adicionado botão de hambúrguer */}
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
