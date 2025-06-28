import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-soulblue-800 py-4 sticky top-0 z-50 shadow-lg border-b border-soulblue-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-soulblue-300 to-soulblue-500">
              NextLvlGames
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-soulblue-300 transition duration-300">Home</Link>
            <Link to="/games" className="text-white hover:text-soulblue-300 transition duration-300">Games</Link>
            <Link to="/about" className="text-white hover:text-soulblue-300 transition duration-300">About</Link>
            <Link to="/community" className="text-white hover:text-soulblue-300 transition duration-300">Community</Link>
            <Link to="/contact" className="text-white hover:text-soulblue-300 transition duration-300">Contact</Link>
            <Link to="/employee-verification" className="text-soulblue-300 hover:text-white transition duration-300">Employee</Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-white hover:text-soulblue-300 transition duration-300">
              Sign In
            </button>
            <button className="px-4 py-2 bg-soulblue-500 hover:bg-soulblue-600 rounded font-medium transition duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-soulblue-300 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-soulblue-700">            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-soulblue-300 transition duration-300">Home</Link>
              <Link to="/games" className="text-white hover:text-soulblue-300 transition duration-300">Games</Link>
              <Link to="/about" className="text-white hover:text-soulblue-300 transition duration-300">About</Link>
              <Link to="/community" className="text-white hover:text-soulblue-300 transition duration-300">Community</Link>
              <Link to="/contact" className="text-white hover:text-soulblue-300 transition duration-300">Contact</Link>
              <Link to="/employee-verification" className="text-soulblue-300 hover:text-white transition duration-300">Employee</Link>
            </div>
            <div className="mt-6 flex flex-col space-y-4">
              <button className="px-4 py-2 text-white hover:text-soulblue-300 transition duration-300 text-left">
                Sign In
              </button>
              <button className="px-4 py-2 bg-soulblue-500 hover:bg-soulblue-600 rounded font-medium transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;