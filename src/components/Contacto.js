import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import iconForm from '../images/icon-form-send.png'

function Contacto() {

    const [state, handleSubmit] = useForm("xbjwanlr");
    if (state.succeeded) {
        const form = document.querySelector('.contacto-form');
        form.innerHTML = `
            <h3>Mensaje enviado con éxito</h3>
            <img src=${iconForm} />
        `;
    }

    return (
        <div className='contacto'>
        <div className="contacto-social">
            <p>Para obtener mi servicio, no dude en ponerse en contacto conmigo y me aseguraré de dar lo mejor de mí.</p>
            <h3>Correo</h3>
            <p>deiby.penaa@gmail.com</p>
            <h3>Redes</h3>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>

        </div>
        <form onSubmit={handleSubmit} className="contacto-form">
            <input
                id="email"
                type="email" 
                name="email"
                placeholder='Tu correo'
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder='Tu mensaje'
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className="btn">
                <span className='btn-nth1'>Enviar</span>
                <span className='btn-nth2'>Enviar</span>
            </button>
        </form>
        </div>
    )
}

export default Contacto
