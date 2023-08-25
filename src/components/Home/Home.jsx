import "../../scroll.css";
import './Home.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Aside } from '../Aside/Aside';
import { About } from '../About/About';
// import {} from '@fortawesome/free-brands-svg-icons-svg-icons'

export const Home = (props) => {

  const showMenu =  () =>{
    const bar = document.getElementById('bar');
    const menu = document.getElementById('bar-menu');
    const close = document.getElementById('close-icon');
    const toggle = document.getElementById('menu-btn');
    menu.style.display='block';
    close.style.display='block';
    toggle.style.display='none';
    bar.classList.remove('content__aside--hide');
    bar.classList.add('content__aside--visible');
  }

  return (
    <>
    <div className="content">
      <div id="bar" className="content__aside">
        <Aside/>
      </div>

     
        <main className='main'>
        <div id="menu-btn" className="main__toggle" onClick={showMenu}>
        <MenuIcon className="main__icon"/>
      </div>  
        {props.children}
        </main>
    </div>
    </>
  )
}
