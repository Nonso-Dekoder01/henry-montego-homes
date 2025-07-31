// import React from 'react'
import { useEffect, useState } from 'react'
import { BsBuildings } from 'react-icons/bs'
import img1 from '../assets/hero-sideimage.png'
import img2 from '../assets/reviews-img1.png'
import img3 from '../assets/reviews-image2.png'
import backgroundImage1 from '../assets/projectsimg1.png'
import backgroundImage2 from '../assets/projectsimg2.png'
import backgroundImage3 from '../assets/projectsimg3.png'
import backgroundImage4 from '../assets/projectsimg4.png'
import backgroundImage5 from '../assets/projectsimg5.png'
import { FaFacebookF, FaLinkedinIn, FaRegHandshake, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { GoArrowUpRight } from 'react-icons/go'
import { IoLogoInstagram } from 'react-icons/io'
import { RiBuilding2Fill, RiBuildingLine, RiCustomerService2Fill, RiTwitterXFill } from 'react-icons/ri'
import { GiBuyCard } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { BiSolidBuildingHouse } from 'react-icons/bi'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { IoChevronBackOutline, IoChevronForward } from 'react-icons/io5'


const reviews = [
  {
    name: "Chinedu I., First-time Homebuyer",
    text: "From the first tour to the final paperwork, everything was handled professionally. I found my dream home without stress.",
    image: img1,
    stars: 4.5
  },
  {
    name: "Ada M., Investor",
    text: "Henry Montego made real estate investment easy. I love how transparent they are!",
    image: img2,
    stars: 5
  },
  {
    name: "John O., Relocator",
    text: "Relocating was hard, but this team made it so much easier. I felt supported every step of the way.",
    image: img3,
    stars: 4
  },
  // add more...
];



const Home = () => {

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

useEffect(() => {
  const interval = setInterval(() => {
    handleNext();
  }, 10000);
  return () => clearInterval(interval);
}, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const handlePrev = () => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const currentReview = reviews[currentIndex];

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
              <h1 className='text-lg font-semibold '>Find Your Perfect Space — Where Trust Meets Real Estate</h1>
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
            <h2 className='text-2xl lg:text-4xl font-bold w-[300px] md:w-[400px] lg:w-[600px]'>
              We're here to simplify your property journey — whether you're buying, selling, or investing.
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
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-start lg:flex justify-between'>
          <div className='text-center flex flex-col items-center gap-2'>
            <BiSolidBuildingHouse size={50}/>
            <h5 className='font-bold text-lg'>Residential Developments</h5>
            <p className='w-[300px] text-xs font-light leading-6 text-gray-500'>
                The Group successfully ventured into Real Estate
                by creating a series of residential spaces at strategic locations in Kolkata,
                Siliguri and Durgapur under the aegis of Dream Homes.
            </p>
          </div>
          <div className='text-center flex flex-col items-center gap-2'>
            <RiBuilding2Fill size={50}/>
            <h5 className='font-bold text-lg'>Commercial Developments</h5>
            <p className='w-[300px] text-xs font-light leading-6 text-gray-500'>
              Our mission is to engage in issues that are of concern to individuals,
              families and communities through an uncompromising commitment to create outstanding living, 
              work and leisure environments.
            </p>
          </div>
          <div className='text-center flex flex-col items-center gap-2'>
            <GiBuyCard size={50}/>
            <h5 className='font-bold text-lg'>Investors</h5>
            <p className='w-[300px] text-xs font-light leading-6 text-gray-500'>
              Henry Montego started it's journey almost more than a decade back. 
              The Group has firmly established itself as a trustworthy and dependable organization in Real Estate Industry 
              that delivers quality.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className='w-screen h-auto gap-36 flex flex-col justify-between bg-black text-white px-20 lg:px-28 py-28'>
        <div className='w-full flex flex-col gap-4 text-center md:text-start'>
          <h5>FEATURED PROJECTS</h5>
          <div className='w-full flex flex-col gap-10 md:flex-row justify-between items-center'>
            <h2 className='text-2xl lg:text-4xl font-bold w-[300px] md:w-[400px] lg:w-[550px]'>
              We develop quality infrastructure and community projects since 2010.
            </h2>
            <Link to='/projects'>
              <div className='bg-none border-white pb-2 border-b-2 flex items-center gap-3 !font-bold'>
                View All Projects <GoArrowUpRight size={25}/>
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
                  <h4 className='font-bold text-lg'>Montego Garden IV</h4>
                  <p className='text-xs font-light'>Ogombo Road</p>
                </div>
                <h2 className='text-7xl'>01</h2>
              </div>
            </div>


            <div style={bgImages.propertyImg2} className="w-full h-80 relative flex items-end">
              <div className="absolute inset-0 bg-black/40 z-10" /> {/* Black overlay */}

              <div className="relative z-20 text-white p-6 w-full flex items-center justify-between">
                <div>
                  <h4 className='font-bold text-lg'>Montego Sunrise</h4>
                  <p className='text-xs font-light'>Ikate Lekki</p>
                </div>
                <h2 className='text-7xl'>02</h2>
              </div>
            </div>
          </div>

          <div className='flex items-center w-full md:w-[40%] h-auto'>
            <div style={bgImages.propertyImg3} className="w-full h-80 md:h-full bg-red-500 relative flex items-end">
              <div className="absolute inset-0 bg-black/40 z-10" /> {/* Black overlay */}

              <div className="relative z-20 text-white p-6 w-full flex items-center justify-between">
                <div>
                  <h4 className='font-bold text-3xl'>Ikoyi Hills</h4>
                  <p className='text-xs font-light'>Parkview, Ikoyi</p>
                </div>
                <h2 className='text-7xl'>03</h2>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center gap-8 w-full md:w-[30%] h-auto'>
            <div style={bgImages.propertyImg4} className="w-full h-80 relative flex items-end">
              <div className="absolute inset-0 bg-black/40 z-10" /> {/* Black overlay */}

              <div className="relative z-20 text-white p-6 w-full flex items-center justify-between">
                <div>
                  <h4 className='font-bold text-lg'>Montego Garden III</h4>
                  <p className='text-xs font-light'>Lekki Palm City</p>
                </div>
                <h2 className='text-7xl'>04</h2>
              </div>
            </div>


            <div style={bgImages.propertyImg5} className="w-full h-80 relative flex items-end">
              <div className="absolute inset-0 bg-black/40 z-10" /> {/* Black overlay */}

              <div className="relative z-20 text-white p-6 w-full flex items-center justify-between">
                <div>
                  <h4 className='font-bold text-lg'>Montego Bay III</h4>
                  <p className='text-xs font-light'>Ikate Lekki</p>
                </div>
                <h2 className='text-7xl'>05</h2>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT SECTION */}
      <section className='w-screen h-auto gap-32 lg:gap-52 flex flex-col justify-between bg-white text-black px-20 lg:px-28 py-28'>
        <div className='w-full flex flex-col gap-4 text-center md:text-start'>
          <h5>WHAT MAKES US DIFFERENT</h5>
          <div className='w-full flex flex-col gap-10 md:flex-row justify-between items-center md:items-start'>
            <h2 className='text-2xl lg:text-4xl font-bold w-[300px] md:w-[400px] lg:w-[600px]'>
              We don't just sell properties — we build peace of mind, one home at a time.
            </h2>
            <Link to='/about'>
              <div className='bg-none border-black pb-2 border-b-2 text-black flex items-center gap-3 !font-bold'>
                See More About Us <GoArrowUpRight size={25}/>
              </div>
            </Link>
          </div>
        </div>
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-start lg:flex justify-between'>
          <div className='text-center flex flex-col items-center gap-4'>
            <VscWorkspaceTrusted size={50}/>
            <h5 className='font-bold text-lg'>Trusted Expertise</h5>
            <p className='w-[300px] text-xs font-light leading-6 text-gray-500'>
              With years of experience and a team of certified professionals, 
              we deliver reliable property solutions tailored to your needs.
            </p>
          </div>
          <div className='text-center flex flex-col items-center gap-4'>
            <RiCustomerService2Fill size={50}/>
            <h5 className='font-bold text-lg'>24/7 Support</h5>
            <p className='w-[300px] text-xs font-light leading-6 text-gray-500'>
             Our customer service is always available — 
             ensuring you get help when you need it most, 
             whether you're buying or managing a property.
            </p>
          </div>
          <div className='text-center flex flex-col items-center gap-4'>
            <FaRegHandshake size={50}/>
            <h5 className='font-bold text-lg'>Verified Listings</h5>
            <p className='w-[300px] text-xs font-light leading-6 text-gray-500'>
              Every property on our platform is carefully verified for quality and authenticity — 
              no surprises, just real options.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className='w-screen h-auto gap-36 flex flex-col justify-between bg-black text-white px-10 lg:px-28 pt-28'>
        <div className='w-full flex flex-col gap-4 text-center md:text-start'>
          <h5>REVIEWS</h5>
          <div className='w-full flex flex-col gap-10 md:flex-row justify-between items-center'>
            <h2 className='text-2xl lg:text-4xl font-bold w-[300px] md:w-[450px]'>
              What Our Customers Say About Us
            </h2>
            <div className='flex items-center gap-4'>
              <div onClick={handlePrev} className='border-2 border-[#FF8C00] text-[#FF8C00] p-3 rounded-md'>
                <IoChevronBackOutline />
              </div>
              <div onClick={handleNext} className='border-2 border-[#FF8C00] text-[#FF8C00] p-3 rounded-md'>
                <IoChevronForward />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-auto lg:h-[70vh] flex flex-col lg:flex-row transition-all duration-700 ease-in-out'>
          <div className='w-full lg:w-[50%] h-full'>
            <img src={currentReview.image} alt="" className='h-full w-full object-cover'/>
          </div>
          <div className='w-full lg:w-[50%] h-full bg-white/5 flex flex-col gap-4 items-center text-center justify-center py-20 lg:py-0'>
            <h3 className='font-semibold text-sm'>{currentReview.name}</h3>
            <p className='text-xs lg:text-xl w-[200px] lg:w-[400px] leading-10'>
              “{currentReview.text}”
            </p>
            <div className='flex gap-2 text-[#FF8C00]'>
              {Array.from({ length: 5 }, (_, i) => {
                if (i < Math.floor(currentReview.stars)) return <FaStar key={i} />;
                else if (i < currentReview.stars) return <FaStarHalfAlt key={i} />;
                else return <FaStar key={i} className="opacity-30" />;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className='w-screen h-auto gap-32 lg:gap-32 flex flex-col justify-between bg-white text-black px-20 lg:px-28 py-28'>
        <div className='w-full flex flex-col gap-4 text-center md:text-start'>
          <h5>BLOG</h5>
          <div className='w-full flex flex-col gap-10 md:flex-row justify-between items-center md:items-start'>
            <h2 className='text-2xl lg:text-4xl font-bold w-[300px] md:w-[400px] lg:w-[600px]'>
              Real Estate Insights
            </h2>
            <div className='flex items-center gap-5'>
              <Link to='/projects'>
                <button className='text-black !font-black !border-2 !border-black !bg-white'>View All Articles</button>
              </Link>
              {/* <Link to='/about'>
                <div className='bg-none border-black pb-2 border-b-2 text-black flex items-center gap-3 !font-bold'>
                  See More About Us <GoArrowUpRight size={25}/>
                </div>
              </Link> */}
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

export default Home