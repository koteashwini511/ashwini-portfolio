// About.js
import React from 'react';
import AboutLogo from '../images/aboutLogo.png'
import '../styles.css'; // Make sure to link your CSS file here

const About = () => {
  return (
    <section className="about-section">
  <div className="about-box">
    <div className="left-section">
      <img 
        src={AboutLogo} 
        alt="About Me" 
        className="about-image" 
      />
    </div>

    <div className="right-section">
      <h2>Why Hire Me</h2>
      <p>
      I am a frontend developer with almost three years of experience in creating dynamic web applications. I specialize in building interactive user interfaces, problem-solving, and crafting responsive, user-centric designs. Having worked on various client projects, I focus on aligning solutions with client objectives and ensuring smooth UI/UX interactions. My strong communication skills and ability to work in collaborative environments help me deliver results in cross-functional teams.
      </p>
      <p>
        <span className='pill'>React</span>
        <span className='pill'>Javascript</span>
        <span className='pill'>Typescript</span>
        <span className='pill'>Redux</span>
        <span className='pill'>GraphQL</span>
        <span className='pill'>REST API</span>
        <span className='pill'>HTML</span>
        <span className='pill'>CSS</span>
        <span className='pill'>Material UI</span>
        <span className='pill'>Bootstrap</span>
        <span className='pill'>SCSS</span>
        </p>
    </div>
  </div>
</section>
  );
};

export default About;
