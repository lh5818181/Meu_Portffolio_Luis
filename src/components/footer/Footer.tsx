import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './footerModules.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 devriqueoliver. Todos os direitos reservados.</p>
        <button className="back-to-top" onClick={scrollToTop} aria-label="Voltar ao topo">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
