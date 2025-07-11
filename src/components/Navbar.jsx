import React, { useState }  from 'react'
import logo from '../assets/Logo.png'
import { NavLink } from "react-router-dom";
import { LuUsers, LuHouse, LuMenu } from "react-icons/lu";
import { MdOutlineMail, MdOutlineCall } from "react-icons/md";
import { HiX } from "react-icons/hi";
import { GoChevronDown } from 'react-icons/go';


const leftLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    {
      name: 'Companies',
      path: '/pages',
      icon: <GoChevronDown />,
      subLinks: [
        { name: 'HouseOne', path: '/HouseOne' },
        { name: 'YOU & I', path: '/YOU&I' },
      ],
    },
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
                    <div className="hidden lg:flex items-start gap-10">
                      {leftLinks.map((link) =>
                        link.subLinks ? (
                          <div key={link.path} className="relative group">
                            <div
                              className="flex items-center gap-1.5 px-1 pb-1 text-white font-normal text-xs cursor-pointer transition hover:text-[#FF8C00]"
                            >
                              {link.name}
                              <span className="text-xs text-[#FF8C00]">{link.icon}</span>
                            </div>

                            {/* Dropdown */}
                            <div className="absolute top-full left-0 mt-2 py-5 hidden group-hover:flex flex-col gap-3 bg-black border border-gray-700 rounded-lg shadow-lg z-50 min-w-[160px]">
                              {link.subLinks.map((sub) => (
                                <NavLink
                                  key={sub.path}
                                  to={sub.path}
                                  className="px-4 py-2 text-sm text-white hover:bg-[#FF8C00] hover:text-white transition"
                                >
                                  {sub.name}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                              `relative flex items-center gap-1.5 px-1 pb-1 text-xs no-underline transition duration-200 ${
                                isActive
                                  ? 'text-white font-medium after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-1 after:h-1 after:rounded-full after:bg-[#FF8C00]'
                                  : 'text-white font-normal hover:text-[#FF8C00]'
                              }`
                            }
                          >
                            {link.name}
                            {link.icon}
                          </NavLink>
                        )
                      )}
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