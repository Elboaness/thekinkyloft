import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(15, 15, 26, 0.7), rgba(15, 15, 26, 0.8)), url('/images/contact-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 6rem 2rem;
  text-align: center;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-left: 3px solid #ff69b4;
  border-bottom: 3px solid #8a2be2;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    color: white;
    font-family: inherit;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #ff69b4;
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, #8a2be2, #ff69b4);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(138, 43, 226, 0.4);
  width: 100%;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(138, 43, 226, 0.6);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoBlock = styled(motion.div)`
  margin-bottom: 2rem;
  
  h3 {
    color: var(--secondary-color);
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(to right, var(--secondary-color), var(--primary-color));
      border-radius: 2px;
    }
  }
  
  p {
    margin-bottom: 0.5rem;
  }
`;

const MapContainer = styled(motion.div)`
  border-radius: 15px;
  overflow: hidden;
  height: 300px;
  margin-top: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const FAQSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(75, 0, 130, 0.2);
`;

const FAQContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
`;

const FAQQuestion = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: ${props => props.isOpen ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
  
  h4 {
    margin: 0;
  }
  
  .icon {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(45deg)' : 'none'};
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: ${props => props.isOpen ? '1.5rem' : '0 1.5rem'};
  height: ${props => props.isOpen ? 'auto' : '0'};
  opacity: ${props => props.isOpen ? 1 : 0};
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    eventType: ''
  });
  
  const [activeQuestion, setActiveQuestion] = useState(1);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Grazie per il tuo messaggio! Ti risponderemo al più presto.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      eventType: ''
    });
  };
  
  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };
  
  const faqs = [
    {
      id: 1,
      question: "Come posso prenotare The Kinky Loft per un evento privato?",
      answer: "Per prenotare The Kinky Loft per un evento privato, puoi compilare il modulo di contatto in questa pagina con i dettagli sul tipo di evento desiderato e la data. Il nostro coordinatore eventi ti risponderà con informazioni su disponibilità, prezzi e ulteriori dettagli."
    },
    {
      id: 2,
      question: "Che tipo di eventi possono essere ospitati al Kinky Loft?",
      answer: "The Kinky Loft può ospitare una grande varietà di eventi tra cui feste private, workshop, mostre d'arte, performance, servizi fotografici e molto altro. Il nostro spazio versatile si adatta a diverse esigenze mantenendo un'atmosfera creativa e aperta."
    },
    {
      id: 3,
      question: "Offrite opzioni di abbonamento?",
      answer: "Sì, offriamo diversi livelli di abbonamento che forniscono accesso prioritario agli eventi, biglietti scontati, incontri esclusivi per i membri e altri vantaggi. Contattaci direttamente per le opzioni di abbonamento attuali e i relativi benefici."
    },
    {
      id: 4,
      question: "Quali sono le vostre politiche COVID-19?",
      answer: "Seguiamo tutte le linee guida sanitarie locali e adattiamo le nostre politiche di conseguenza. Attualmente, manteniamo protocolli di pulizia avanzati, politiche opzionali sulle mascherine e possiamo regolare i limiti di capacità in base alle raccomandazioni correnti. Per eventi specifici, potrebbero essere in vigore misure aggiuntive."
    },
    {
      id: 5,
      question: "The Kinky Loft è accessibile alle persone con disabilità?",
      answer: "Sì, il nostro locale è accessibile in sedia a rotelle con rampe d'accesso all'ingresso principale e servizi igienici accessibili. Ci impegniamo a rendere il nostro spazio accogliente per tutti. Se hai esigenze di accessibilità specifiche, contattaci in anticipo in modo che possiamo garantire il tuo comfort."
    }
  ];
  
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
            Contattaci
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            Hai domande o desideri prenotare il nostro spazio per il tuo prossimo evento?
            Ci piacerebbe sentirti.
          </motion.p>
        </HeroSection>
        
        <ContactContainer>
          <ContactForm
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <h2>Inviaci un Messaggio</h2>
            <FormField>
              <label htmlFor="name">Il Tuo Nome</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormField>
            
            <FormField>
              <label htmlFor="email">Indirizzo Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormField>
            
            <FormField>
              <label htmlFor="eventType">Interesse</label>
              <select 
                id="eventType" 
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
              >
                <option value="">Seleziona un'opzione</option>
                <option value="general">Richiesta Generale</option>
                <option value="booking">Prenotazione Evento</option>
                <option value="private">Festa Privata</option>
                <option value="membership">Informazioni sull'Abbonamento</option>
                <option value="collaboration">Proposta di Collaborazione</option>
              </select>
            </FormField>
            
            <FormField>
              <label htmlFor="subject">Oggetto</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormField>
            
            <FormField>
              <label htmlFor="message">Il Tuo Messaggio</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </FormField>
            
            <SubmitButton 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Invia Messaggio
            </SubmitButton>
          </ContactForm>
          
          <ContactInfo>
            <div>
              <InfoBlock
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3>Vieni a Trovarci</h3>
                <p>Via Creativa 123</p>
                <p>Quartiere Artistico</p>
                <p>Città Immaginazione, IC 10101</p>
              </InfoBlock>
              
              <InfoBlock
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3>Dettagli di Contatto</h3>
                <p>Email: info@thekinkyloft.com</p>
                <p>Telefono: +1 (555) 123-4567</p>
                <p>Orari: Aperto solo per eventi programmati</p>
              </InfoBlock>
              
              <InfoBlock
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3>Seguici</h3>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <SocialIcon 
                    href="https://instagram.com/thekinkyloft" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </SocialIcon>
                  <SocialIcon 
                    href="https://facebook.com/thekinkyloft" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </SocialIcon>
                  <SocialIcon 
                    href="https://twitter.com/thekinkyloft" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </SocialIcon>
                </div>
              </InfoBlock>
            </div>
            
            <MapContainer
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7034490134283!2d-122.41940958440677!3d37.77492597975874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5158e35!2sMarket%20Street%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2us!4v1633384533317!5m2!1sen!2us" 
                loading="lazy"
                title="Posizione di The Kinky Loft"
              ></iframe>
            </MapContainer>
          </ContactInfo>
        </ContactContainer>
        
        <FAQSection>
          <FAQContainer>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
              Domande Frequenti
            </motion.h2>
            
            {faqs.map(faq => (
              <FAQItem
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FAQQuestion 
                  onClick={() => toggleQuestion(faq.id)}
                  isOpen={activeQuestion === faq.id}
                >
                  <h4>{faq.question}</h4>
                  <div className="icon">+</div>
                </FAQQuestion>
                
                <FAQAnswer isOpen={activeQuestion === faq.id}>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeQuestion === faq.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                </FAQAnswer>
              </FAQItem>
            ))}
          </FAQContainer>
        </FAQSection>
      </PageContainer>
    </motion.div>
  );
};

export default ContactPage;
