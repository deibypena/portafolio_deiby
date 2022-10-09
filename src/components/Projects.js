import React from 'react';
import { FaEye } from 'react-icons/fa';
import {db} from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";

function Projects() {  
    
    window.addEventListener('load', function () {
        allData()
    });

    const leerData = async (technology) => {

        const q = query(collection(db, "projects"), where("technology", "==", technology));

        const querySnapshot = await getDocs(q);
        let projects = document.getElementById('projects-images');

        projects.innerHTML = "";
        querySnapshot.forEach((doc) => {
            projects.innerHTML += `
                <div class="projects-images__card">
                    <img class="proyects-images__img" src=${doc.data().url} alt=${doc.data().alt} />
                    <div class="proyects-images__text">
                        <h3>${doc.data().name}</h3>
                        <a href="#"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg></a>
                    </div>
                </div>
            `;
        });   
    }    

    const allData = async () => {
        
        const querySnapshot = await getDocs(collection(db, "projects"));
        let projects = document.getElementById('projects-images');
        projects.innerHTML = "";
        querySnapshot.forEach((doc) => {
            projects.innerHTML += `
                <div class="projects-images__card">
                    <img class="proyects-images__img" src=${doc.data().url} alt=${doc.data().alt} />
                    <div class="proyects-images__text">
                        <h3>${doc.data().name}</h3>
                        <a href="#"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg></a>
                    </div>
                </div>
            `;
        });
    }   

    return (
        <>
            <div className="proyects">
                <nav className='nav-projects'>
                    <button onClick={ () => allData() } className="btn">
                        <span className='btn-nth1'>Todos</span>
                        <span className='btn-nth2'>Todos</span>
                    </button>

                    <button onClick={ () => leerData('html') } className="btn">
                        <span className='btn-nth1'>Html Css Js</span>
                        <span className='btn-nth2'>Html Css Js</span>
                    </button>

                    <button onClick={ () => leerData('rcss') } className="btn">
                        <span className='btn-nth1'>Retos CSS</span>
                        <span className='btn-nth2'>Retos CSS</span>
                    </button>

                    <button onClick={ () => leerData('rjs') } className="btn">
                        <span className='btn-nth1'>Retos JS</span>
                        <span className='btn-nth2'>Retos JS</span>
                    </button>

                    <button onClick={ () => leerData('firebase') } className="btn">
                        <span className='btn-nth1'>Firebase</span>
                        <span className='btn-nth2'>Firebase</span>
                    </button>

                    <button onClick={ () => leerData('react') } className="btn">
                        <span className='btn-nth1'>React</span>
                        <span className='btn-nth2'>React</span>
                    </button>

                    <button onClick={ () => leerData('php') } className="btn">
                        <span className='btn-nth1'>PHP</span>
                        <span className='btn-nth2'>PHP</span>
                    </button>

                    <button onClick={ () => leerData('wp') } className="btn">
                        <span className='btn-nth1'>Wordpress</span>
                        <span className='btn-nth2'>Wordpress</span>
                    </button>
                </nav>
                <div id='projects-images' className="proyects-images"></div>
            </div>
        </>
    )
}

export default Projects;
