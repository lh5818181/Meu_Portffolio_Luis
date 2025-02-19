import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp} from 'react-icons/fa6';
import './footerModules.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>&copy; 2025 Luis Henrique Vieira de Oliveira. Todos os direitos reservados.</p>

        <div className="social-icons">
          <a href="https://github.com/lh5818181" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/luis-henrique-76245231a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/devriqueoliver/?next=%2F" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
