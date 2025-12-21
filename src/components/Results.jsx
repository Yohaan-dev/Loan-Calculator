import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';

const Results = () => {
  return (
      <section className='bg-fuchsia-950 py-10'>
          <div className='container max-w-6xl mx-auto py-6 px-4'>
              <div className='grid sm:grid-rows-1 md:grid-cols-3 gap-3 items-center justify-center md:justify-between'>
                  <div className='p-4 rounded-md shadow-2xl backdrop-blur-3xl bg-fuchsia-600/30'>
                  <h1 className='text-white text-lg font-semibold'>Payment Schedule</h1>
                  <p className='text-white my-2'>View detailed monthly breakdown</p>
                  <div className='flex flex-row items-center'>
                      <p className='text-cyan-600 font-semibold'>View Schedule</p>
                      <FaLongArrowAltRight className='text-cyan-600 ml-2'/>
                  </div>
              </div>
              <div className='p-4 rounded-md shadow-2xl backdrop-blur-3xl bg-fuchsia-600/30'>
                  <h1 className='text-white text-lg font-semibold'>Compare Loan</h1>
                  <p className='text-white my-2'>View detailed monthly breakdown</p>
                  <div className='flex flex-row items-center'>
                      <p className='text-cyan-600 font-semibold'>Compare</p>
                      <FaLongArrowAltRight className='text-cyan-600 ml-2'/>
                  </div>
              </div>
              <div className='p-4 rounded-md shadow-2xl backdrop-blur-3xl bg-fuchsia-600/30'>
                  <h1 className='text-white text-lg font-semibold'>Save Result</h1>
                  <p className='text-white my-2'>Export or save you calculation</p>
                  <div className='flex flex-row items-center'>
                      <p className='text-cyan-600 font-semibold'>Export</p>
                      <FaLongArrowAltRight className='text-cyan-600 ml-2'/>
                  </div>
              </div>
              </div>
          </div>
    </section>
  )
}

export default Results