import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo3 from "../assets/logo3.png";
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import flag from '../assets/india-flag.svg'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageSelect = (url) => {
    window.open(url, '_blank');  // Redirect to the selected domain
  };

  return (
    <div className="text-black fixed w-full z-50 shadow-md left-0 bg-white">
      {/* Logo Section */}
      <nav style={{ maxWidth: '1600px', width: '100%', margin: 'auto', flexDirection: 'row' }} className='flex justify-between items-center bg-white px-6 md:px-10 py-4'>
        <div className="flex items-center space-x-4 ">
          <div className="h-12 w-28">
            <img src={logo3} alt="ReadON Logo" className="h-full w-full object-contain" />
          </div>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex flex-grow justify-center max-w-screen-xl w-full font18-bold" style={{ maxWidth: '1600px' }}>
          <div className="flex space-x-6 justify-center w-full max-w-screen-xl">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Home</Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">About</Link>
            <Link to="whychooseus" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Why Choose Us?</Link>
            <Link to="benefits" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Benefits</Link>
            <Link to="approach" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Our Approach</Link>
          </div>
        </div>

        {/* Language Selector (Indian Flag) and Sign In Button */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => handleLanguageSelect('https://india.example.com')}
            className="flex items-center space-x-1 cursor-pointer text-black hover:text-gray-600 mr-5"
          >
            <img src={flag} alt="India Flag" className="h-5 w-5" />
            <span>IN</span>
          </button>

          <button className="bg-[#FB8500] font18-light text-white px-3 py-1 rounded hover:bg-[#dc933f] transition focus:outline-none" style={{ width: '95px' }}>
            Sign In
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navbar Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-40 md:hidden flex flex-col items-center space-y-4 py-4">
            <Link to="home" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer hover:text-gray-600">Home</Link>
            <Link to="about" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer hover:text-gray-600">About</Link>
            <Link to="whychooseus" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer hover:text-gray-600">Why Choose Us?</Link>
            <Link to="benefits" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer hover:text-gray-600">Benefits</Link>
            <Link to="approach" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer hover:text-gray-600">Our Approach</Link>

            {/* Mobile Language Selector (Indian Flag) */}
            <div className="flex justify-center">
              <button
                onClick={() => handleLanguageSelect('https://india.example.com')}
                className="flex items-center space-x-1 cursor-pointer text-black hover:text-gray-600 pr-5"
              >
                <img src={flag} alt="India Flag" className="h-5 w-5" />
                <span>IN</span>
              </button>
            </div>

            <button className="bg-[#FB8500] text-white rounded hover:bg-[#dc933f] transition focus:outline-none">
              Sign In
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
