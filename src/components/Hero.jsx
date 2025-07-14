import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>I lead teams and design products that people love</h1>
            <p>
              Design leader with experience at top tech companies, 
              passionate about creating meaningful user experiences 
              and building high-performing design teams.
            </p>
            <div className="hero-cta">
              <a href="#work" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-photo">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Profile" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;