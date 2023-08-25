import "./ProjectDetailModal.css";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export const ProjectDetailModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Herbo Botánica</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Herbo Botánica, es un emprendimiento ubicado en Villa Urquiza en la
            ciudad de Buenos Aires, Argentina dedicado al al cuidado de la salud
            emocional y bienestar de personas y mascotas mediante productos
            herbales. Trabajo realizado en conjunto con equipo de
            desarrolladores , diseño Ux Ui y ProyectManager, con el fin de crear
            una solución acorde a una necesidad clave para el cliente. Crear una
            pagina web exclusiva para clientes mayoristas permitiendo realizar
            pedidos de los distintos productos disponibles para la venta. Una
            vez que se concrete el pedido, el cliente recibe la cotización del
            mismo vía mail y luego se gestiona su entrega. El proyecto apunta a
            poder mejorar la experiencia de compra a clientes mayoristas ya
            existentes asi como también captar nuevos clientes.
          </p>

          <section className="project__tec">
            <h3>Desarrollado con</h3>
            <div className="project__icons">
            <FontAwesomeIcon icon={faReact} style={{color: "#12d2f7", fontSize: "50px"}} />
            <img className="project__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
            
            <img className="project__icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          
            </div>
          </section>
          <a className="project__btn" target="_blank" href="https://mayorista.herbobotanica.com">Ir al sitio</a>
        </Modal.Body>
      </Modal>
    </>
  );
};
