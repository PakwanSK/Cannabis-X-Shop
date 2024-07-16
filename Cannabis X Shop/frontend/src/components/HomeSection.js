import React from 'react';
import './HomeSection.css';
import { Button } from './Button';


function HomeSection() {
  return (
    
        <section class="home-page">
          <div class="home">
            <div class="text-box">
             
              <p>
                  Organic Cannabis Shop
              </p>
            </div>
            <div className='hero-btns'>
                <Button
                  className='btns'
                  buttonStyle='btn--primary'
                  buttonSize='btn--large'
                  onClick={console.log('hey')}
                >
                  <a href="/src/components/pages/Products.js">Go To Shopping</a>
                </Button>
            </div> 
          </div>
        </section>

  )

}
            

export default HomeSection;
