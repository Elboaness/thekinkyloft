import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(138, 43, 226, 0.3) 0%, rgba(75, 0, 130, 0.5) 100%);
    z-index: -1;
  }
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -2;
`;

const Shape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  filter: blur(50px);
  opacity: 0.4;
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  z-index: 10;
`;

const Tagline = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--light-pink);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: white;
  border: 2px solid var(--secondary-color);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: rgba(255, 105, 180, 0.1);
    transform: translateY(-3px);
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <BackgroundShapes>
        <Shape 
          style={{ 
            width: '300px', 
            height: '300px', 
            top: '20%', 
            left: '10%' 
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <Shape 
          style={{ 
            width: '200px', 
            height: '200px', 
            bottom: '10%', 
            right: '20%' 
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <Shape 
          style={{ 
            width: '150px', 
            height: '150px', 
            bottom: '30%', 
            left: '30%' 
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </BackgroundShapes>
      
      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="neon-text"
        >
          THE KINKY LOFT
        </motion.h1>
        
        <Tagline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Dove la Libertà di Espressione Incontra il Gioco Creativo
        </Tagline>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Entra in un mondo dove i confini sono fatti per essere esplorati,
          la creatività non ha limiti e ogni evento è un'avventura indimenticabile.
        </motion.p>
        
        <ButtonGroup>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link to="/events" className="btn">Esplora gli Eventi</Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <SecondaryButton to="/contact">Prenota lo Spazio</SecondaryButton>
          </motion.div>
        </ButtonGroup>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
