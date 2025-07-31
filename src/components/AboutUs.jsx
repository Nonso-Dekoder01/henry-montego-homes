// import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaRegHandshake } from 'react-icons/fa'
import img1 from '../assets/hero-sideimage.png'
import { IoLogoInstagram } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { GoArrowUpRight, GoRocket } from 'react-icons/go'
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


const AboutUs = () => {

  const bgImages = {
    propertyImg1: {
      backgroundImage: `url(${backgroundImage1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    propertyImg2: {
      backgroundImage: `url(${backgroundImage2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    propertyImg3: {
      backgroundImage: `url(${backgroundImage3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    propertyImg4: {
      backgroundImage: `url(${backgroundImage4})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    propertyImg5: {
      backgroundImage: `url(${backgroundImage5})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  };

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
                    <h1 className='text-lg font-semibold '>Redefining property ownership with trust, transparency, and excellence.</h1>
                    <p className='text-xs font-light leading-7 text-gray-400'>
                      Explore modern homes, commercial spaces, and investment properties — all with expert guidance and 24/7 support.
                    </p>
                  </div>
                  <div className='flex gap-5'>
                    <Link to='/projects'>
                      <button className='text-black !font-black !bg-white'>View Listings</button>
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
      <section className='w-screen h-auto gap-32 lg:gap-52 flex flex-col justify-between bg-white text-black px-20 lg:px-28 py-28'>
              <div className='w-full flex flex-col gap-4 text-center md:text-start'>
                <h5>WHO WE ARE</h5>
                <div className='w-full flex flex-col gap-10 md:flex-row justify-between items-center md:items-start'>
                  <h2 className='text-2xl lg:text-4xl font-bold w-[300px] md:w-[400px] lg:w-[700px]'>
                    Founded in 2015, Henry Montego Homes was born out of a desire to make real estate simpler, more accessible, and more trustworthy.
                  </h2>
                  <Link to='/projects'>
                    <div className='bg-none border-black pb-2 border-b-2 text-black flex items-center gap-3 !font-bold'>
                      View Our Projects <GoArrowUpRight size={25}/>
                    </div>
                  </Link>
                </div>
              </div>
              <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-start lg:flex justify-between'>
                <div className='text-center flex flex-col items-center gap-4'>
                  <TbTargetArrow size={50}/>
                  <h5 className='font-bold text-lg'>Core Values</h5>
                  <div className='flex gap-8 items-center'>
                    <div className='flex flex-col gap-6'>
                      <p>🤝 Integrity</p>
                      <p>🚀 Innovation</p>
                      <p>📈 Excellence</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                      <p>🌍 Community</p>
                      <p>📞 Responsiveness</p>
                      <p>🔍 Transparency</p>
                    </div>
                  </div>
                  {/* <p className='w-[300px] text-xs font-light leading-6 text-gray-500'>
                    With years of experience and a team of certified professionals, 
                    we deliver reliable property solutions tailored to your needs.
                  </p> */}
                </div>
                <div className='text-center flex flex-col items-center gap-4'>
                  <GoRocket size={50}/>
                  <h5 className='font-bold text-lg'>Mission Statement</h5>
                  <p className='w-[300px] text-xs font-light leading-6 text-gray-500'>
                    To provide seamless, honest, and customer-focused real estate solutions 
                    that empower individuals and businesses.
                  </p>
                </div>
                <div className='text-center flex flex-col items-center gap-4'>
                  <IoTelescopeOutline size={50}/>
                  <h5 className='font-bold text-lg'>Vision Statement</h5>
                  <p className='w-[300px] text-xs font-light leading-6 text-gray-500'>
                    To become the most trusted real estate partner in Nigeria, known for innovation and integrity.
                  </p>
                </div>
              </div>
      </section>


      {/* MEET THE TEAM SECTION */}
      <section className='w-screen h-auto gap-36 flex flex-col justify-between bg-black text-white px-20 lg:px-28 py-28'>
        <div className='w-full flex flex-col gap-4 text-center md:text-start'>
          <h5>MEET THE TEAM</h5>
          <div className='w-full flex flex-col gap-10 md:flex-row justify-between items-center'>
            <h2 className='text-2xl lg:text-4xl font-bold w-[300px] md:w-[400px] lg:w-[550px]'>
              The People Behind Every Property, Plan, and Promise.
            </h2>
            <Link to='/projects'>
              <div className='bg-none border-white pb-2 border-b-2 flex items-center gap-3 !font-bold'>
                Reach Out <GoArrowUpRight size={25}/>
              </div>
            </Link>
          </div>
        </div>
        <div className='w-full h-auto flex flex-col md:flex-row justify-between gap-10'>

          <div className='flex flex-col items-center gap-8 w-full md:w-[30%] h-auto'>
            <div style={bgImages.propertyImg1} className="w-full h-80 relative flex items-end">
              <div className="absolute inset-0 bg-black/40 z-10" /> {/* Black overlay */}

              <div className="relative z-20 text-white p-6 w-full flex items-center justify-between">
                <div>
                  <h4 className='font-bold text-lg'>Personel Name</h4>
                  <p className='text-xs font-light'>Position</p>
                </div>
                <h2 className='text-5xl'>D.M.D</h2>
              </div>
            </div>


            <div style={bgImages.propertyImg2} className="w-full h-80 relative flex items-end">
              <div className="absolute inset-0 bg-black/40 z-10" /> {/* Black overlay */}

              <div className="relative z-20 text-white p-6 w-full flex items-center justify-between">
                <div>
                  <h4 className='font-bold text-lg'>Personel Name</h4>
                  <p className='text-xs font-light'>Position</p>
                </div>
                <h2 className='text-5xl'>G.M</h2>
              </div>
            </div>
          </div>

          <div className='flex items-center w-full md:w-[40%] h-auto'>
            <div style={bgImages.propertyImg3} className="w-full h-80 md:h-full bg-red-500 relative flex items-end">
              <div className="absolute inset-0 bg-black/40 z-10" /> {/* Black overlay */}

              <div className="relative z-20 text-white p-6 w-full flex items-center justify-between">
                <div>
                  <h4 className='font-bold text-3xl'>Personel Name</h4>
                  <p className='text-xs font-light'>Position</p>
                </div>
                <h2 className='text-7xl'>M.D</h2>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center gap-8 w-full md:w-[30%] h-auto'>
            <div style={bgImages.propertyImg4} className="w-full h-80 relative flex items-end">
              <div className="absolute inset-0 bg-black/40 z-10" /> {/* Black overlay */}

              <div className="relative z-20 text-white p-6 w-full flex items-center justify-between">
                <div>
                  <h4 className='font-bold text-lg'>Personel Name</h4>
                  <p className='text-xs font-light'>Position</p>
                </div>
                <h2 className='text-5xl'>S.G.M</h2>
              </div>
            </div>


            <div style={bgImages.propertyImg5} className="w-full h-80 relative flex items-end">
              <div className="absolute inset-0 bg-black/40 z-10" /> {/* Black overlay */}

              <div className="relative z-20 text-white p-6 w-full flex items-center justify-between">
                <div>
                  <h4 className='font-bold text-lg'>Personel Name</h4>
                  <p className='text-xs font-light'>Position</p>
                </div>
                <h2 className='text-5xl'>H.R</h2>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* OUR JOURNEY SO FAR SECTION */}
      <section className='w-screen h-auto  flex flex-col justify-between bg-white text-black'>
        <div className='w-full flex flex-col gap-4 text-center md:text-start px-20 lg:px-28 py-28'>
          <h5>OUR JOURNEY SO FAR</h5>
          <div className='w-full flex flex-col gap-10 md:flex-row justify-between items-center md:items-start'>
            <h2 className='text-2xl lg:text-4xl font-bold w-[300px] md:w-[400px] lg:w-[600px]'>
              Building a Legacy — One Year at a Time
            </h2>
            <div className='flex md:gap-10'>
              <div className='w-48 h-auto flex flex-col justify-center'>
                <h1 className='text-4xl font-semibold'>100+</h1>
                <p className='text-end text-xs'>Completed Projects</p>
              </div>
              <div className='w-32 h-auto flex flex-col justify-center'>
                <h1 className='text-4xl font-semibold'>10<span className='text-sm'>x</span></h1>
                <p className='text-end text-xs'>Award Winning</p>
              </div>
            </div>
            {/* <Link to='/about'>
              <div className='bg-none border-black pb-2 border-b-2 text-black flex items-center gap-3 !font-bold'>
                See More About Us <GoArrowUpRight size={25}/>
              </div>
            </Link> */}
          </div>
        </div>


        <div className="w-screen overflow-hidden bg-black py-20 px-4 text-white">
          <marquee behavior="" direction="" loop="infinite" scrollamount="15" className='flex gap-80'>
              <div className="whitespace-nowrap animate-marquee flex gap-16">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className='text-center flex flex-col gap-1'>
                    <h3 className='text-xl text-[#FF8C00]'>2019</h3>
                    <h2 className='text-2xl font-semibold'>Company Founded</h2>
                    <p className='font-light text-xs text-gray-300 w-[500px]'>
                      Launched with a mission to simplify property ownership in Nigeria.
                    </p>
                  </div>
                ))}
              </div>
          </marquee>
        </div>


        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-start lg:flex justify-between px-20 lg:px-28 py-28'>
          <div className='text-center flex flex-col items-center gap-2'>
            <IoTrophy size={50}/>
            <h5 className='font-bold text-lg'>Company Award</h5>
            <p className='w-[300px] text-xs font-light leading-6 text-gray-500'>
              Award Description
            </p>
          </div>
          <div className='text-center flex flex-col items-center gap-2'>
            <IoTrophy size={50}/>
            <h5 className='font-bold text-lg'>Company Award</h5>
            <p className='w-[300px] text-xs font-light leading-6 text-gray-500'>
              Award Description
            </p>
          </div>
          <div className='text-center flex flex-col items-center gap-2'>
            <IoTrophy size={50}/>
            <h5 className='font-bold text-lg'>Company Award</h5>
            <p className='w-[300px] text-xs font-light leading-6 text-gray-500'>
              Award Description
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs