import { React, useState } from 'react';
import Boton from './theme/Boton';
import LogoDeiby from '../images/logo-deiby.svg';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";

const Header = () => {

  window.addEventListener('load', function() {
    if (localStorage.getItem('color-user')) {
      document.querySelector(':root').style.setProperty('--main-color', localStorage.getItem('color-user'));
      document.querySelector(':root').style.setProperty('--second-color', localStorage.getItem('color-user-2'));
    }
  });

  const [btnMovile, setBtnMovile] = useState(true);

  const handlerBtnMovile = () => {
    setBtnMovile(!btnMovile)
    document.querySelector(".nav-movile").classList.toggle("active");
    document.querySelector(".nav-links").classList.toggle("active");
  }

  return (
    <header className='header'>
      <nav className='nav'>
          <div className='nav-logo'>
            <img src={LogoDeiby} alt="deiby peña" />
            <span>Deiby Peña</span>
          </div>
          <div className='nav-links'>
            <div className='nav-links__link'>Proyectos</div>
            <div className='nav-links__link'>Habilidades</div>
            <div className='nav-links__link'>Contacto</div>
            <Boton />
          </div>
          <div className="nav-movile" onClick={ () => handlerBtnMovile() }>
            <span className="nav-movile__bar"></span>
            <span className="nav-movile__bar"></span>
            <span className="nav-movile__bar"></span>
          </div>
      </nav>

      <main>
        <section className='home'>
            <div className='home-content'>
              <div className='home-content-autor'><span>Hola, me llamo</span><h1>Deiby Peña</h1>
              <motion.span 
                transition={{ duration: 1, repeat: Infinity }}
                animate={{
                  rotate: [16, 0, 16]
                }}
              >👋</motion.span></div>
              <div className='home-content-autor__info'>UX/UI/Diseñador y desarrollador front-end</div>
              <div className='home-content__text'>Ayudo a las personas y las marcas a alcanzar sus objetivos mediante el diseño y la creación de productos digitales centrados en el usuario y experiencias interactivas.</div>
              <div className='home-content__btn'>
                <a href='#' className='btn'>
                    <span className='btn-nth1'>Ver proyectos</span>
                    <span className='btn-nth2'>Ver proyectos</span>
                </a>
                <a href='#' className='btn'>
                    <span className='btn-nth1'>Mas sobre mi</span>
                    <span className='btn-nth2'>Mas sobre mi</span>
                </a>
              </div>
              <div className="home-content__social">
                <FaGithub />
                <FaLinkedinIn />
              </div>
            </div>
            <motion.div 
              className='home-img'
              transition={{ duration: 2 }} 
              animate={{
                scale: [.5, 1],
                borderRadius: ["10%", "50%"],
              }}>
              <div className='img'></div>
            </motion.div>
        </section>
      </main>
    </header>
  )
}

export default Header;
