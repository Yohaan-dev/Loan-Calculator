import { useState } from 'react';
import Card from './components/Card';
import Results from './components/Results';

const LoanCalculatorPage = () => {
  // This state stores the latest calculated data
  const [loanData, setLoanData] = useState({
    amount: 0,
    interest: 0,
    term: 0,
    monthly: "0.00",
    totalInterest: "0.00",
    totalRepayment: "0.00"
  });

  return (
    <div className="bg-fuchsia-950 min-h-screen">
      {/* 1. The Input Card - We pass setLoanData to save results */}
      <Card onCalculate={setLoanData} />
      
      {/* 2. The Action Cards - We pass loanData to be exported/viewed */}
      <Results loanData={loanData} />
    </div>
  );
};

export default LoanCalculatorPage;