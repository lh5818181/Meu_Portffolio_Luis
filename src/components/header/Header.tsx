import React, { useState, useEffect } from 'react';
import './headerModules.css';

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'hero';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute('id') || 'hero';
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">devriqueoliver</div>
        <nav className={`menu ${menuActive ? 'active' : ''}`}>
          <ul>
            <li><a href="#hero"    className={activeSection==='hero'   ? 'active':''}>Início</a></li>
            <li><a href="#about"   className={activeSection==='about'  ? 'active':''}>Sobre Mim</a></li>
            <li><a href="#skills"  className={activeSection==='skills' ? 'active':''}>Habilidades</a></li>
            <li><a href="#projects"className={activeSection==='projects'?'active':''}>Projetos</a></li>
            <li><a href="#contact" className={activeSection==='contact'?'active':''}>Contato</a></li>
          </ul>
        </nav>
        <div className={`hamburger ${menuActive ? 'open' : ''}`} onClick={toggleMenu}>
          <div></div><div></div><div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
