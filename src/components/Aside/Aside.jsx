

import './Aside.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import  perfil  from '../../../src/assets/img/perfil.jpg';


import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import { Menu } from '@mui/material';


const hideMenu =  () =>{
    const bar = document.getElementById('bar');
    const menu = document.getElementById('bar-menu');
    const close = document.getElementById('close-icon');
    const toggle = document.getElementById('menu-btn');
    menu.style.display='none';
    close.style.display='none';
    toggle.style.display='block';
    bar.classList.remove('content__aside--visible');
    bar.classList.add('content__aside--hide');
 }


export const Aside = () => {
  return (
    <aside className="aside">
        <div id='close-icon' className="aside__close-container">
            <CloseIcon className='aside__close-container--icon' onClick={hideMenu}/>
        </div>
        <section className='aside__section-info'>
            <figure className="section-info__figure">
                <img src={perfil} alt="perfil" className="section-info__img" />
            </figure>

            <h2 className="section-info__name">Brian Trias</h2>
            <h4 className="section-info__profession">Analista de sistemas</h4>
        </section>

      
        
        <section className="aside__section-social">
            <ul className="section-social__ul">
                <li className="section-social__li">
                    <a href='https://www.linkedin.com/in/brian-trias-802b41234' target='_blank' className="section-social__link">
                        <LinkedInIcon className='section-social__icon'/>
                    </a>
                </li>

                <li className="section-social__li">
                    <a href='https://github.com/BrianTDevCode' target='_blank' className="section-social__link">
                        <GitHubIcon className='section-social__icon'/>
                    </a>
                </li>

                {/* <li className="section-social__li">
                    <a href="" className="section-social__link">
                        <InstagramIcon className='section-social__icon'/>
                    </a>
                </li> */}

            </ul>

            
        </section>

        {/* <div className="aside__btn-container">
            <a href="#" className="btn-container__btn-cv">Descarga CV</a>
        </div> */}

        {/* <footer className="aside__footer">
            2023 Brian Trias
        </footer> */}
    </aside>
  )
}
