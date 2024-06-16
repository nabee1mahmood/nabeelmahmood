import React from 'react';
import './hero.css'; 
import profile_img from '/Users/nabeelmahmood/nabeels-portfolio-react/src/assets/IMG_1636.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={profile_img} alt='' style={{ width: '350px', height: '300px'}}/> 


      <h1><span>Hi, I'm Nabeel Mahmood</span></h1>
      <p>
        Embark on a visual journey through my career milestones and discover my skills, education, and experiences.
        Fasten your seatbelt for a tour of my career so far!
      </p>
      <div className='hero-action'>
      <AnchorLink href="#contact" className="anchor-link">
  <div className="hero-connect">Connect with me</div>
</AnchorLink>
<div className='hero-resume' onClick={() => window.open('https://drive.google.com/file/d/1a4GKm6NdPy0QPVsWf01N66QFTkIUbTXG/view?usp=sharing', '_blank')}>
    My Resume
</div>
      </div>
      </div>
      
    
  );
};

export default Hero;
