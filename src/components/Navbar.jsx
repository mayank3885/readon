import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo3 from "../assets/logo3.png";
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fade } from 'react-awesome-reveal';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageSelect = (url) => {
    window.open(url, '_blank');  // Redirect to the selected domain
  };

  return (
    <div className="text-black fixed w-full z-50 left-0 bg-white">
      {/* Logo Section */}
      <nav style={{ width: '100%', margin: 'auto', flexDirection: 'row' }} className='width-1800 flex justify-between items-center bg-white px-6 md:px-12 py-4'>
        <Fade direction='left' damping={0.4} triggerOnce={true}>
          <div className="flex items-center space-x-4 ">
            <div className="h-12 w-28">
              <img src={logo3} alt="ReadON Logo" className="h-full w-full object-contain" />
            </div>
          </div>
        </Fade>
        {/* Desktop Navbar Links */}
        <Fade direction='top' damping={0.8} triggerOnce={true}>
          <div className="hidden lg:flex flex-grow justify-center max-w-screen-xl w-full font18-bold" style={{ maxWidth: '1600px' }}>
            <div className="flex space-x-6 justify-center w-full max-w-screen-xl">
              <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Home</Link>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">About</Link>
              <Link to="whychooseus" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Why Choose Us?</Link>
              <Link to="benefits" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Benefits</Link>
              <Link to="approach" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Our Approach</Link>
              <Link to="howdoes" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">How Does It Work?</Link>
              <Link to="testimonial" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Testimonials</Link>
              <Link to="awards" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Awards</Link>
            </div>
          </div>
        </Fade>

        {/* Language Selector (Indian Flag) and Sign In Button */}
        <Fade direction='right' damping={0.4} triggerOnce={true}>
          <div className="hidden lg:flex items-center space-x-3">
            {/* <button
              onClick={() => handleLanguageSelect('https://india.example.com')}
              className="flex items-center space-x-1 cursor-pointer text-black hover:text-gray-600 mr-5"
            >
              <img src={flag} alt="India Flag" className="h-5 w-5" />
              <span>IN</span>
            </button> */}
          </div>
        </Fade>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navbar Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white z-40 lg:hidden flex flex-col items-center space-y-4 py-4">
            <Link to="home" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer hover:text-gray-600">Home</Link>
            <Link to="about" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer hover:text-gray-600">About</Link>
            <Link to="whychooseus" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer hover:text-gray-600">Why Choose Us?</Link>
            <Link to="benefits" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer hover:text-gray-600">Benefits</Link>
            <Link to="approach" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer hover:text-gray-600">Our Approach</Link>
            <Link to="howdoes" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer hover:text-gray-600">How Does It Work?</Link>
            <Link to="testimonial" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer hover:text-gray-600">Testimonials</Link>
            <Link to="awards" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer hover:text-gray-600">Awards</Link>

            {/* Mobile Language Selector (Indian Flag) */}
            <div className="flex justify-center">
              {/* <button
                onClick={() => handleLanguageSelect('https://india.example.com')}
                className="flex items-center space-x-1 cursor-pointer text-black hover:text-gray-600 pr-5"
              >
                <img src={flag} alt="India Flag" className="h-5 w-5" />
                <span>IN</span>
              </button> */}
            </div>

            {/* <button className="bg-[#FB8500] text-white rounded hover:bg-[#dc933f] transition focus:outline-none px-2 py-1">
              Sign In
            </button> */}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
