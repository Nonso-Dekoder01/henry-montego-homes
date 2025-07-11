import React, { useState }  from 'react'
import logo from '../assets/Logo.png'
import { NavLink } from "react-router-dom";
import { LuUsers, LuHouse, LuMenu } from "react-icons/lu";
import { MdOutlineMail, MdOutlineCall } from "react-icons/md";
import { HiX } from "react-icons/hi";


const leftLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Pages', path: '/pages' },
  ];
  
  const rightLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact',  isButton: true },
  ];

  const upperLinks = [
    { name: '+234 901-200-1900', path: '/whatsapp', icon: <MdOutlineCall /> },
    { name: 'info@henrymontegohomes.com', path: '/email', icon: <MdOutlineMail /> },
    { name: 'HouseOne', path: '/email', icon: <LuHouse /> },
    { name: 'YOU & I', path: '/email', icon: <LuUsers /> },
  ];
  

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='w-screen h-30  md:px-20 lg:px-28 bg-black'>
        <div className='w-full h-full flex'>
            <div className='w-[40%] md:w-[20%] lg:w-[12%] border-l-[0.1px] md:border-x-[0.1px] border-gray-500 border-opacity-10 flex justify-center items-center'>
                <img src={logo} alt="logo" className='w-28'/>
            </div>
            <div className='w-[60%] md:w-[80%] lg:w-[88%] border-r-[0.1px] border-gray-500 border-opacity-10'>
                <div className='w-full h-1/12 lg:h-5/12 bg-black lg:bg-white/5 hidden md:flex justify-end items-center'>
                    <div className='hidden lg:flex items-start gap- h-full'>
                        {/* <MdOutlineCall className='text-[#FF8C00]'/> +234 901-200-1900 */}
                        {upperLinks.map((link, index) => (
                            <NavLink
                            key={link.path}
                            to={link.path}
                            className='px-6 h-full gap-2 flex items-center text-xs hover:!text-[#FF8C00] transition-all duration-700 border-l-[0.1px] border-gray-500 border-opacity-10'
                            >
                            <span className="text-lg text-[#FF8C00]">{link.icon}</span>
                            {link.name}
                            </NavLink>
                        ))}
                    </div>
                 </div>
                <div className='w-full h-11/12 lg:h-7/12 flex justify-end lg:justify-between px-5 items-center'>
                    <div className='hidden lg:flex items-start gap-10'>
                    {leftLinks.map((link) => (
                        <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `relative px-1 pb-1 text-sm no-underline hover:decoration-none transition-all duration-200 ${
                            isActive
                                ? 'text-white font-medium text-xs pb-1.5 after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-1 after:h-1 after:rounded-full after:bg-[#FF8C00]'
                                : 'text-white font-normal text-xs hover:!text-[#FF8C00]'
                            }`
                        }
                        >
                        {link.name}
                        </NavLink>
                    ))}
                    </div>
                    <div className='hidden lg:flex items-center gap-10'>
                    {rightLinks.map((link) => 
                        link.isButton ? (
                            // CONTACT US BUTTON
                        <NavLink
                        key={link.path}
                        to={link.path}
                        className="px-5 py-3 font-bold text-md bg-white !text-black rounded-xl"
                        >
                        {link.name}
                        </NavLink>
                    ) : (
                        // BLOG BUTTON
                        <NavLink 
                        key={link.path} 
                        to={link.path} 
                        className={({ isActive }) =>
                            `relative px-1 pb-1 text-sm no-underline hover:text-[#FF8C00] transition-all duration-200 ${
                            isActive
                                ? 'text-white font-medium text-xs pb-1.5 after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-1 after:h-1 after:rounded-full after:bg-[#FF8C00]'
                                : 'text-white font-normal text-xs hover:!text-[#FF8C00]'
                            }`
                        }
                        >
                        {link.name}
                        </NavLink>
                      ))}
                    </div>
                    <div className='flex lg:hidden items-center gap-10'>
                    {/* <LuMenu size={32}/> */}

                        <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <HiX size={40}/> : <LuMenu size={40}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    {mobileMenuOpen && (
                        <div className="lg:hidden flex flex-col bg-black gap-14 w-full h-auto p-10 md:px-0 md:py-10 items-start">
                        {[...leftLinks, ...rightLinks, ...upperLinks,].map((link) => (
                          <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-white text-sm ${
                              link.isButton ? 'bg-white !text-black px-6 py-8 w-full rounded-xl font-semibold' : 'hover:text-[#FF8C00]'
                            }`}
                          >
                            {link.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
    </div>
  )
}

export default Navbar