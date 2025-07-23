import React from 'react'
import logo from '../assets/Logo.png'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'

const Footer = () => {
  return (
    <div>
        <section className='w-screen h-auto gap-10 flex flex-col justify-between bg-black text-white px-20 lg:px-28 py-20'>
            <div className='w-full h-auto border-b border-white pb-8 flex flex-col md:flex-row gap-10 items-center md:items-start justify-between'>
                <div className='flex flex-col gap- items-center text-center md:text-start md:items-start'>
                    <h6 className='text-2xl font-semibold'>Join our newsletter</h6>
                    <p className='w-[300px] text-white/70 text-sm'>Get all the latest HMH news delivered to your inbox.</p>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-5 md:gap-3'>
                    <form action="#" className="px-4 py-2 bg-none flex flex-col sm:flex-row items-center gap-2 w-full max-w-md rounded-md">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full pl-4 pr-10 py-3 rounded-md border-2 text-white border-gray-300 focus:outline-none "
                    />
                    <button
                        type="submit"
                        className="!bg-[#FF8C00] text-white !font-bold !px-6 !py-3 rounded-md hover:bg-[#e67c00] transition"
                    >
                        Subscribe
                    </button>
                    </form>
                </div>
            </div>

            {/* <div className='w-full h-auto border-b border-white pb-8'>hello</div> */}

            <div className='w-full h-auto pb-8 flex flex-col md:flex-row gap-10 items-center md:items-start justify-between'>
                <div className='flex flex-col gap-5 items-center text-center md:text-start md:items-start'>
                    {/* <h6 className='text-2xl font-semibold'></h6> */}
                    <img src={logo} alt="" className='w-28'/>
                    <p className='w-auto text-white/70 text-sm'>© 2025 Henry Montego Homes. All rights reserved.</p>
                    <p className='w-[350px] text-white/70 text-sm'>All trademarks, logos and brand names are the property of their respective owners.</p>
                    <div className='flex gap-4'>
                        <p className='w-auto text-white/80 text-sm'>Terms Of Service</p>
                        <p className='w-auto text-white/80 text-sm'>Privacy Policy</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center text-center md:text-start md:items-start'>
                    <div className='p-2 rounded-full bg-[#FF8C00] flex items-center'>
                        <FaFacebookF size={20}/>
                    </div>
                    <div className='p-2 rounded-full bg-[#FF8C00] flex items-center'>
                        <IoLogoInstagram size={24}/>
                    </div>
                    <div className='p-2 rounded-full bg-[#FF8C00] flex items-center'>
                        <FaLinkedinIn size={20}/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer