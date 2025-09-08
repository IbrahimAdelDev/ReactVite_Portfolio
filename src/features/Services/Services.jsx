import Myphoto from '../../assets/images/Portfolio_image.png';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/footer/Footer.jsx';
import bgHeroImage from '../../assets/images/bg-portfolio.png'; 
import Steps from '../../components/Steps.jsx';
import Swipper from '../../components/Swipper.jsx';
import BackendHighlights from '../../components/BackendHighlights.jsx';
import CTA from '../../components/CTA.jsx';


import {
  HeroSectionStyle,
  MyphotoStyle,
  leftDiv,
  rightDiv,
  H1Style,
  PStyle,
} from './Services.style.js';
import './Services.css';

// const tabsData = [
//   { label: "overview", content: <Overview /> },
//   { label: "experience", content: <Experience /> },
//   { label: "skills", content: <Skills /> },
//   { label: "education", content: <Education /> },
//   { label: "highlights", content: <Highlights /> },
// ];

const Services = () => {
  return (
    <>
      <section
        className={`pb-6 select-none relative bg-cover bg-center bg-no-repeat w-full min-h-lvh`}
        style={{backgroundImage: `url(${bgHeroImage})`}}
      >
        <Navbar />
        <div className={`${HeroSectionStyle} pt-20 md:pt-20 px-10 z-10`}>
          <div className={leftDiv}>
            <h1 className={H1Style}>
              My Services <span className="text-red-700">.</span>
            </h1>
            <p className={PStyle}>
              Designing and building scalable back-end systems and IoT integrations with
               a focus on security, reliability, and clean architectures. From APIs & data
                pipelines to cloud-native deployments and automation.
            </p>
            <Steps/>
          </div>
          <div className={`${rightDiv}`}>
            {/* <Taps tabs={tabsData} /> */}
            <div className='w-full p-1 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-lg mb-6'>
              <Swipper />
            </div>
            <div>
              <BackendHighlights />
            </div>
          </div>
        </div>
        <CTA />
        <div className='hidden md:flex bg-gray-700 w-fit mx-auto mb-0 py-4 px-8 rounded-full'>
          <Contact className={`hidden md:flex`} />
        </div>
        <Footer className={`flex md:hidden`} />
      </section>
    </>
  );
};

export default Services;
