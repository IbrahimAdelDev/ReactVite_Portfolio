import Myphoto from '../../assets/images/Portfolio_image.png';
import Navbar from '../../components/Navbar/Navbar.jsx';
import ParticleComponent from '../../components/ParticleComponent.jsx';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/footer/Footer.jsx';

import {
  HeroSectionStyle,
  MyphotoStyle,
  leftDiv,
  rightDiv,
  H1Style,
  PStyle,
} from './Home.style.js';
import './Home.css';

const Home = () => {
  return (
    <>
      <ParticleComponent className="absolute inset-0" />
      <section
        className={`select-none relative bg-cover bg-center bg-no-repeat w-full min-h-lvh`}
        // style={{backgroundImage: `url(${bgHeroImage})`}}
      >
        {/* <ParticleComponent className="absolute inset-0 z-0" /> */}
        <Navbar className={''}/>
        <div className={`${HeroSectionStyle} pt-32 md:pt-32 px-10 z-10`}>
          <div className={leftDiv}>
            <h1 className={H1Style}>
              Turning Ideas Into Scalable Systems With
              <br/><span className="text-red-700">Code & Architecture</span>
              {/* I'm <span className="text-red-700">Ibrahim Adel</span>
              <br />Back-End Developer */}
            </h1>
            <p className={PStyle}>
              
            As a passionate Back-End Developer specialized in the MERN stack, I focus on building scalable, secure, and maintainable server-side systems.
            Explore my latest projects and APIs, where I transform business logic into powerful back-end solutions using Node.js, Express, MongoDB, and modern authentication and testing practices.


            </p>
          </div>
          <div className={rightDiv}>
            <img
              className={`MyphotoStyle ${MyphotoStyle}`}
              src={Myphoto}
              alt="Profile"
            />
          </div>
        </div>
        <div className='hidden md:flex bg-gray-700 w-fit mx-auto mb-6 py-4 px-8 rounded-full'>
          <Contact className={`hidden md:flex`} />
        </div>
        <Footer className={`flex md:hidden`} />
      </section>
    </>
  );
};

export default Home;
