import { Link } from 'react-router-dom';
import bgHeroImage from '../../assets/images/bg-portfolio.png';
import Contact from '../../components/Contact.jsx';
// import WhatsappIcon from '../../assets/images/Platform=WhatsApp, Color=Original.svg';
// import Github from '../../assets/images/Platform=Github, Color=Negative.svg';
// import Linkedin from '../../assets/images/Platform=LinkedIn, Color=Original.svg';
// import Gmail from '../../assets/images/g-mail.svg';
// import Phone from '../../assets/images/call-02.svg';

import {
  NavbarStyle,
  Logo,
  LinkStyle,
} from './Navbar.style.js';

import './Navbar.css';
const Navbar = ({ className }) => {
  return (
    <>
      <nav
        className={`${className} ${NavbarStyle} px-10 pb-4 fixed w-full top-0 bg-top md:bg-cover`}
        style={{backgroundImage: `url(${bgHeroImage})`}}
      >
        <div
          className={`lg:px-16 md:px-12 px-8 w-full flex flex-col md:flex-row justify-center md:justify-between items-cente`}
        >
          <div className="py-4">
            <Link to="/" className={`${Logo}`}>
              <span>
                <span className="text-red-700">Ibrahim</span> Adel
              </span>
            </Link>
          </div>
          <div className="w-fit hidden md:flex h-fit py-4">
            <Link to="/" className={`${LinkStyle}`}>
              Home
            </Link>
            <Link to="/about" className={`${LinkStyle}`}>
              About
            </Link>
            <Link to="/services" className={`${LinkStyle}`}>
              Services
            </Link>
            <Link to="/work" className={`${LinkStyle}`}>
              Work
            </Link>
            <Link to="/contact" className={`${LinkStyle}`}>
              Contact
            </Link>
          </div>
          <Contact className={`flex md:hidden`} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
