import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(15, 15, 26, 0.8), rgba(15, 15, 26, 0.9)), url('/images/about-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, rgba(15, 15, 26, 1), transparent);
  }
`;

const ContentSection = styled.section`
  padding: 4rem 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-left: 3px solid #ff69b4;
  border-bottom: 3px solid #8a2be2;
`;

const TeamSection = styled.section`
  background: rgba(75, 0, 130, 0.2);
  padding: 4rem 2rem;
`;

const TeamMember = styled(motion.div)`
  text-align: center;
  
  .image-container {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 1.5rem;
    border: 3px solid;
    border-image: linear-gradient(45deg, #ff69b4, #8a2be2) 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  h3 {
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
  }
  
  .role {
    color: var(--light-pink);
    font-style: italic;
    margin-bottom: 1rem;
  }
`;

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageContainer>
        <HeroSection>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Chi Siamo - The Kinky Loft
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            Uno spazio creativo dove i confini vengono esplorati, le connessioni si formano e 
            l'espressione è celebrata in tutte le sue forme.
          </motion.p>
        </HeroSection>
        
        <ContentSection className="container">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            La Nostra Storia
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p>
              The Kinky Loft è nato da una visione di creare un santuario dove le persone potessero 
              esplorare i propri impulsi creativi senza giudizio o restrizione. Ciò che è iniziato come 
              incontri intimi tra amici si è evoluto in uno spazio dedicato all'espressione artistica, 
              all'esplorazione dei confini e alla costruzione di una comunità.
            </p>
            <p>
              Il nostro fondatore, ispirato da spazi artistici non convenzionali a Berlino e New York, 
              ha trasformato questo loft industriale in un luogo versatile che si adatta alle esigenze 
              di ogni evento unico. Dall'apertura delle nostre porte nel 2019, abbiamo ospitato centinaia di 
              eventi che vanno dalle performance artistiche ai workshop educativi e feste a tema.
            </p>
            <p>
              Crediamo nel promuovere una cultura di consenso, rispetto e comunicazione aperta, 
              permettendo ai nostri ospiti di esplorare in sicurezza le loro curiosità ed esprimersi 
              autenticamente.
            </p>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ marginTop: '4rem' }}
          >
            I Nostri Valori Fondamentali
          </motion.h2>
          
          <Grid>
            <Card
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Libertà di Espressione</h3>
              <p>
                Forniamo una tela per permettere alle persone di esprimersi senza vincoli sociali, 
                celebrando la diversità della creatività e della passione umana.
              </p>
            </Card>
            
            <Card
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Consenso e Rispetto</h3>
              <p>
                Tutti i nostri eventi operano con rigorosi protocolli di consenso, garantendo che tutti si sentano 
                sicuri e rispettati mentre esplorano i propri limiti.
              </p>
            </Card>
            
            <Card
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Costruire una Comunità</h3>
              <p>
                The Kinky Loft è più di un semplice luogo—è una comunità di individui dalla mentalità aperta 
                che si connettono attraverso esperienze condivise e rispetto reciproco.
              </p>
            </Card>
            
            <Card
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>Innovazione Creativa</h3>
              <p>
                Spingiamo costantemente i confini con concetti di eventi innovativi che fondono arte, 
                performance, educazione e gioco in modi inaspettati.
              </p>
            </Card>
          </Grid>
        </ContentSection>
        
        <TeamSection>
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
              Le Menti Dietro la Magia
            </motion.h2>
            
            <Grid>
              <TeamMember
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="image-container">
                  <img src="/images/team-1.jpg" alt="Membro del Team" />
                </div>
                <h3>Alex Rivera</h3>
                <div className="role">Fondatore e Direttore Creativo</div>
                <p>
                  Con un background nella performance art e nella produzione di eventi, Alex ha creato The Kinky Loft
                  per colmare il divario tra l'espressione artistica e l'esplorazione intima.
                </p>
              </TeamMember>
              
              <TeamMember
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="image-container">
                  <img src="/images/team-2.jpg" alt="Membro del Team" />
                </div>
                <h3>Morgan Chen</h3>
                <div className="role">Coordinatore Eventi</div>
                <p>
                  L'eccezionale talento di Morgan per curare esperienze dà vita ai nostri eventi,
                  assicurando che ogni incontro abbia la sua atmosfera ed energia uniche.
                </p>
              </TeamMember>
              
              <TeamMember
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="image-container">
                  <img src="/images/team-3.jpg" alt="Membro del Team" />
                </div>
                <h3>Jordan Taylor</h3>
                <div className="role">Community Manager</div>
                <p>
                  Come nostro responsabile della comunità, Jordan garantisce che chiunque entri nel nostro spazio si senta
                  accolto, informato e supportato durante tutta l'esperienza.
                </p>
              </TeamMember>
            </Grid>
          </div>
        </TeamSection>
      </PageContainer>
    </motion.div>
  );
};

export default AboutPage;
