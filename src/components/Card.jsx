import React, { useState, useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const Card = ({ onCalculate }) => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('12');

  useEffect(() => {
    const P = parseFloat(amount);
    const annualR = parseFloat(rate);
    const n = parseInt(term);

    if (P > 0 && annualR > 0 && n > 0) {
      const r = annualR / 12 / 100;
      const power = Math.pow(1 + r, n);
      const monthly = (P * r * power) / (power - 1);
      const totalRepayment = monthly * n;
      const totalInterest = totalRepayment - P;

      // SEND DATA TO APP.JSX
      onCalculate({
        amount: P,
        interest: annualR,
        term: n,
        monthly: monthly.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        totalRepayment: totalRepayment.toFixed(2)
      });
    } else {
      // Clear results if input is invalid
      onCalculate(null);
    }
  }, [amount, rate, term]); // onCalculate is omitted to prevent render loops

  const handleReset = () => {
    setAmount('');
    setRate('');
    setTerm('12');
  };

  return (
    <section className='bg-fuchsia-900/20 py-10 max-w-7xl mx-4 my-2 md:mx-auto rounded-3xl border border-white/5'>
      <div className='container max-w-6xl mx-auto py-6 px-4'>
        <div className='grid sm:grid-rows-1 md:grid-cols-2 gap-6 items-start'>
          
          {/* INPUT SIDE */}
          <div className='bg-white/10 rounded-2xl backdrop-blur-xl p-6 border border-white/10 border-t-8 border-t-cyan-400'>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className='flex justify-between items-center border-b-2 border-fuchsia-700 pb-2 mb-6'>
                <h1 className='text-white font-serif text-xl'>Loan Details</h1>
                <button type="button" onClick={handleReset} className='text-xs bg-fuchsia-700 hover:bg-fuchsia-600 text-white px-3 py-1 rounded-full'>
                  Reset Form
                </button>
              </div>
              
              <div className='space-y-6'>
                <div>
                  <label className='block text-white mb-2 text-sm'>Loan Amount (KSh)</label>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className='w-full rounded-md px-4 py-3 text-white bg-white/10 focus:ring-2 focus:ring-cyan-500 outline-none' placeholder='eg 250000' />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-white mb-2 text-sm'>Rate (%)</label>
                    <input type="number" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} className='w-full rounded-md px-4 py-3 text-white bg-white/10 focus:ring-2 focus:ring-cyan-500 outline-none' placeholder='14.5' />
                  </div>
                  <div>
                    <label className='block text-white mb-2 text-sm'>Term</label>
                    <select value={term} onChange={(e) => setTerm(e.target.value)} className='w-full rounded-md px-4 py-3 text-white bg-white/10 focus:ring-2 focus:ring-cyan-500 outline-none'>
                      <option value="6" className='text-black'>6 Months</option>
                      <option value="12" className='text-black'>12 Months</option>
                      <option value="24" className='text-black'>24 Months</option>
                      <option value="36" className='text-black'>36 Months</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* DISPLAY SIDE (PREVIEW) */}
          <div className='bg-white/5 rounded-2xl p-6 border border-white/10 border-t-8 border-t-cyan-400'>
             <h1 className='text-white font-serif text-xl p-2 border-b-2 border-cyan-400 mb-6'>Quick Summary</h1>
             <div className='space-y-4'>
                <div className='flex justify-between items-center p-4 bg-white rounded-xl'>
                   <h2 className='text-gray-600 text-sm'>Monthly Payment</h2>
                   <p className='text-xl font-bold text-fuchsia-900'>
                     KSh {amount && rate ? Number(((parseFloat(amount) * (parseFloat(rate)/100/12) * Math.pow(1 + (parseFloat(rate)/100/12), parseInt(term))) / (Math.pow(1 + (parseFloat(rate)/100/12), parseInt(term)) - 1)).toFixed(2)).toLocaleString() : '0.00'}
                   </p>
                </div>
                <div className='flex items-start space-x-3 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20'>
                  <FaExclamationTriangle size={18} className="text-amber-400 mt-1" />
                  <p className='text-white/70 text-[10px]'>Estimates only. Bank fees not included.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;