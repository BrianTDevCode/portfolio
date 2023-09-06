import './User.css'
import { Link } from 'react-router-dom';

export const User = () => {
  return (
    <>
      <section className="user__header">
        <h2 className="user__title">
          Sobre <span className="title__color">Mi</span>
        </h2>
      </section>

      <section className="user-info__section">
        <p className="user-info__paragraph">
          Joven analista de sistemas. Entusiasta de la programación
          buscando ingresar al mercado laboral de desarrollo de aplicaciones con
          el fin de adquirir experiencia. Enfocado a seguir aprendiendo para
          mantenerse al día con las tecnologías más recientes requeridas por el
          mercado.
        </p>

        
      <section className="user-info__section--data">
        <ul className="user-info__ul">
            <li className="user-info__li">
                <span className="user-info__title">Edad:</span>
                <span className="user-info__value">25</span>
            </li>

            <li className="user-info__li">
                <span className="user-info__title">País:</span>
                <span className="user-info__value">Uruguay</span>
            </li>

            <li className="user-info__li">
                <span className="user-info__title">Idioma nativo:</span>
                <span className="user-info__value">Español</span>
            </li>
            <li className="user-info__li">
                <span className="user-info__title">Inglés:</span>
                <span className="user-info__value">Pre intermediate</span>
            </li>

            <li className="user-info__li">
                <span className="user-info__title">Mail:</span>
                <Link className='menu__link' to={'/contact'}>
              <span className="user-info__value">briantriasm@gmail.com </span>
              </Link>
            </li>
           
        </ul>
      </section>
      </section>

    </>
  );
};
