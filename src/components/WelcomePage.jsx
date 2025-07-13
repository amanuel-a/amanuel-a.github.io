import React from 'react';
import './WelcomePage.css';

const WelcomePage = () => {
  const welcomeText = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' :)'];
  
  // Generate particles
  const particles = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 12; j++) {
      particles.push(`particle${i}${j}`);
    }
  }

  return (
    <div className="page welcome-page">
      <div className="criterion">
        {welcomeText.map((letter, index) => (
          <div key={index} className={`text text${index}`}>
            {letter}
          </div>
        ))}
        {particles.map((particle, index) => (
          <div key={index} className={`particle ${particle}`}></div>
        ))}
      </div>
    </div>
  );
};

export default WelcomePage;