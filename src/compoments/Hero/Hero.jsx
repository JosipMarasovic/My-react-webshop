import React from 'react';
import { Container } from 'react-bootstrap';
import kulio from '../Hero/kulio.jpg';
import './hero.css';
import toast from 'react-hot-toast';



function Hero() {
  return (
    <Container  className="hero-container">
      <img src={kulio} alt="Description of the image" className="hero-image" />
     <button onClick={() => toast.error("This didn't work.")}>klinki</button>
      <div className="hero-text">
        <p><em>Coolest shoes you will find, cooler than ice!</em></p>
      </div>
    </Container>
  );
}

export default Hero;