import './Navbar.css';
import TLogo from "./TLogo.jpeg"
import {Link} from 'react-scroll'
import contact from "./Email.png"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Navbar=()=>{
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qyoshyo', 'template_fcu47yb', form.current, {
        publicKey: 'ewRtBavXKW1ZFD6OB_G_L',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }

  return (
    <nav className="navbar">
      <img  className='logo' src={TLogo} alt="img" />
      <div className='desktopMenuList'>
           <Link activeClass='active' to='intro'   spy={true}  smooth={true}   duration={500} className='ListItem'>Home</Link>
           <Link activeClass='active' to='skills'   spy={true}  smooth={true} offset={-50}  duration={500} className='ListItem'>Skills</Link>
           <Link activeClass='active' to='Projects'   spy={true}  smooth={true} offset={-60} duration={500} className='ListItem'>Projects</Link>
            <Link activeClass='active' to='contact'   spy={true}  smooth={true} offset={-60} duration={500} className='ListItem'>About</Link>
      </div>
      <button className='desktopMenuButton' onClick={sendEmail}>
            <img src={contact}  className='desktopMenuImg' />
            Contact me
      </button>
    </nav>
  )
}
export default Navbar;