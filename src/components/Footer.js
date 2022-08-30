import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'

import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Sign Up for the Newsletter!
            </p>
            <p className='footer-subscription-text'>
                You can unsusbscribe at any time.
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email'
                    className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Diet Forms</h2>
                    <Link to='/sign-up'>Vegan</Link>
                    <Link to='/'>Vegetarian</Link>
                    <Link to='/'>Paleo</Link>
                    <Link to='/'>Carnivore</Link>
                    <Link to='/'>Atkins</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Goals</h2>
                    <Link to='/sign-up'>Muscle Building</Link>
                    <Link to='/'>Fitness</Link>
                    <Link to='/'>Endurance</Link>
                    <Link to='/'>Athletic Phisique</Link>
                    <Link to='/'>Power-Lifting</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                 <div className='footer-link-items'>
                    <h2>Recipes</h2>
                    <Link to='/sign-up'>Vegan</Link>
                    <Link to='/'>Vegetarian</Link>
                    <Link to='/'>Paleo</Link>
                    <Link to='/'>Carnivore</Link>
                    <Link to='/'>Atkins</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Github</Link>
                    <Link to='/'>FAQ</Link>
                    <Link to='/'>Carrers</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
            </div>
        </div>

        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        Nutri-App <i className='fa-solid fa-apple-whole' />
                    </Link>
                </div>
                <small className='website-rights'>Nutri-App 2022</small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                    <i className='fab fa-facebook-f' />
                    </Link>
                    <Link className='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <i className='fab fa-instagram' />
                    </Link>
                    <Link className='social-icon-link linkedin'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                    <i className='fab fa-linkedin' />
                    </Link>
                    <Link className='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <i className='fab fa-twitter' />
                    </Link>
                </div> 
            </div>
        </section>
    </div>
  );
}

export default Footer