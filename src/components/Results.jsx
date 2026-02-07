import React, { useState } from 'react';
import { FaLongArrowAltRight, FaFilePdf, FaTable, FaHistory, FaTrash, FaTimes } from 'react-icons/fa';
import { generateHandshakePDF } from '../utils/pdfHelper.js';

const Results = ({ loanData, history = [], onCompare, onClearHistory }) => {
  const [showTable, setShowTable] = useState(false);

  // --- Logic: PDF Export ---
  const handleExport = () => {
    if (!loanData?.amount) {
      alert("Please enter loan details first.");
      return;
    }
    generateHandshakePDF(
      { title: "Loan Summary", ...loanData }, 
      { name: "User" }
    );
  };

  // --- Logic: Generate Amortization Rows ---
  const generateRows = () => {
    if (!loanData) return [];
    const rows = [];
    let balance = parseFloat(loanData.amount);
    const monthlyRate = parseFloat(loanData.interest) / 100 / 12;
    const monthlyPayment = parseFloat(loanData.monthly);
    const term = parseInt(loanData.term);

    for (let i = 1; i <= term; i++) {
      const interest = balance * monthlyRate;
      const principal = monthlyPayment - interest;
      balance -= principal;
      
      rows.push({
        month: i,
        payment: monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2 }),
        interest: interest.toLocaleString(undefined, { minimumFractionDigits: 2 }),
        principal: principal.toLocaleString(undefined, { minimumFractionDigits: 2 }),
        balance: Math.max(0, balance).toLocaleString(undefined, { minimumFractionDigits: 2 })
      });
    }
    return rows;
  };

  return (
    <section className='bg-fuchsia-950 py-10'>
      <div className='container max-w-6xl mx-auto px-4'>
        
        {/* ACTION CARDS GRID */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          
          {/* Card 1: View Schedule */}
          <div className='p-6 rounded-xl bg-fuchsia-600/20 border border-white/10 hover:bg-fuchsia-600/30 transition-all text-left group'
          >
            <FaTable className="text-cyan-400 mb-3" size={24} />
            <h3 className='text-white font-semibold'>Payment Schedule</h3>
            <p className='text-gray-400 text-sm mb-4'>Monthly interest and principal breakdown.</p>
            <button onClick={() => setShowTable(true)} className='flex items-center text-cyan-400 text-sm font-bold'>
              VIEW TABLE <FaLongArrowAltRight className='ml-2 group-hover:translate-x-2 transition-transform'/>
            </button>
          </div>

          {/* Card 2: Compare Now */}
          <div className='p-6 rounded-xl bg-fuchsia-600/20 border border-white/10 hover:bg-fuchsia-600/30 transition-all text-left group'
          >
            <FaHistory className="text-cyan-400 mb-3" size={24} />
            <h3 className='text-white font-semibold'>Compare History</h3>
            <p className='text-gray-400 text-sm mb-4'>Save this result to compare with others below.</p>
            <button onClick={onCompare} className='flex items-center text-cyan-400 text-sm font-bold'>
              COMPARE NOW <FaLongArrowAltRight className='ml-2 group-hover:translate-x-2 transition-transform'/>
            </button>
          </div>

          {/* Card 3: Download PDF */}
          <div className='p-6 rounded-xl bg-fuchsia-600/20 border border-white/10 hover:bg-fuchsia-600/30 transition-all text-left group'
          >
            <FaFilePdf className="text-cyan-400 mb-3" size={24} />
            <h3 className='text-white font-semibold'>Save as PDF</h3>
            <p className='text-gray-400 text-sm mb-4'>Export this calculation as a professional report.</p>
            <button onClick={handleExport} className='flex items-center text-cyan-400 text-sm font-bold'>
              DOWNLOAD PDF <FaLongArrowAltRight className='ml-2 group-hover:translate-x-2 transition-transform'/>
            </button>
          </div>
        </div>

        {/* --- COMPARISON HISTORY AREA --- */}
        {history.length > 0 && (
          <div className='bg-white/5 rounded-3xl p-8 border border-white/10 mb-10'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-serif text-white'>Comparison History</h2>
              <button onClick={onClearHistory} className='text-gray-400 hover:text-red-400 flex items-center gap-2 text-sm'>
                <FaTrash size={14}/> Clear All
              </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {history.map((item) => (
                <div key={item.id} className='bg-white/10 p-5 rounded-2xl border-l-4 border-cyan-400 hover:bg-white/15 transition-colors'>
                  <p className='text-gray-400 text-xs uppercase mb-1'>Loan Amount</p>
                  <p className='text-white font-bold mb-3'>KSh {Number(item.amount).toLocaleString()}</p>
                  <div className='grid grid-cols-2 gap-2 text-sm'>
                    <div>
                      <p className='text-gray-400 text-[10px]'>Monthly</p>
                      <p className='text-cyan-400 font-semibold'>KSh {item.monthly}</p>
                    </div>
                    <div>
                      <p className='text-gray-400 text-[10px]'>Rate</p>
                      <p className='text-white font-semibold'>{item.interest}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- AMORTIZATION MODAL --- */}
        {showTable && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-fuchsia-950 border border-white/20 w-full max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-fuchsia-900/50">
                <div>
                  <h2 className="text-xl font-bold text-white">Amortization Schedule</h2>
                  <p className='text-xs text-cyan-400'>KSh {Number(loanData.amount).toLocaleString()} @ {loanData.interest}%</p>
                </div>
                <button onClick={() => setShowTable(false)} className="text-gray-400 hover:text-white transition-colors">
                  <FaTimes size={24} />
                </button>
              </div>
              
              <div className="overflow-y-auto p-6">
                <table className="w-full text-left text-sm text-gray-300">
                  <thead className="text-cyan-400 uppercase text-[10px] tracking-wider border-b border-white/10 sticky top-0 bg-fuchsia-950">
                    <tr>
                      <th className="py-4 px-2">Month</th>
                      <th className="py-4 px-2">Payment</th>
                      <th className="py-4 px-2">Principal</th>
                      <th className="py-4 px-2">Interest</th>
                      <th className="py-4 px-2">Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {generateRows().map((row) => (
                      <tr key={row.month} className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-2 text-white font-medium">{row.month}</td>
                        <td className="py-4 px-2">KSh {row.payment}</td>
                        <td className="py-4 px-2 text-emerald-400 font-medium">+{row.principal}</td>
                        <td className="py-4 px-2 text-rose-400">-{row.interest}</td>
                        <td className="py-4 px-2 font-mono text-white/80">KSh {row.balance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='p-4 bg-white/5 text-center'>
                <p className='text-[10px] text-gray-500 uppercase tracking-widest'>End of Schedule</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Results;