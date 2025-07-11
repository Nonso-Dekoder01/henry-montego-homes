import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Blog from './components/Blog';
import HouseOne from './components/HouseOne';
import YouI from './components/YouI';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/houseOne" element={<HouseOne/>} />
        <Route path="/YOU&I" element={<YouI/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </div>
  )
}

export default App
