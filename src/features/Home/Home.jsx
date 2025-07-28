import Myphoto from '../../assets/images/Portfolio_image.png';
import bgHeroImage from '../../assets/images/bg-portfolio.png'; // أضف هذا السطر
import Navbar from '../../components/Navbar/Navbar.jsx';
// import useScroll from '../../hooks/UseScroll.js';
import ParticleComponent from '../../components/ParticleComponent.jsx';

import {
  HeroSectionStyle,
  MyphotoStyle,
  leftDiv,
  rightDiv,
  H1Style,
  PStyle,
  LinkBtnStyle,
  // bgImage, // This is the background image style
  // BubbleStyle,
} from './Home.style.js';
import './Home.css';

const Home = () => {
  // const showFixedNavbar = useScroll('HeroSection');
  return (
    <>
      <Navbar className={'fixed w-full top-0'}/>
      <ParticleComponent className={`bg-cover bg-center bg-no-repeat h-screen w-full`}
        style={{backgroundImage: `url(${bgHeroImage})`}}
       />
      <section
        className={`${HeroSectionStyle} HeroSectionStyle`}
        id="HeroSection"
      >
        <div className={leftDiv}>
          <h1 className={H1Style}>
            Hi, I am Ibrahim
            <br /> I am a Front End Developer
          </h1>
          <p className={PStyle}>
            Front-End Developer skilled in React.js, focused on building fast,
            user-friendly web apps. Built and optimized 5+ interactive projects
            with modern JavaScript. Passionate about learning, problem-solving,
            and teamwork.
          </p>
          <a
            href="/Ibrahim_Adel_Elkerdawy_CV.pdf"
            download="Ibrahim_Adel_Elkerdawy_CV.pdf"
            className={LinkBtnStyle}
          >
            download
          </a>
        </div>
        <div className={rightDiv}>
          <img
            className={`MyphotoStyle ${MyphotoStyle}`}
            src={Myphoto}
            alt="Profile"
          />
        </div>
      </section>
      {/* <ParticleComponent className={`bg-[#214979]`} /> */}
      {/* <Navbar
        className={`!bg-blue-100 overflow-hidden transition-transform ease-in-out duration-900
    ${
      showFixedNavbar
        ? 'fixed w-full top-0 translate-y-0 min-h-12 opacity-100'
        : 'absolute top-0 -translate-y-full max-h-0 opacity-0 pointer-events-none'
    }
  `}
      /> */}
      {/* <div className="w-full h-dvh">
        <div className="h-96 bg-blue-500 w-96"></div>
      </div> */}
    </>
  );
};

export default Home;
