import { React, useRef } from 'react';
import { useInView } from "framer-motion";

function Client() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <>
        <div className="client" ref={ref}>
            <div 
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : .3,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }} 
              className="client-card">
            </div>
            <div 
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : .3,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
              }} 
              className="client-card">
            </div>
            <div 
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : .3,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
              }} 
              className="client-card">
            </div>
            <div 
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : .3,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
              }} 
              className="client-card">
            </div>
        </div>      
    </>
  )
}

export default Client;
