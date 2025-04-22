import React, { useEffect } from 'react';
import config from './../../particlesjs-config.json';

const ParticleComponent = (props) => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', config);
    }
  }, []);

  return (
    <div
      id="particles-js"
      className={`${props.className} fixed w-full h-full z-[-1]`}
    />
  );
};

export default ParticleComponent;
