import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(15, 15, 26, 0.7), rgba(15, 15, 26, 0.8)), url('/images/events-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 6rem 2rem;
  text-align: center;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  padding: 0 1rem;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'linear-gradient(45deg, #ff69b4, #8a2be2)' : 'rgba(255, 255, 255, 0.1)'};
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'linear-gradient(45deg, #ff69b4, #8a2be2)' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-3px);
  }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EventCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  
  .image-container {
    height: 200px;
    overflow: hidden;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background: linear-gradient(to top, rgba(15, 15, 26, 0.9), transparent);
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }
  
  &:hover .image-container img {
    transform: scale(1.1);
  }
  
  .content {
    padding: 1.5rem;
  }
  
  .date {
    display: inline-block;
    background: linear-gradient(45deg, #ff69b4, #8a2be2);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  h3 {
    margin-bottom: 1rem;
    color: white;
    font-size: 1.5rem;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
  }
  
  .tag {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    padding: 0.3rem 1rem;
    font-size: 0.8rem;
  }
`;

const ReadMoreButton = styled(Link)`
  display: inline-block;
  background: transparent;
  color: #ff69b4;
  text-decoration: none;
  padding: 0.5rem 0;
  font-weight: 600;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #ff69b4, #8a2be2);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const LoadMoreButton = styled(motion.button)`
  display: block;
  margin: 3rem auto;
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
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(138, 43, 226, 0.6);
  }
`;

const events = [
  {
    id: 1,
    title: 'Notte in Maschera',
    description: 'Una serata elegante di mistero e fascino. Maschere obbligatorie, identità opzionali. Esplora connessioni basate puramente su energia e chimica.',
    date: '15 Maggio 2023',
    image: '/images/event-1.jpg',
    category: 'party',
    tags: ['Mascherata', 'Festa', 'Danza']
  },
  {
    id: 2,
    title: 'Esposizione Body Art',
    description: 'Una celebrazione del corpo umano come tela con body painting dal vivo, performance e installazioni interattive che esplorano la relazione tra arte e forma fisica.',
    date: '20 Giugno 2023',
    image: '/images/event-2.jpg',
    category: 'art',
    tags: ['Arte', 'Mostra', 'Performance']
  },
  {
    id: 3,
    title: 'Parco Sensoriale',
    description: 'Un\'esperienza immersiva progettata per risvegliare e stuzzicare tutti e cinque i sensi attraverso stazioni accuratamente curate, texture, profumi, suoni, sapori e immagini.',
    date: '8 Luglio 2023',
    image: '/images/event-3.jpg',
    category: 'workshop',
    tags: ['Interattivo', 'Sensoriale', 'Esperienza']
  },
  {
    id: 4,
    title: 'Sogni al Neon',
    description: 'Una festa con luci nere dove body painting fluorescenti e outfit vibranti creano un\'atmosfera surreale. Balla, connettiti e diventa arte vivente nel nostro spazio trasformato.',
    date: '12 Agosto 2023',
    image: '/images/event-4.jpg',
    category: 'party',
    tags: ['Festa', 'Luci Nere', 'Danza']
  },
  {
    id: 5,
    title: 'Spettacolo Burlesque',
    description: 'Una notte di performance burlesque classiche e neo-burlesque che celebrano l\'arte della seduzione, con artisti professionisti e coraggiosi volontari.',
    date: '5 Settembre 2023',
    image: '/images/event-5.jpg',
    category: 'performance',
    tags: ['Burlesque', 'Performance', 'Danza']
  },
  {
    id: 6,
    title: 'Carnevale Oscuro',
    description: 'Un evento speciale per Halloween con artisti circensi, chiromanti ed esperienze mistiche. Vieni vestito con il tuo costume più fantasioso.',
    date: '31 Ottobre 2023',
    image: '/images/event-6.jpg',
    category: 'party',
    tags: ['Halloween', 'Carnevale', 'Costumi']
  },
  {
    id: 7,
    title: 'Workshop di Arte con la Corda',
    description: 'Impara l\'arte della legatura decorativa da praticanti esperti in un ambiente educativo e di supporto, incentrato sulla sicurezza e sulla creatività.',
    date: '15 Novembre 2023',
    image: '/images/event-7.jpg',
    category: 'workshop',
    tags: ['Workshop', 'Educativo', 'Arte']
  },
  {
    id: 8,
    title: 'Ballo del Paese delle Meraviglie Invernali',
    description: 'Una serata elegante di sofisticazione con un tocco diverso. Abbigliamento formale con interpretazioni creative incoraggiate per questa celebrazione di fine anno.',
    date: '20 Dicembre 2023',
    image: '/images/event-8.jpg',
    category: 'party',
    tags: ['Ballo', 'Formale', 'Inverno']
  }
];

const EventsPage = () => {
  const [filter, setFilter] = useState('all');
  const [visibleEvents, setVisibleEvents] = useState(6);
  
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);
  
  const loadMore = () => {
    setVisibleEvents(prevVisible => prevVisible + 3);
  };
  
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
            Prossimi Eventi
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            Scopri il nostro calendario di esperienze uniche progettate per ispirare,
            connettere e trasportarti oltre l'ordinario.
          </motion.p>
        </HeroSection>
        
        <section className="container">
          <FilterContainer>
            <FilterButton 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
            >
              Tutti gli Eventi
            </FilterButton>
            <FilterButton 
              active={filter === 'party'} 
              onClick={() => setFilter('party')}
            >
              Feste
            </FilterButton>
            <FilterButton 
              active={filter === 'workshop'} 
              onClick={() => setFilter('workshop')}
            >
              Workshop
            </FilterButton>
            <FilterButton 
              active={filter === 'performance'} 
              onClick={() => setFilter('performance')}
            >
              Performance
            </FilterButton>
            <FilterButton 
              active={filter === 'art'} 
              onClick={() => setFilter('art')}
            >
              Eventi Artistici
            </FilterButton>
          </FilterContainer>
          
          <EventsGrid>
            <AnimatePresence>
              {filteredEvents.slice(0, visibleEvents).map((event, index) => (
                <EventCard
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="image-container">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="content">
                    <span className="date">{event.date}</span>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <div className="tags">
                      {event.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                    <ReadMoreButton to={`/events/${event.id}`}>Leggi di più &rarr;</ReadMoreButton>
                  </div>
                </EventCard>
              ))}
            </AnimatePresence>
          </EventsGrid>
          
          {visibleEvents < filteredEvents.length && (
            <LoadMoreButton
              onClick={loadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Carica Altri Eventi
            </LoadMoreButton>
          )}
        </section>
      </PageContainer>
    </motion.div>
  );
};

export default EventsPage;
