import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2>Benvenuti a The Kinky Loft</h2>
          <p>
            Dove la creatività incontra l'espressione in uno spazio progettato per i coraggiosi e i curiosi. 
            The Kinky Loft è più di un semplice luogo—è un santuario per coloro che cercano di 
            esplorare i propri confini artistici e connettersi con persone che la pensano allo stesso modo.
          </p>
          <p>
            I nostri eventi celebrano la diversità, l'espressione di sé e la gioia di lasciarsi andare in un 
            ambiente sicuro e consensuale. Da feste a tema a workshop, da performance a 
            incontri privati, il nostro spazio si trasforma per accogliere le tue fantasie più selvagge.
          </p>
        </div>
      </motion.section>
      
      <motion.section 
        className="section"
        style={{ background: 'rgba(75, 0, 130, 0.2)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2>Prossimi Eventi</h2>
          <Timeline />
        </div>
      </motion.section>
      
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2>Scopri la Differenza</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
            <FeatureCard
              icon="🎭"
              title="Espressione Creativa"
              description="Libertà di essere il tuo vero io in un ambiente senza giudizi"
            />
            <FeatureCard
              icon="🔒"
              title="Spazio Sicuro"
              description="Rigorosi protocolli e personale addestrato garantiscono il comfort e la sicurezza di tutti"
            />
            <FeatureCard
              icon="✨"
              title="Eventi Unici"
              description="Esperienze uniche che non troverai da nessun'altra parte"
            />
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

const FeatureCard = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
  whileHover: { y: -10 }
}))`
  flex: 1;
  min-width: 250px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-left: 3px solid #ff69b4;
  border-bottom: 3px solid #8a2be2;
  
  .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-color);
    opacity: 0.9;
  }
`;

export default HomePage;
