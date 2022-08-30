import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out this Epic App!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../assets/images/img-1-orange.jpg')}
              text='Count Your Calories!'
              label='Calories'
              path='/services'
            />
            <CardItem
              src={require('../assets/images/img-7-mandarine.jpg')}
              text='Track Your Macros!'
              label='Macronurtrients'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../assets/images/img-5-fruits.jpg')}
              text='Track Your Micronutrients!'
              label='Micronutrients'
              path='/services'
            />
            <CardItem
              src={require('../assets/images/img-4-annanas.jpg')}
              text='Check Your Vitamins!'
              label='Vitamins'
              path='/products'
            />
            <CardItem
              src={require('../assets/images/img-12-vegetables-collage.jpg')}
              text='Save Your Data!'
              label='Data'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
