import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: linear-gradient(to top, rgba(15, 15, 26, 1), rgba(15, 15, 26, 0.9));
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color), var(--primary-color));
    z-index: 1;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FooterSection = styled(motion.div)`
  flex: 1;
  min-width: 250px;
  margin-bottom: 2rem;

  h3 {
    position: relative;
    display: inline-block;
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(to right, var(--secondary-color), var(--primary-color));
      border-radius: 2px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--secondary-color);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    transform: translateY(-3px);
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3>The Kinky Loft</h3>
          <p>Dove la libertà di espressione incontra il gioco creativo. Un luogo unico per chi osa esplorare e connettersi.</p>
          <SocialLinks>
            <SocialIcon 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-instagram"></i>
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-twitter"></i>
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Link Rapidi</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Chi Siamo</Link></li>
            <li><Link to="/events">Eventi</Link></li>
            <li><Link to="/gallery">Galleria</Link></li>
            <li><Link to="/contact">Contatti</Link></li>
          </ul>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Posizione</h3>
          <p>Via Creativa 123</p>
          <p>Quartiere Artistico</p>
          <p>Città Immaginazione, IC 10101</p>
          <p>Email: info@thekinkyloft.com</p>
          <p>Telefono: +1 (555) 123-4567</p>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Newsletter</h3>
          <p>Iscriviti per rimanere aggiornato sui nostri eventi e annunci speciali.</p>
          <form style={{ marginTop: '1rem' }}>
            <input 
              type="email" 
              placeholder="La tua email" 
              style={{ 
                padding: '0.8rem', 
                width: '100%', 
                borderRadius: '5px',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                marginBottom: '0.5rem'
              }} 
            />
            <button 
              type="submit" 
              className="btn" 
              style={{ width: '100%' }}
            >
              Iscriviti
            </button>
          </form>
        </FooterSection>
      </FooterContent>

      <BottomBar>
        <p>&copy; {new Date().getFullYear()} The Kinky Loft. Tutti i diritti riservati. | <Link to="/privacy" style={{ color: 'inherit' }}>Privacy Policy</Link> | <Link to="/terms" style={{ color: 'inherit' }}>Termini di Servizio</Link></p>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
