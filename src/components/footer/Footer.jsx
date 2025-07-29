import React from 'react'
import { Link } from 'react-router-dom';
import Home from '../../assets/images/home.svg';
import About from '../../assets/images/User_fill.svg';
import Services from '../../assets/images/pie_chart_fill.svg';
import Work from '../../assets/images/code-square.svg';
import ContactIcon from '../../assets/images/Message_fill.svg';
import CV from '../../assets/images/Load_list_alt_light.svg';
import bgHeroImage from '../../assets/images/bg-portfolio.png';


import {
  FooterStyle,
} from './Footer.style.js'

const Footer = ({ className }) => {
  return (
    <>
      <footer className={`${className} ${FooterStyle} bg-center bg-cover`}
        style={{backgroundImage: `url(${bgHeroImage})`}}
      >
        <Link to="/" className="text-white hover:bg-gray-700 hover:opacity-90 justify-center px-4 rounded-lg">
          <img src={Home} alt="Home" className="w-8 h-16 inline-block" />
        </Link>
        <Link to="/about" className="flex text-white hover:bg-gray-700 hover:opacity-90 justify-center px-4 rounded-lg">
          <img src={About} alt="About" className="w-8 h-16 inline-block" />
        </Link>
        <Link to="/services" className="flex text-white hover:bg-gray-700 hover:opacity-90 justify-center px-4 rounded-lg">
          <img src={Services} alt="Services" className="w-8 h-16 inline-block" />
        </Link>
        <Link to="/work" className="flex text-white hover:bg-gray-700 hover:opacity-90 justify-center px-4 rounded-lg">
          <img src={Work} alt="Work" className="w-8 h-16 inline-block" />
        </Link>
        <Link to="/contact" className="flex text-white hover:bg-gray-700 hover:opacity-90 justify-center px-4 rounded-lg">
          <img src={ContactIcon} alt="Contact" className="w-8 h-16 inline-block" />
        </Link>
        <a
          href="/Ibrahim_Adel_Elkerdawy_CV.pdf"
          download="Ibrahim_Adel_Elkerdawy_CV.pdf"
          className="flex text-white hover:bg-gray-700 hover:opacity-90 justify-center px-4 rounded-lg"
        >
          <img src={CV} alt="CV" className="w-8 h-16 inline-block" />
        </a>
      </footer>
    </>
  )
}

export default Footer