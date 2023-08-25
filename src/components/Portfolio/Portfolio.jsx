import "./Portfolio.css";
import { useState } from "react";
import herbo from "../../assets/img/herbo.png";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { ProjectDetailModal } from "../ProjectDetailModal/ProjectDetailModal";

export const Portfolio = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="portfolio__header">
        <h2 className="portfolio__title">
          Portfolio
        </h2>
      </section>

      <div className="card__gallery">
        <div className="card__container">
          <section className="card__header">
            <figure className="card__figure--product" onClick={handleShow}>
              <img className="card__img--product" src={herbo} />
            </figure>
          </section>

          <section className="card__footer">
            <p className="card__title">Herbo Botánica</p>
            <figure className="card__figure--footer" onClick={handleShow}>
              <InfoOutlinedIcon className="card__img--footer" />
            </figure>
          </section>
        </div>

        
      </div>

      <ProjectDetailModal show={show} handleClose={handleClose} />
    </>
  );
};
