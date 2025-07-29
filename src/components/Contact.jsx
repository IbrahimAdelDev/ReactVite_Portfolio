import React from 'react'
import WhatsappIcon from '../assets/images/Platform=WhatsApp, Color=Original.svg';
import Github from '../assets/images/Platform=Github, Color=Negative.svg';
import Linkedin from '../assets/images/Platform=LinkedIn, Color=Original.svg';
import Gmail from '../assets/images/g-mail.svg';
import Phone from '../assets/images/call-02.svg';
import CV from '../assets/images/Load_list_alt_light.svg';

const Contact = ({ className }) => {
  return (
    <div className={`${className} justify-center align-center gap-4`} style={{ color: 'white' }}>
      <a href="https://api.whatsapp.com/send?phone=201028089643" target="_blank" rel="noopener noreferrer">
        <img src={WhatsappIcon} alt="WhatsApp" className="w-6 h-6 hover:opacity-60" />
      </a>
      <a href="https://github.com/IbrahimAdelDev" target="_blank" rel="noopener noreferrer">
        <img src={Github} alt="GitHub" className="w-6 h-6 hover:opacity-60" />
      </a>
      <a href="https://www.linkedin.com/in/ibrahimadeldev/" target="_blank" rel="noopener noreferrer">
        <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 hover:opacity-60" />
      </a>
      <a href="mailto:ibrahimadeldev@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src={Gmail} alt="Gmail" className="w-6 h-6 hover:opacity-60" />
      </a>
      <a href="tel:+201028959943" target="_blank" rel="noopener noreferrer">
        <img src={Phone} alt="Phone" className="w-6 h-6 hover:opacity-60" />
      </a>
      <a href="tel:+201028959943" target="_blank" rel="noopener noreferrer">
        <img src={CV} alt="Phone" className="w-6 h-6 hover:opacity-60" />
      </a>
    </div>
  )
}

export default Contact