import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 10px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  margin-bottom: 60px;
  
  ${props => props.position === 'left' ? 'left: 0;' : 'left: 50%;'}
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 20px;
    left: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -12px;
    top: 15px;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--secondary-color), var(--primary-color));
    box-shadow: 0 0 15px var(--secondary-color);
    z-index: 1;
    
    ${props => props.position === 'right' ? 'left: -12px;' : ''}
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-left: 4px solid ${props => props.position === 'left' ? 'var(--secondary-color)' : 'var(--primary-color)'};
  position: relative;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
`;

const EventDate = styled.span`
  display: inline-block;
  font-weight: 700;
  background: linear-gradient(to right, var(--secondary-color), var(--primary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

const EventTitle = styled.h3`
  margin: 0 0 10px 0;
  color: white;
  font-size: 1.4rem;
`;

const EventTag = styled.span`
  display: inline-block;
  background: ${props => props.color};
  color: white;
  padding: 3px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const events = [
  {
    date: 'May 15, 2023',
    title: 'Masquerade Night',
    description: 'An elegant evening of mystery and allure. Masks are mandatory, identities optional.',
    tags: ['Party', 'Masquerade'],
    position: 'left'
  },
  {
    date: 'June 20, 2023',
    title: 'Body Art Exposition',
    description: 'Live performances and exhibitions celebrating the human form as a canvas.',
    tags: ['Art', 'Exhibition'],
    position: 'right'
  },
  {
    date: 'July 8, 2023',
    title: 'Sensory Playground',
    description: 'An interactive experience exploring all five senses through various installations.',
    tags: ['Interactive', 'Experience'],
    position: 'left'
  },
  {
    date: 'August 12, 2023',
    title: 'Neon Dreams',
    description: 'A blacklight party where fluorescent body paint and vibrant outfits create a surreal atmosphere.',
    tags: ['Party', 'Blacklight'],
    position: 'right'
  },
  {
    date: 'September 5, 2023',
    title: 'Burlesque Showcase',
    description: 'A night of classic and neo-burlesque performances celebrating the art of the tease.',
    tags: ['Performance', 'Dance'],
    position: 'left'
  },
  {
    date: 'October 31, 2023',
    title: 'Dark Carnival',
    description: 'A Halloween special event featuring circus performers, fortune tellers, and mystical experiences.',
    tags: ['Halloween', 'Carnival'],
    position: 'right'
  }
];

const tagColors = {
  'Festa': 'rgba(255, 105, 180, 0.8)',
  'Mascherata': 'rgba(138, 43, 226, 0.8)',
  'Arte': 'rgba(75, 0, 130, 0.8)',
  'Mostra': 'rgba(199, 21, 133, 0.8)',
  'Interattivo': 'rgba(218, 112, 214, 0.8)',
  'Esperienza': 'rgba(153, 50, 204, 0.8)',
  'Luci Nere': 'rgba(186, 85, 211, 0.8)',
  'Performance': 'rgba(221, 160, 221, 0.8)',
  'Danza': 'rgba(255, 0, 255, 0.8)',
  'Halloween': 'rgba(139, 0, 139, 0.8)',
  'Carnevale': 'rgba(148, 0, 211, 0.8)'
};

const Timeline = () => {
  const [itemsInView, setItemsInView] = useState({});
  
  // Create individual ref hooks for each event at the top level
  const [ref0, inView0] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  // Create an array of refs and inView values that we can map over
  const refs = [
    { ref: ref0, inView: inView0 },
    { ref: ref1, inView: inView1 },
    { ref: ref2, inView: inView2 },
    { ref: ref3, inView: inView3 },
    { ref: ref4, inView: inView4 },
    { ref: ref5, inView: inView5 },
  ];
  
  // Update itemsInView when any of the inView values change
  useEffect(() => {
    const newItemsInView = {};
    [inView0, inView1, inView2, inView3, inView4, inView5].forEach((inView, index) => {
      if (inView) {
        newItemsInView[index] = true;
      }
    });
    
    setItemsInView(prev => ({ ...prev, ...newItemsInView }));
  }, [inView0, inView1, inView2, inView3, inView4, inView5]);

  return (
    <TimelineContainer>
      {events.map((event, index) => {
        const { ref } = refs[index];
        
        return (
          <TimelineItem 
            key={index}
            position={event.position}
            ref={ref}
            initial={{ opacity: 0, x: event.position === 'left' ? -50 : 50 }}
            animate={itemsInView[index] ? { opacity: 1, x: 0 } : { opacity: 0, x: event.position === 'left' ? -50 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TimelineContent position={event.position}>
              <EventDate>{event.date}</EventDate>
              <EventTitle>{event.title}</EventTitle>
              <p>{event.description}</p>
              <div>
                {event.tags.map((tag, idx) => (
                  <EventTag key={idx} color={tagColors[tag] || 'rgba(138, 43, 226, 0.8)'}>
                    {tag}
                  </EventTag>
                ))}
              </div>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </TimelineContainer>
  );
};

export default Timeline;
