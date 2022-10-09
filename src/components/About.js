import { React, useRef } from 'react';
import iconHtml from '../images/icon-html.svg';
import iconCss from '../images/icon-css.svg';
import iconSass from '../images/icon-sass.svg';
import iconBootstrap from '../images/icon-bootstrap.svg';
import iconTailwind  from '../images/icon-tailwind.svg';
import iconJs  from '../images/icon-js.svg';
import iconReact  from '../images/icon-react.svg';
import iconFirebase  from '../images/icon-firebase.svg';
import iconMysql  from '../images/icon-mysql.svg';
import iconPhp  from '../images/icon-php.svg';
import iconWordpress  from '../images/icon-wordpress.svg';
import { useInView } from "framer-motion";

function About() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className='about'  ref={ref}>
        <p className='about-text'>
        ¡Hola! Soy Deiby Peña, un desarrollador de software creativo, soy de Colombia y disfruto crear páginas web. Mi objetivo es crear productos y soluciones escalables para problemas de la vida real.
        </p>
        <div className='about-icons'>
            <img
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }} 
             src={iconHtml} className='about-icons__icon' />
            <img
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
              }} 
             src={iconCss} className='about-icons__icon' />
            <img
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
              }}
              src={iconSass} className='about-icons__icon' />
            <img 
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
              }}
              src={iconBootstrap} className='about-icons__icon' />
            <img
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
              }}
              src={iconTailwind} className='about-icons__icon' />
            <img 
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
              }}
              src={iconJs} className='about-icons__icon' />
            <img 
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.1s"
              }}
              src={iconReact} className='about-icons__icon' />
            <img 
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s"
              }}
              src={iconFirebase} className='about-icons__icon' />
            <img 
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s"
              }}
              src={iconMysql} className='about-icons__icon' />
            <img 
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.4s"
              }}
              src={iconPhp} className='about-icons__icon' />
            <img 
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
              }}
              src={iconWordpress} className='about-icons__icon' />
        </div>
      </div>
    </>
  )
}

export default About
