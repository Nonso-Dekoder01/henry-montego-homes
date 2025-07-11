import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
// import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        {/* Add more routes here */}
      </Routes>
      {/* <h1 className="text-4xl">Luxury Real Estate, Redefined</h1> */}
    </div>
  )
}

export default App
