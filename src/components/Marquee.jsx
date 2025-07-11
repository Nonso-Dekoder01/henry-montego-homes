import React from 'react'

const Marquee = () => {
  return (
    <div>
      <section className='py-5 border-y-[0.1px] border-gray-500 border-opacity-10'>
          <marquee behavior="" direction="" loop="infinite" scrollamount="15" className='flex gap-80'>
            Limited-Time Offer on Prime Properties This June! Secure <span className='text-[#FF8C00]'>Your Dream Home</span> Today! &nbsp;&nbsp;&nbsp;
            Limited-Time Offer on Prime Properties This June! Secure <span className='text-[#FF8C00]'>Your Dream Home</span> Today!
          </marquee>
      </section>
    </div>
  )
}

export default Marquee