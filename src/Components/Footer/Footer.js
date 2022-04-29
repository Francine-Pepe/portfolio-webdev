import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import './Footer.css';

export default function Footer() {

    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
    

    return (
        <>
        <footer className='footer_container'>
            <div>
                <SocialMedia />
            </div>
            <small>&copy; Copyright {getCurrentYear()} - Francine Pêpe</small>
            <a href="https://www.freepik.com/vectors/aesthetic-poster">Aesthetic poster vector created by starline - www.freepik.com</a>
            
        </footer>
        
        </>

    );
}