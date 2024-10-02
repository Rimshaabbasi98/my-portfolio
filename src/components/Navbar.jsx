import React, { useState } from 'react';
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram, FaStar, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:w-[25%] w-full lg:h-screen bg-teal-500 text-white font-bold fixed top-0 left-0 lg:flex lg:flex-col lg:justify-center lg:items-center lg:py-4 lg:pl-4 z-50">
      {/* Mobile Menu Toggle (Hamburger Icon) */}
      <div className="lg:hidden p-4 flex justify-between items-center">
        <img src="/logo-white.png" alt="Logo" className="w-[50px]" /> 
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div className="hidden lg:flex justify-center mt-4 mb-4 lg:mt-0">
        <img src="/logo-white.png" alt="Logo" className="w-[80px]" />
      </div>

      {/* Navigation Menu */}
      <ul className={`lg:flex lg:flex-col lg:items-center lg:space-y-6 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden lg:block'} lg:h-auto h-full`}>
        <NavItem icon={<FaHome />} label="Home" closeMenu={closeMenu} />
        <NavItem icon={<FaUser />} label="About" closeMenu={closeMenu} />
        <NavItem icon={<FaEnvelope />} label="Contact" closeMenu={closeMenu} />
        <NavItem icon={<FaProjectDiagram />} label="Projects" closeMenu={closeMenu} />
        <NavItem icon={<FaStar />} label="Skills" closeMenu={closeMenu} />
      </ul>
    </div>
  );
}

function NavItem({ icon, label, closeMenu }) {
  return (
    <li className="w-full list-none">
      <a href={`#${label.toLowerCase()}`} onClick={closeMenu} className="flex items-center px-8 py-4 border border-white rounded-lg hover:bg-teal-600">
        <span className="mr-2">{icon}</span>
        {label}
      </a>
    </li>
  );
}

export default Navbar;
