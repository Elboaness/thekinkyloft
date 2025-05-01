import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  background: rgba(15, 15, 26, 0.8);
  border-bottom: 1px solid rgba(138, 43, 226, 0.3);
`;

const Logo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(to right, #ff69b4, #8a2be2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  cursor: pointer;
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  z-index: 2000;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  div {
    width: 25px;
    height: 3px;
    background: linear-gradient(to right, #ff69b4, #8a2be2);
    margin: 5px;
    transition: all 0.3s ease;
    border-radius: 2px;
  }
`;

const MenuLinks = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    background: rgba(15, 15, 26, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: -5px 0px 20px rgba(0, 0, 0, 0.3);
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 1500;
  }
`;

const NavItem = styled(motion.div)`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
  
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    position: relative;
    padding: 0.5rem;
    
    &:hover {
      color: #ff69b4;
    }
    
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
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <NavContainer style={{ 
      boxShadow: scrolled ? '0 5px 15px rgba(0,0,0,0.1)' : 'none',
    }}>
      <Logo as={Link} to="/">The Kinky Loft</Logo>
      
      <MenuToggle onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </MenuToggle>
      
      <MenuLinks isOpen={isOpen}>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/about" onClick={() => setIsOpen(false)}>Chi Siamo</Link>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/events" onClick={() => setIsOpen(false)}>Eventi</Link>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>Galleria</Link>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contatti</Link>
        </NavItem>
      </MenuLinks>
    </NavContainer>
  );
};

export default Navbar;
