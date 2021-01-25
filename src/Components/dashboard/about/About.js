import React from 'react';
import './about.css'
import me from '../../../assets/me.jpg'
import signature from '../../../assets/Signature.jpg'
import TG_logo from '../../../assets/TG_logo.jpeg'

const About = () => {
    return (
      
            <div className='about__container'>
                <div className='about__logo'>
                    <img src={TG_logo} className='about__TG-logo' alt='Tall Grassland LLC logo'/>
                </div>
                <div className='about__paragraph'>
                    <h3 className='about__paragraph-title'>About</h3>
                    <p>My goal is to provide you with affordable properties with quick service! Unlike the "deals" that are available on the MLS "Multiple Listing Service", my goal is to not maximize profits on each deal. I will offer several affordable properties over time that will help to meet your land owning dreams.</p>
                    <img src={signature} alt='signature'/>
                </div>
                <div className='about__owner'>
                    <img src={me} className='about__owner-picture' alt='owner of Tall Grassland LLC'/>
                </div>
            </div>
        
    );
}

export default About;
