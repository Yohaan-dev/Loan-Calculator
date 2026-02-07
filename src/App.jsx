import React, { useState } from 'react';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import Results from './components/Results.jsx';

const App = () => {
  const [loanData, setLoanData] = useState(null);
  const [history, setHistory] = useState([]);

  // This handles the real-time calculation from Card
  const handleCalculation = (data) => {
    setLoanData(data);
  };

  // This adds the current calculation to the comparison list
  const addToCompare = () => {
    if (loanData) {
      // We add a unique ID using timestamp so we can delete/identify them
      const newEntry = { ...loanData, id: Date.now() };
      setHistory((prev) => [newEntry, ...prev].slice(0, 3)); // Keep last 3 for comparison
    }
  };

  const clearHistory = () => setHistory([]);

  return (
    <div className="min-h-screen bg-fuchsia-950">
      <Hero />
      <Card onCalculate={handleCalculation} />
      
      {loanData && (
        <Results 
          loanData={loanData} 
          history={history} 
          onCompare={addToCompare} 
          onClearHistory={clearHistory}
        />
      )}
    </div>
  );
};

export default App;