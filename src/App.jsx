import { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Blog from './components/Blog';
import HouseOne from './components/HouseOne';
import YouI from './components/YouI';
import ContactUs from './components/ContactUs';
import Marquee from './components/Marquee';
import Footer from './components/Footer';



const App = () => {

  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Offset by 50% to center it
      blob.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      <div
        ref={blobRef}
        className="fixed w-20 h-20 blur pointer-events-none z-[9999] rounded-full bg-[#FF8C00]/20 border-[#FF8C00]/10 border-2 transition-none"
        style={{
          willChange: 'transform',
        }}
      />
      <Navbar/>
      <Marquee/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/houseOne" element={<HouseOne/>} />
        <Route path="/YOU&I" element={<YouI/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
