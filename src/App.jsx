import React, { useState, useEffect } from 'react';
import WelcomePage from './components/WelcomePage';
import SecondPage from './components/SecondPage';
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showWelcome ? <WelcomePage /> : <SecondPage />}
    </div>
  );
}

export default App;