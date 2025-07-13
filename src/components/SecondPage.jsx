import React from 'react';
import './SecondPage.css';

const SecondPage = () => {
  const textLines = [
    'Get ready',
    'see something more...',
    'than just design!',
    'This is art...',
    'I have not yet designed ☹'
  ];

  return (
    <div className="page second-page">
      <h1>
        {textLines.map((line, index) => (
          <span key={index} className={`line line-${index}`}>
            {line}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default SecondPage;