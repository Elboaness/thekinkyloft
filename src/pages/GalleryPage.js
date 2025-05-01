import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(15, 15, 26, 0.7), rgba(15, 15, 26, 0.8)), url('/images/gallery-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 6rem 2rem;
  text-align: center;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem;
    color: white;
    z-index: 2;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
  }
  
  &:hover .overlay {
    opacity: 1;
    transform: translateY(0);
  }
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

const Lightbox = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  .lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90vh;
    
    img {
      max-width: 100%;
      max-height: 80vh;
      object-fit: contain;
    }
    
    .caption {
      color: white;
      margin-top: 1rem;
      text-align: center;
    }
  }
  
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #ff69b4;
      transform: rotate(90deg);
    }
  }
  
  .nav {
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: translateY(-50%);
    
    &:hover {
      background: rgba(255, 105, 180, 0.7);
    }
    
    &.prev {
      left: 20px;
    }
    
    &.next {
      right: 20px;
    }
  }
`;

const galleryItems = [
  {
    id: 1,
    image: '/images/gallery-1.jpg',
    title: 'Ballo in Maschera 2022',
    category: 'party'
  },
  {
    id: 2,
    image: '/images/gallery-2.jpg',
    title: 'Mostra di Body Art',
    category: 'art'
  },
  {
    id: 3,
    image: '/images/gallery-3.jpg',
    title: 'Festa Sogni al Neon',
    category: 'party'
  },
  {
    id: 4,
    image: '/images/gallery-4.jpg',
    title: 'Installazione Arte con la Corda',
    category: 'art'
  },
  {
    id: 5,
    image: '/images/gallery-5.jpg',
    title: 'Serata Performance Burlesque',
    category: 'performance'
  },
  {
    id: 6,
    image: '/images/gallery-6.jpg',
    title: 'Halloween Carnevale Oscuro',
    category: 'party'
  },
  {
    id: 7,
    image: '/images/gallery-7.jpg',
    title: 'Workshop Sensoriale',
    category: 'workshop'
  },
  {
    id: 8,
    image: '/images/gallery-8.jpg',
    title: 'Performance di Danza del Fuoco',
    category: 'performance'
  },
  {
    id: 9,
    image: '/images/gallery-9.jpg',
    title: 'Ballo del Paese delle Meraviglie Invernali',
    category: 'party'
  },
  {
    id: 10,
    image: '/images/gallery-10.jpg',
    title: 'Installazione Arte Interattiva',
    category: 'art'
  },
  {
    id: 11,
    image: '/images/gallery-11.jpg',
    title: 'Workshop di Movimento',
    category: 'workshop'
  },
  {
    id: 12,
    image: '/images/gallery-12.jpg',
    title: 'Celebrazione del Solstizio d\'Estate',
    category: 'party'
  }
];

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const filteredGallery = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);
  
  const openLightbox = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };
  
  const navigateImage = (direction) => {
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(galleryItems[newIndex]);
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
            La Nostra Galleria
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            Un viaggio visivo attraverso i nostri eventi passati e momenti memorabili.
            Esplora il vivace mondo di The Kinky Loft attraverso la nostra galleria curata con cura.
          </motion.p>
        </HeroSection>
        
        <section>
          <FilterContainer>
            <FilterButton 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
            >
              Tutte le Foto
            </FilterButton>
            <FilterButton 
              active={filter === 'party'} 
              onClick={() => setFilter('party')}
            >
              Feste
            </FilterButton>
            <FilterButton 
              active={filter === 'art'} 
              onClick={() => setFilter('art')}
            >
              Arte
            </FilterButton>
            <FilterButton 
              active={filter === 'performance'} 
              onClick={() => setFilter('performance')}
            >
              Performance
            </FilterButton>
            <FilterButton 
              active={filter === 'workshop'} 
              onClick={() => setFilter('workshop')}
            >
              Workshop
            </FilterButton>
          </FilterContainer>
          
          <GalleryGrid>
            <AnimatePresence>
              {filteredGallery.map((item, index) => (
                <GalleryItem
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => openLightbox(item)}
                  layout
                >
                  <img src={item.image} alt={item.title} />
                  <div className="overlay">
                    <h3>{item.title}</h3>
                  </div>
                </GalleryItem>
              ))}
            </AnimatePresence>
          </GalleryGrid>
        </section>
        
        <AnimatePresence>
          {selectedImage && (
            <Lightbox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div 
                className="lightbox-content"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={selectedImage.image} alt={selectedImage.title} />
                <div className="caption">
                  <h3>{selectedImage.title}</h3>
                </div>
              </motion.div>
              
              <div className="close" onClick={closeLightbox}>×</div>
              
              <div className="nav prev" onClick={() => navigateImage('prev')}>
                &#10094;
              </div>
              <div className="nav next" onClick={() => navigateImage('next')}>
                &#10095;
              </div>
            </Lightbox>
          )}
        </AnimatePresence>
      </PageContainer>
    </motion.div>
  );
};

export default GalleryPage;
