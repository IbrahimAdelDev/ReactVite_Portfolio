import { useEffect } from 'react';
import config from './../../particlesjs-config.json';
import bgHeroImage from '../assets/images/bg-portfolio.png'; 


const ParticleComponent = ({ className = '' }) => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', config);
    }
  }, []);

  return (
    <div
      id="particles-js"
      className={`fixed top-0 left-0 w-screen h-screen z-[10] pointer-events-auto ${className}`}
      style={{backgroundImage: `url(${bgHeroImage})`}}
    />
  );
};

export default ParticleComponent;
