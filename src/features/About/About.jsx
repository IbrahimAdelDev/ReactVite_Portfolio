import Myphoto from '../../assets/images/Portfolio_image.png';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/footer/Footer.jsx';
import bgHeroImage from '../../assets/images/bg-portfolio.png'; 
import Taps from '../../components/Taps.jsx';
import Experience from '../../components/Experiences.jsx';
import Education from '../../components/Education.jsx';
import Highlights from '../../components/Highlights.jsx';
import Overview from '../../components/Overview.jsx';
import Skills from '../../components/Skills.jsx';


import {
  HeroSectionStyle,
  MyphotoStyle,
  leftDiv,
  rightDiv,
  H1Style,
  PStyle,
} from './About.style.js';
import './About.css';

const tabsData = [
  { label: "overview", content: <Overview /> },
  { label: "experience", content: <Experience /> },
  { label: "skills", content: <Skills /> },
  { label: "education", content: <Education /> },
  { label: "highlights", content: <Highlights /> },
];

const About = () => {
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
              I’m
              <br/><span className="text-red-700">Ibrahim Adel</span>
              <br/>Junior Back-End Engineer
            </h1>
            <p className={PStyle}>

              I build production-grade backends that scale reliably,
               stay secure, and integrate cleanly. I specialize in Node.js,
                Express, and MongoDB extended with PostgreSQL, Laravel, and cloud integrations.
                 Beyond web systems, I have hands-on experience building and integrating IoT systems
                  across multiple domains,
                   from smart devices to connected services.
                    I’m guided by SOLID principles, clean architecture,
                     and a security-first mindset,
                      with proven experience shipping systems that serve 1,000+ users/devices and power real-time applications.
            
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-3/12 flex flex-col items-center justify-around border-r-2 border-gray-600">
                <span className="text-red-700 font-bold text-2xl">+1 yrs</span>
                <p className='text-wrap text-gray-300 text-center text-sm'>Years of
                  <br />Experience</p>
              </div>
              <div className="w-3/12 flex flex-col items-center justify-around border-r-2 border-gray-600">
                <span className="text-red-700 font-bold text-2xl">+5</span>
                <p className='text-wrap text-gray-300 text-center text-sm'>Delivered
                  <br />Projects</p>
              </div>
              <div className="w-3/12 flex flex-col items-center justify-around">
                <span className="text-red-700 font-bold text-2xl">+5</span>
                <p className='text-wrap text-gray-300 text-center text-sm'>Clients</p>
              </div>
            </div>
          </div>
          <div className={rightDiv}>
            <div className='w-full p-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg'>
              <Taps tabs={tabsData} />
            </div>
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

export default About;
