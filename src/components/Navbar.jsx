import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-3">
                <span className="text-lg font-bold">
                  <span className="text-2xl text-slate-700">Muhammad </span>
                  <span className="text-2xl text-blue-500">Aneeb</span>
                </span>
              </a>
            </div>
          </div>
          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#home" className="py-4 px-2 font-semibold text-gray-800 hover:text-blue-500 transition duration-300">
              Home
            </a>
            <a href="#about" className="py-4 px-2 font-semibold text-gray-800 hover:text-blue-500 transition duration-300">
              About
            </a>
            <a href="#skills" className="py-4 px-2 font-semibold text-gray-800 hover:text-blue-500 transition duration-300">
              Skills
            </a>
            <a href="#contact" className="py-4 px-2 font-semibold text-gray-800 hover:text-blue-500 transition duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#home" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Home
        </a>
        <a href="#about" className="block py-2 px-4 text-sm hover:bg-gray-200">
          About
        </a>
        <a href="#skills" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Skills
        </a>
        <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;