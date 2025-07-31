// import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaRegHandshake } from 'react-icons/fa'
import img1 from '../assets/hero-sideimage.png'
import { IoLogoInstagram } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { GoArrowDownRight, GoArrowUpRight, GoRocket } from 'react-icons/go'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { RiBuilding2Fill, RiCustomerService2Fill, RiTwitterXFill } from 'react-icons/ri'
import { TbTargetArrow } from 'react-icons/tb'
import { IoTelescopeOutline, IoTrophy } from 'react-icons/io5'
import backgroundImage1 from '../assets/projectsimg1.png'
import backgroundImage2 from '../assets/projectsimg2.png'
import backgroundImage3 from '../assets/projectsimg3.png'
import backgroundImage4 from '../assets/projectsimg4.png'
import backgroundImage5 from '../assets/projectsimg5.png'
import { BiSolidBuildingHouse } from 'react-icons/bi'
import { GiBuyCard } from 'react-icons/gi'




const Projects = () => {



  const properties = [
  {
    id: 1,
    location: 'IKATE, LAGOS STATE.',
    title: 'MONTEGO BAY 3',
    image: img1,
  },
  {
    id: 2,
    location: 'OGOMBO, LAGOS STATE.',
    title: 'MONTEGO GARDEN 4',
    image: img1,
  },
  {
    id: 3,
    location: 'AJAH, LAGOS STATE.',
    title: 'MONTEGO GARDEN 3',
    image: img1,
  },
];


  return (
    <div>

      {/* HERO SECTION */}
      <section className='w-screen h-auto flex flex-col lg:flex-row items-center lg:pl-16'>
              <div className='w-full lg:w-[50%] h-full flex flex-col lg:flex-row items-center py-20 lg:py-0'>
                <div className='hidden lg:flex w-auto mr-14 h-auto flex-col gap-8 items-center'>
                        <div className='w-[0.3px] h-72 bg-white opacity-30'></div>
                        <div className='flex flex-col gap-4'>
                          <RiTwitterXFill size={32}/>
                          <IoLogoInstagram size={36}/>
                          <FaLinkedinIn size={32}/>
                        </div>
                </div>
                <div className='flex flex-col gap-10 lg:gap-16 items-center lg:items-start text-center lg:text-start'>
                        <div className='flex flex-col gap-4 w-[350px] md:w-[600px] lg:w-[500px]'>
                          <h3>Henry Montego Homes</h3>
                          <h1 className='text-lg font-semibold '>Explore the Properties and Projects That Define Our Commitment to Quality Real Estate Solutions</h1>
                          <p className='text-xs font-light leading-7 text-gray-400'>
                            Explore a curated collection of residential, commercial, and mixed-use developments.
                          </p>
                        </div>
                        <div className='flex gap-5'>
                          <Link to='/about'>
                            <button className='text-black !font-black !bg-white'>About Us</button>
                          </Link>
                          <div className='bg-none border-white border-b-2 text-white flex items-center gap-3 !font-bold'>
                            <Link className='flex' to='/contact'>
                                Talk to an expert <GoArrowUpRight size={25}/>
                            </Link>
                          </div>
                        </div>
                </div>
                <div className='flex flex-col mt-10 lg:hidden w-auto h-auto gap-4 items-center'>
                        <div className='flex flex-row gap-6 items-center'>
                          <FaFacebookF size={32}/>
                          <IoLogoInstagram size={36}/>
                          <FaLinkedinIn size={32}/>
                        </div>
                </div>
              </div>
            
              <div className='w-full hidden lg:flex lg:w-[50%] h-[50%] lg:h-full'>
                <img src={img1} alt="" className='h-full w-full'/>
              </div>
      </section>


      {/* WHO WE ARE SECTION */}
      <section className='w-screen h-auto flex flex-col justify-between text-white'>
        <div className='w-full flex flex-col gap-4 text-center md:text-start px-20 lg:px-28 py-28'>
          <h5>WHAT MAKES US DIFFERENT</h5>
          <div className='w-full flex flex-col gap-10 md:flex-row justify-between items-center md:items-start'>
            <h2 className='text-2xl lg:text-4xl font-bold w-[300px] md:w-[400px] lg:w-[600px]'>
              We don't just sell properties — we build peace of mind, one home at a time.
            </h2>
            <div className='flex flex-col md:flex-row gap-8 items-center md:gap-10'>
              <div className='w-48 h-auto flex flex-col justify-center'>
                <h1 className='text-4xl font-semibold'>100+</h1>
                <p className='text-end text-xs'>Completed Projects</p>
              </div>
                  <Link to='/projects'>
                    <div className='bg-none border-white pb-2 border-b-2 text-white flex items-center gap-3 !font-bold'>
                      Filter By Location <GoArrowDownRight size={25}/>
                    </div>
                  </Link>
            </div>
          </div>
        </div>
        <div className='w-screen h-auto bg-white/5 flex flex-col gap-20 px-20 lg:px-28 py-28'>
          {properties.map((property) => (
            <div key={property.id} className='w-full h-auto lg:h-[70vh] flex flex-col lg:flex-row transition-all duration-700 ease-in-out'>
              <div className='w-full lg:w-[50%] h-full'>
                <img src={property.image} alt={property.title} className='h-full w-full object-cover' />
              </div>
              <div className='w-full lg:w-[50%] h-full bg-white/5 flex flex-col gap-6 items-center text-center justify-center py-20 lg:py-0'>
                <h3 className='font-semibold text-sm text-[#FF8C00]'>{property.location}</h3>
                <h1 className='text-xs font-bold lg:text-xl w-[200px] lg:w-[500px] leading-10'>
                  {property.title}
                </h1>
                <button className='font-semibold !outline-none text-sm text-[#FF8C00] !bg-black/5 !border-2 !border-[#FF8C00]'>See More</button>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  )
}

export default Projects