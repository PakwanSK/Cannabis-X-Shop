import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src="/images/backgrround.jpg" alt='background'/>
      <div class="text-box">
        <h1>Canabis X</h1>
        <p>
            Organic Cannabis Shop
        </p>
      </div>
   
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Visit Us To Know More
        </Button>

      </div> */}
      
    </div>
  );
}

export default HeroSection;
