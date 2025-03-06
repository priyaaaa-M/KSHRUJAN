import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <Heart className={`h-8 w-8 ${isScrolled ? 'text-[#94DEA5]' : 'text-white'}`} />
              <span className={`ml-2 text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                KSHRujan
              </span>
            </NavLink>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-lg font-medium transition-all hover:text-[#94DEA5] ${
                      isActive
                        ? 'text-[#94DEA5]'
                        : isScrolled ? 'text-gray-700' : 'text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              {/* Donate Now Button */}
              <NavLink
                to="/Donation"
                className="bg-[#94DEA5] text-gray-900 px-6 py-2 rounded-md text-lg font-medium hover:bg-[#7BC98E] transition-all transform hover:scale-105"
              >
                Donate Now
              </NavLink>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-[#94DEA5] focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-lg font-medium ${
                  isActive
                    ? 'text-[#94DEA5] bg-gray-50'
                    : 'text-gray-700 hover:text-[#94DEA5] hover:bg-gray-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          {/* Donate Now Button for Mobile */}
          <NavLink
            to="/Donation"
            className="block w-full bg-[#94DEA5] text-gray-900 px-3 py-2 rounded-md text-lg font-medium hover:bg-[#7BC98E] transition-colors mt-2"
            onClick={() => setIsOpen(false)}
          >
            Donate Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;