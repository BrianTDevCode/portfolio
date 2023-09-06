import './About.css'
import { Link } from 'react-router-dom'
export const About = () => {
  return (
  
         <section className='about__user'>
                <h1 className='about__name'>Hola!</h1>
                <h2 className='about__profession'>Bienvenido al portfolio</h2>
                <Link className='menu__link' to={'/user'}>
                <button className='about__btn'>Conoce más</button>
                </Link>
            </section>
    
  )
}
