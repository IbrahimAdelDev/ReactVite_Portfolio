import React from 'react';
import { Link } from 'react-router-dom';
import MyLogo from '../../assets/images/Myiconlight.svg';
import MyLogo2 from '../../assets/images/Myiconlight2.svg';
import { useState } from 'react';

import {
  NavbarStyle,
  Logo,
  Theme,
  LinkStyle,
  MobileLinkStyle,
} from './Navbar.style.js';

import './Navbar.css';
const Navbar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`${className} ${NavbarStyle} ${
          isOpen ? 'h-52 !ms:h-12' : ''
        }`}
      >
        <div
          className={`px-8 md:px-16 w-full h-12 flex justify-between items-center relative z-50 ${
            className ? 'bg-blue-100' : 'bg-blue-50'
          }`}
        >
          <div className="relative z-50">
            <Link to="/" className={`${Logo} relative z-50`}>
              <img
                src={className ? MyLogo2 : MyLogo}
                alt="Logo"
                className="h-8 w-8 mr-2"
              />
              <span>
                in<span className="text-green-500">:</span>Code
              </span>
            </Link>
          </div>
          <div className="w-fit hidden sm:block">
            <Link to="/projects" className={`${LinkStyle}`}>
              Projects
            </Link>
            <Link to="/about" className={`${LinkStyle}`}>
              About
            </Link>
            <Link to="/blogs" className={`${LinkStyle}`}>
              Blogs
            </Link>
            <Link to="/services" className={`${LinkStyle}`}>
              Services
            </Link>
          </div>
          <div className="flex">
            <div className={Theme}></div>
            <button
              className="block sm:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? 'Close' : 'Open'}
            </button>
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-900 linear ease-in-out 
    ${className ? 'bg-blue-100' : 'bg-blue-50'} sm:hidden flex-col w-full
    ${
      isOpen
        ? 'translate-y-0 max-h-[500] opacity-100 flex relative z-10'
        : '-translate-y-full max-h-0 pointer-events-none'
    }`}
        >
          <Link
            to="/projects"
            className={`${MobileLinkStyle} ${
              className ? 'hover:bg-blue-50' : 'hover:bg-blue-100'
            }`}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className={`${MobileLinkStyle} ${
              className ? 'hover:bg-blue-50' : 'hover:bg-blue-100'
            }`}
          >
            About
          </Link>
          <Link
            to="/blogs"
            className={`${MobileLinkStyle} ${
              className ? 'hover:bg-blue-50' : 'hover:bg-blue-100'
            }`}
          >
            Blogs
          </Link>
          <Link
            to="/services"
            className={`${MobileLinkStyle} ${
              className ? 'hover:bg-blue-50' : 'hover:bg-blue-100'
            }`}
          >
            Services
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
