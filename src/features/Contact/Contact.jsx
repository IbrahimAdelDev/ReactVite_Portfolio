// import Myphoto from '../../assets/images/Portfolio_image.png';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/footer/Footer.jsx';
import bgHeroImage from '../../assets/images/bg-portfolio.png'; 
import ContactForm from '../../components/Contactpage_Components/ContactForm.jsx';
import ContactDetails from '../../components/Contactpage_Components/ContactDetails.jsx';

import {
  HeroSectionStyle,
  leftDiv,
  rightDiv,
} from './Contact.style.js';
import './Contact.css';

const ContactPage = () => {
  return (
    <>
      <section
        className={`pt-10 md:py-4 select-none relative bg-cover bg-center bg-no-repeat w-full min-h-lvh`}
        style={{backgroundImage: `url(${bgHeroImage})`}}
      >
        <Navbar />
        <div className={`${HeroSectionStyle} pt-20 md:pt-20 px-10 z-10 mb-6`}>
          <div className={leftDiv}>
            <ContactDetails />
          </div>
          <div className={`${rightDiv}`}>
          <ContactForm />
          </div>
        </div>
        <div className='hidden md:flex bg-gray-700 w-fit mx-auto mb-0 py-4 px-8 rounded-full'>
          <Contact className={`hidden md:flex`} />
        </div>
        <Footer className={`flex md:hidden`} />
      </section>
    </>
  );
};

export default ContactPage;
