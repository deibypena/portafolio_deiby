import React from 'react';
import { FaPalette } from 'react-icons/fa';

function ThemeToggle() {

    const toggleActive = () => {
        document.querySelector('.theme-toggler').classList.toggle('active');
    }

    const themeToggle = (color, color2) => {
        document.querySelector(':root').style.setProperty('--main-color', color);
        document.querySelector(':root').style.setProperty('--second-color', color2);
        localStorage.setItem('color-user', color);
        localStorage.setItem('color-user-2', color2);
    }

    return (
        <div className='theme-toggler'>
            <div className='toggle-btn' onClick={() => toggleActive()}>
                <FaPalette />
            </div>

            <h3>Elige un Tema</h3>

            <div className='buttons'>
                <div className='theme-btn' onClick={() => themeToggle('#0000ff','#8181ff')}></div>
                <div className='theme-btn' onClick={() => themeToggle('#ff0033','#ff5f7f')}></div>
                <div className='theme-btn' onClick={() => themeToggle('#007c88','#24bac7')}></div>
                <div className='theme-btn' onClick={() => themeToggle('#7a00b3','#a625e2')}></div>
                <div className='theme-btn' onClick={() => themeToggle('#ff9900','#ffd30f')}></div>
                <div className='theme-btn' onClick={() => themeToggle('#009c2f','#15fc5a')}></div>
            </div>
        </div>
    )
}

export default ThemeToggle