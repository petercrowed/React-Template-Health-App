import React from 'react'
import '../App.css';
import { Button } from './Button';

import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        
        <h1>Health App</h1>
        <p>For Your Well-Being!</p>
        <div className="hero-btns">
            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'> 
            Open App
            </Button>
            <Button 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'> 
            Watch Trailer <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  );
}

export default HeroSection