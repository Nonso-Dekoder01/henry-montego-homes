import React from 'react'
import { BsTiktok } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXFill } from 'react-icons/ri'

const ContactUs = () => {
  return (
    <div>
      <section className='w-screen h-auto py-40 flex flex-col items-center text-center justify-center'>
        <h1>Reach Out To Us Today!</h1>
      </section>

      <section className='flex flex-col md:flex-row w-screen gap-5'>
        <div className='w-full md:w-[50%] h-[70vh] bg-white/5 flex flex-col gap-2 items-center justify-center'>
          <h3>Contact Our Customer Service Team</h3>
          <h1>+234 901-200-1900</h1>
          <h1>+234 901-243-1700</h1>
        </div>
        <div className='w-full md:w-[50%] h-[70vh] bg-white/5 flex flex-col gap-4 items-center justify-center'>
          <h3>Contact Us Through Social Media</h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='px-5 py-3 bg-white text-black font-semibold rounded-full flex gap-2 items-center justify-center'>
              <RiTwitterXFill size={32}/>
              {/* <IoLogoInstagram size={36}/> */}
              {/* <FaLinkedinIn size={32}/> */}
              X/Twitter
            </div>
            <div className='px-5 py-3 bg-white text-black font-semibold rounded-full flex gap-2 items-center justify-center'>
              {/* <RiTwitterXFill size={32}/> */}
              <IoLogoInstagram size={36}/>
              {/* <FaLinkedinIn size={32}/> */}
              Instagram
            </div>
            <div className='px-5 py-3 bg-white text-black font-semibold rounded-full flex gap-2 items-center justify-center'>
              {/* <RiTwitterXFill size={32}/> */}
              {/* <IoLogoInstagram size={36}/> */}
              <FaLinkedinIn size={32}/>
              LinkedIn
            </div>
            <div className='px-5 py-3 bg-white text-black font-semibold rounded-full flex gap-2 items-center justify-center'>
              {/* <RiTwitterXFill size={32}/> */}
              {/* <IoLogoInstagram size={36}/> */}
              <BsTiktok size={32}/>
              Tiktok
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs