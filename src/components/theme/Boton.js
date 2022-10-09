import { React, useState } from 'react';
import { motion } from "framer-motion";
import { FaSun, FaMoon } from 'react-icons/fa';

const Boton = () => {

  const [isOn, setIsOn] = useState(false);

  window.addEventListener('load', function() {
    if(localStorage.getItem('theme') === "dark") {
      setIsOn(!isOn);
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem('theme', 'dark');
    } else {
      setIsOn(isOn);
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem('theme', 'light');
    }
  });

  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (isOn) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem('theme', 'dark');
    }
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (   

    <div className='nav-links__toggle' id='navToggle'>
      <button 
        className="switch" 
        data-ison={isOn} 
        onClick={toggleSwitch}
      >
        
        <motion.div className="handle" layout transition={spring} />
        <span className='sun'><FaSun /></span>
        <span className='moon'><FaMoon /></span>
      </button>
    </div>
    
  )
}

export default Boton
