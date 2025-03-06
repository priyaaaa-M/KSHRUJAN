import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Donation from './pages/Donation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/donation" element={<Donation />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;