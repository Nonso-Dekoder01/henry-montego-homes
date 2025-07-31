// import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaRegHandshake } from 'react-icons/fa'
import img1 from '../assets/hero-sideimage.png'
import img2 from '../assets/reviews-img1.png'
import img3 from '../assets/reviews-image2.png'
import { IoLogoInstagram } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { GoArrowDownRight, GoArrowUpRight, GoRocket } from 'react-icons/go'
import { RiTwitterXFill } from 'react-icons/ri'

const Blog = () => {
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


      {/* BLOG SECTION */}
      <section className='w-screen h-auto gap-32 lg:gap-32 flex flex-col justify-between bg-white text-black px-20 lg:px-28 py-28'>
              {/* <div className='w-full flex flex-col gap-4 text-center md:text-start'>
                <h5>BLOG</h5>
                <div className='w-full flex flex-col gap-10 md:flex-row justify-between items-center md:items-start'>
                  <h2 className='text-2xl lg:text-4xl font-bold w-[300px] md:w-[400px] lg:w-[600px]'>
                    Real Estate Insights
                  </h2>
                  <div className='flex items-center gap-5'>
                    <Link to='/projects'>
                      <button className='text-black !font-black !border-2 !border-black !bg-white'>View All Articles</button>
                    </Link>
                    <Link to='/about'>
                      <div className='bg-none border-black pb-2 border-b-2 text-black flex items-center gap-3 !font-bold'>
                        See More About Us <GoArrowUpRight size={25}/>
                      </div>
                    </Link>
                  </div>
                </div>
              </div> */}
              <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-start lg:flex justify-between'>
                <div className='text-center flex flex-col items-center gap-4 w-80 p-8 shadow-lg rounded-md'>
                  {/* <VscWorkspaceTrusted size={50}/> */}
                  <img src={img3} alt="" />
                  <h5 className='font-bold text-lg'>How to Find the Right Property in a Busy Market</h5>
                  <p className='w-[250px] text-xs font-light leading-6 text-gray-500'>
                    Tips to help you navigate listings, schedule visits, 
                    and make smart purchase decisions in Nigeria’s top real estate hubs.
                  </p>
                  <div className='flex justify-between w-full text-sm font-normal'>
                    <p>May 15, 2025</p>
                    <p>By Jane Doe</p>
                  </div>
                </div>
                <div className='text-center flex flex-col items-center gap-4 w-80 p-8 shadow-lg rounded-md'>
                  {/* <VscWorkspaceTrusted size={50}/> */}
                  <img src={img2} alt="" />
                  <h5 className='font-bold text-lg'>Is Property Investment Still Worth It in 2025?</h5>
                  <p className='w-[200px] text-xs font-light leading-6 text-gray-500'>
                    We break down current trends, risks, and rewards in real estate investment for 
                    individuals and businesses alike.
                  </p>
                  <div className='flex justify-between w-full text-sm font-normal'>
                    <p>May 15, 2025</p>
                    <p>By Jane Doe</p>
                  </div>
                </div>
                <div className='text-center flex flex-col items-center gap-4 w-80 p-8 shadow-lg rounded-md'>
                  {/* <VscWorkspaceTrusted size={50}/> */}
                  <img src={img3} alt="" />
                  <h5 className='font-bold text-lg'>Renovate or Relocate?</h5>
                  <p className='w-[200px] text-xs font-light leading-6 text-gray-500 mb-6'>
                    Explore which option saves you more — and how to decide whether to upgrade your home or look for a new one.
                  </p>
                  <div className='flex justify-between w-full text-sm font-normal'>
                    <p>May 15, 2025</p>
                    <p>By Jane Doe</p>
                  </div>
                </div>
              </div>
              <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-start lg:flex justify-between'>
                <div className='text-center flex flex-col items-center gap-4 w-80 p-8 shadow-lg rounded-md'>
                  {/* <VscWorkspaceTrusted size={50}/> */}
                  <img src={img3} alt="" />
                  <h5 className='font-bold text-lg'>How to Find the Right Property in a Busy Market</h5>
                  <p className='w-[250px] text-xs font-light leading-6 text-gray-500'>
                    Tips to help you navigate listings, schedule visits, 
                    and make smart purchase decisions in Nigeria’s top real estate hubs.
                  </p>
                  <div className='flex justify-between w-full text-sm font-normal'>
                    <p>May 15, 2025</p>
                    <p>By Jane Doe</p>
                  </div>
                </div>
                <div className='text-center flex flex-col items-center gap-4 w-80 p-8 shadow-lg rounded-md'>
                  {/* <VscWorkspaceTrusted size={50}/> */}
                  <img src={img2} alt="" />
                  <h5 className='font-bold text-lg'>Is Property Investment Still Worth It in 2025?</h5>
                  <p className='w-[200px] text-xs font-light leading-6 text-gray-500'>
                    We break down current trends, risks, and rewards in real estate investment for 
                    individuals and businesses alike.
                  </p>
                  <div className='flex justify-between w-full text-sm font-normal'>
                    <p>May 15, 2025</p>
                    <p>By Jane Doe</p>
                  </div>
                </div>
                <div className='text-center flex flex-col items-center gap-4 w-80 p-8 shadow-lg rounded-md'>
                  {/* <VscWorkspaceTrusted size={50}/> */}
                  <img src={img3} alt="" />
                  <h5 className='font-bold text-lg'>Renovate or Relocate?</h5>
                  <p className='w-[200px] text-xs font-light leading-6 text-gray-500 mb-6'>
                    Explore which option saves you more — and how to decide whether to upgrade your home or look for a new one.
                  </p>
                  <div className='flex justify-between w-full text-sm font-normal'>
                    <p>May 15, 2025</p>
                    <p>By Jane Doe</p>
                  </div>
                </div>
              </div>
              <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-start lg:flex justify-between'>
                <div className='text-center flex flex-col items-center gap-4 w-80 p-8 shadow-lg rounded-md'>
                  {/* <VscWorkspaceTrusted size={50}/> */}
                  <img src={img3} alt="" />
                  <h5 className='font-bold text-lg'>How to Find the Right Property in a Busy Market</h5>
                  <p className='w-[250px] text-xs font-light leading-6 text-gray-500'>
                    Tips to help you navigate listings, schedule visits, 
                    and make smart purchase decisions in Nigeria’s top real estate hubs.
                  </p>
                  <div className='flex justify-between w-full text-sm font-normal'>
                    <p>May 15, 2025</p>
                    <p>By Jane Doe</p>
                  </div>
                </div>
                <div className='text-center flex flex-col items-center gap-4 w-80 p-8 shadow-lg rounded-md'>
                  {/* <VscWorkspaceTrusted size={50}/> */}
                  <img src={img2} alt="" />
                  <h5 className='font-bold text-lg'>Is Property Investment Still Worth It in 2025?</h5>
                  <p className='w-[200px] text-xs font-light leading-6 text-gray-500'>
                    We break down current trends, risks, and rewards in real estate investment for 
                    individuals and businesses alike.
                  </p>
                  <div className='flex justify-between w-full text-sm font-normal'>
                    <p>May 15, 2025</p>
                    <p>By Jane Doe</p>
                  </div>
                </div>
                <div className='text-center flex flex-col items-center gap-4 w-80 p-8 shadow-lg rounded-md'>
                  {/* <VscWorkspaceTrusted size={50}/> */}
                  <img src={img3} alt="" />
                  <h5 className='font-bold text-lg'>Renovate or Relocate?</h5>
                  <p className='w-[200px] text-xs font-light leading-6 text-gray-500 mb-6'>
                    Explore which option saves you more — and how to decide whether to upgrade your home or look for a new one.
                  </p>
                  <div className='flex justify-between w-full text-sm font-normal'>
                    <p>May 15, 2025</p>
                    <p>By Jane Doe</p>
                  </div>
                </div>
              </div>
      </section>


 
    </div>
  )
}

export default Blog