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
        <Link to="/" className="relative group text-white hover:bg-gray-700 hover:opacity-90 justify-center px-4 rounded-lg">
          <img src={Home} alt="Home" className="w-8 h-16 inline-block" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 text-xs bg-gray-800 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">Home</span>
        </Link>
        <Link to="/about" className="relative group flex text-white hover:bg-gray-700 hover:opacity-90 justify-center px-4 rounded-lg">
          <img src={About} alt="About" className="w-8 h-16 inline-block" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 text-xs bg-gray-800 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">About</span>
        </Link>
        <Link to="/services" className="relative group flex text-white hover:bg-gray-700 hover:opacity-90 justify-center px-4 rounded-lg">
          <img src={Services} alt="Services" className="w-8 h-16 inline-block" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 text-xs bg-gray-800 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">Services</span>
        </Link>
        <Link to="/work" className="relative group flex text-white hover:bg-gray-700 hover:opacity-90 justify-center px-4 rounded-lg">
          <img src={Work} alt="Work" className="w-8 h-16 inline-block" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 text-xs bg-gray-800 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">Work</span>
        </Link>
        <Link to="/contact" className="relative group flex text-white hover:bg-gray-700 hover:opacity-90 justify-center px-4 rounded-lg">
          <img src={ContactIcon} alt="Contact" className="w-8 h-16 inline-block" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 text-xs bg-gray-800 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">Contact</span>
        </Link>
        <a
          href="/Ibrahim_Adel_Elkerdawy_CV.pdf"
          download="Ibrahim_Adel_Elkerdawy_CV.pdf"
          className="relative group flex text-white hover:bg-gray-700 hover:opacity-90 justify-center px-4 rounded-lg"
        >
          <img src={CV} alt="CV" className="w-8 h-16 inline-block" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 text-xs bg-gray-800 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">CV</span>
        </a>
      </footer>
    </>
  )
}

export default Footer