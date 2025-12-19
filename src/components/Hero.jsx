import React from 'react'

const Hero = () => {
  return (
      <section className='bg-fuchsia-950 mt-10 mx-auto'> 
      <div className='flex flex-col justify-center items-center py-10 px-4 md:px-0'>
        <h2 className='text-white font-serif text-3xl my-8 text-center'>Loan Calculator</h2>
              <p className='text-white font-serif text-center'>Calculate your monthly payment and <span className='block md:inline-block space-y-3'>total loan cost</span></p>
      </div>
    </section>
  )
}

export default Hero