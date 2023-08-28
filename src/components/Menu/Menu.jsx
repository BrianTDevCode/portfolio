import './Menu.css'
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';

export const Menu = () => {

    const hideMenu =  () =>{

        const width = window.innerWidth;
       

        if (width<=1300) {
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

        
     }

  return (
    <nav id='bar-menu' className='menu'>
        <ul className="menu__ul">
            
            <li className="menu__li" onClick={hideMenu}>
                <Link className='menu__link' to={'/'}>
                    <HomeIcon className='menu__icon'/>
                    <span className='menu__spam'>Home</span>
                </Link>
            
            </li>
        
            <li className="menu__li" onClick={hideMenu}>
                <Link className='menu__link' to={'/user'}>
                    <PersonIcon className='menu__icon'/>
                    <span className='menu__spam'>Sobre Mi</span>
                </Link>
            
            </li>   <li className="menu__li" onClick={hideMenu}>
                    <Link className='menu__link' to={'/curriculum'}>
                    <SchoolIcon className='menu__icon'/>
                    <span className='menu__spam'>Formación acedémica</span>
                </Link>
            
            </li>
            
               <li className="menu__li" onClick={hideMenu}>
                <Link className='menu__link' to={'/portfolio'}>
                    <WorkIcon className='menu__icon'/>
                    <span className='menu__spam'>Proyectos</span>
                </Link>
            
            </li>

            <li className="menu__li" onClick={hideMenu}>
                <Link className='menu__link' to={'/contact'}>
                    <MailIcon className='menu__icon'/>
                    <span className='menu__spam'>Contacto</span>
                </Link>
            
            </li>

            
        </ul>
    </nav>
  )
}
