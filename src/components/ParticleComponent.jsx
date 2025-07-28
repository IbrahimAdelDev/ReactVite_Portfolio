// components/ParticleComponent.jsx

import React, { useEffect } from 'react';
import config from './../../particlesjs-config.json';

const ParticleComponent = ({ className = '' }) => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', config);
    }
  }, []);

  return (
    <div
      id="particles-js"
      className={`fixed top-0 left-0 w-screen h-screen z-[-1] pointer-events-auto ${className}`}
    />
  );
};

export default ParticleComponent;
