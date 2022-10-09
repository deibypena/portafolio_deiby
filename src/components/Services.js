import { React, useRef } from 'react';
import { useInView } from "framer-motion";

function Services() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className='cards' ref={ref}>
            <div className='card' 
              style={{
                transform: isInView ? "none" : "translateY(150px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
            >
                <h2>Diseño de<span>UI/UX</span></h2>
                <p>Diseñaré sitios web y aplicaciones hermosos, limpios, simples y modernos.</p>
            </div>
            <div className='card' 
              style={{
                transform: isInView ? "none" : "translateY(150px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
              }}
            >
                <h2>Desarrollo<span>front-end</span></h2>
                <p>Desarrollaré su sitio web front-end, con un código limpio y comprensible.</p>
            </div>
            <div className='card' 
              style={{
                transform: isInView ? "none" : "translateY(150px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
              }}
            >
                <h2>Flujo web y<span>Wordpress</span></h2>
                <p>Desarrollaré un sitio web simple y hermoso sin código con Webflow o wordpress</p>
            </div>
            <div className='card' 
              style={{
                transform: isInView ? "none" : "translateY(150px)",
                opacity: isInView ? 1 : .5,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
              }}
            >
                <h2>Gráficos de<span>movimiento</span></h2>
                <p>Diseñaré y crearé animaciones 2D que alineen la marca de tu negocio.</p>
            </div>
      </div>
    </>
  )
}

export default Services
