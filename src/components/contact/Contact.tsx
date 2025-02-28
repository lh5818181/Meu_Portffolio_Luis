import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane, FaTag } from 'react-icons/fa';
import './contactModules.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="containerContact">
        <h2>Entre em Contato</h2>
        <p>Preencha o formulário abaixo para me enviar uma mensagem.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="icon" />
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Seu Nome" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Seu Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group">
            <FaTag className="icon" />
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              placeholder="Assunto (Opcional)" 
              value={formData.subject} 
              onChange={handleChange} 
            />
          </div>

          <div className="input-group">
            <textarea 
              id="message" 
              name="message" 
              placeholder="Digite sua mensagem..." 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>

          <button type="submit">
            <FaPaperPlane /> Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
