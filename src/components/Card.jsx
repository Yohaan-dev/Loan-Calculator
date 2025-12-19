import React from 'react'
import { FaChevronDown, FaExclamationTriangle } from 'react-icons/fa';

const Card = () => {
  return (
      <section className='bg-fuchsia-950 p-4 mx-auto pt-10 pb-10'>
          <div className='grid grid-rows-1 md:grid-cols-2 gap-3 items-stretch justify-center'>
              <div className='w-96 max-w-sm mx-4 bg-white/10 rounded-2xl backdrop-blur-xl p-4 overflow-hidden'>
                  <h1 className='text-white font-serif p-2 border-b-2 border-fuchsia-700'>Loan Details</h1>
                  <div className='mt-4'>
                      <label className='text-white font-serif'>Loan Amount</label>
                      <input type="text" className='w-full rounded-md my-2 px-4 py-3 text-white bg-white/10 hover:outline-none outline-none' placeholder='eg 250,000' />
                      <p className='text-gray-500 font-serif'>Enter the principal amount</p>

                      <div className='grid grid-rows-1 md:grid-cols-2 items-stretch gap-4 my-3'>
                          <div className='block'>
                              <h1 className='text-white font-serif'>Interest Rate%</h1>
                          <input type="text" className='w-full rounded-md px-4 py-3 text-white bg-white/10 hover:outline-none outline-none' placeholder='%eg 55' />
                          </div>

                          <div className='block mt-3 md:mt-0'>
                              <h1 className='text-white font-serif'>Loan Terms</h1>
                              <div className='flex flex-row items-center space-x-3 justify-between w-full rounded-md px-4 py-3 text-white bg-white/10 hover:outline-none outline-none'>
                                  <input type="text" className='hover:outline-none outline-none' placeholder='Select' />
                                  <FaChevronDown className='text-gray-700'/>
                              </div>
                          </div>
                      </div>
                      <div className='grid grid-rows-1 md:grid-cols-2 items-stretch gap-4 my-3'>
                          <div>
                              <h1 className='text-white font-serif'>Start date</h1>
                          <div className='flex flex-row items-center space-x-3 justify-between w-full rounded-md px-4 py-3 text-white bg-white/10 hover:outline-none outline-none'>
                                  <input type="text" className='hover:outline-none outline-none' placeholder='Select' />
                                  <FaChevronDown className='text-gray-700'/>
                              </div>
                          </div>

                          <div>
                              <h1 className='text-white font-serif'>Start date</h1>
                              <div className='flex flex-row items-center space-x-3 justify-between w-full rounded-md px-4 py-3 text-white bg-white/10 hover:outline-none outline-none'>
                                  <input type="text" className='hover:outline-none outline-none' placeholder='Select' />
                                  <FaChevronDown className='text-gray-700'/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <button className='my-2 px-4 py-1 p-2 rounded-md bg-cyan-500 text-black font-serif w-full hover:scale-110 hover:translate-y-1 transition-transform duration-300'>Calculate</button>
              </div>
          
              <div className='w-96 max-w-sm mx-4 bg-white/30 rounded-2xl backdrop-blur-xl p-4 overflow-hidden'>
                  <h1 className='text-white font-serif p-2 border-b-2 border-cyan-400'>Result</h1>
                  <div className='mt-4'>
                      <div className='flex flex-row items-center space-x-3 justify-between w-full rounded-md px-4 py-3 bg-white my-3'>
                                  <h2 className='text-black font-serif'>Monthly Payment</h2>
                                  <p className='text-bold'>$1,423</p>
                      </div>
                      <div className='flex flex-row items-center space-x-3 justify-between w-full rounded-md px-4 py-3 bg-white my-3'>
                                  <h2 className='text-black font-serif'>Total Interest</h2>
                                  <p className='text-bold'>$261,023</p>
                      </div>
                      <div className='flex flex-row items-center space-x-3 justify-between w-full rounded-md px-4 py-3 bg-white my-3'>
                                  <h2 className='text-black font-serif'>Total Repayment</h2>
                                  <p className='text-bold'>$511,345</p>
                      </div>
                      <div className='flex flex-row items-center space-x-3 justify-between'>
                          <h1 className='text-white font-serif'>Loan payoff progress</h1>
                          <p className='text-white font-semibold'>55%</p>
                      </div>
                      <p className='rounded-sm w-full px-2 py-1 my-3 bg-linear-to-r from-blue-600/50 to-white/50'></p>
                      <div className='flex flex-row items-center space-x-3 justify-between w-full rounded-md px-4 py-3 bg-white my-3'>
                                  <FaExclamationTriangle size={20} color="black" />
                                  <p className='text-bold'>The results are estimates.Actual payments may vary</p>
                      </div>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Card