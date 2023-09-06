import "./Contact.css";
import { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

export const Contact = () => {
  let navigate = useNavigate();
  const submit = (values) => {
    console.log(values);

    MySwal.fire({
      icon: "question",
      title: <p>Confirmar Acción</p>,
      showCancelButton: "true",
      confirmButtonText: "Si",
      confirmButtonColor: "#1f43f2",
      cancelButtonColor: "#bf2626",
      cancelButtonText: "No",
      heightAuto: false,
    }).then((result) => {

      if (result.isConfirmed) {
        Swal.fire('Correo enviado correctamente', '', 'success')
         sendEmail();
         navigate('/')
      } 
     ;
    });
  };

  const validate = (values) => {
    const errors = {};
    if (values.name == "") errors.name = "Ingrese un nombre";
    if (values.mail == "") errors.mail = "Ingrese un mail";
    if (values.message == "") errors.messeage = "Ingrese un mensaje";

    return errors;
  };

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_k40qiem",
        "template_1188qn9",
        form.current,
        "V3vZOSfq9LKJp02PJ"
      )
      .then(
        (result) => {
          MySwal.fire({
            icon: "success",
            title: <p>Mensaje enviado correctamente</p>,
            showCancelButton: "false",
            confirmButtonText: "Ok",
            confirmButtonColor: "#1f43f2",
          });
        },
        (error) => {
          MySwal.fire({
            icon: "error",
            title: <p>Error al enviar el mensaje</p>,
            showCancelButton: "false",
            confirmButtonText: "Ok",
            confirmButtonColor: "#1f43f2",
          });
        }
      );
  };

  

  return (
    <>
      <section className="contact__header">
        <h2 className="contact__title">Trabajemos juntos</h2>
      </section>

      <section className="contact__container">
        <Formik
          initialValues={{
            name: "",
            mail: "",
            messeage: "",
          }}
          onSubmit={submit}
          validate={validate}
        >
          <Form className="contact__form" ref={form}>
            <div className="contact__data">
              <label className="contact__label" htmlFor="name">
                Nombre
              </label>
              <Field
                className="contact__field"
                name="name"
                type="text"
                placeholder="Ingrese su nombre"
                required
              />
            </div>

            <div className="contact__data">
              <label className="contact__label" htmlFor="mail">
                Correo
              </label>
              <Field
                className="contact__field"
                name="mail"
                type="email"
                placeholder="Ingrese su correo"
                required
              />
            </div>

            <div className="contact__data">
              <label className="contact__label" htmlFor="messeage">
                Mensaje
              </label>
              <Field
                className="contact__field contact__field--text-area"
                id="hola"
                name="message"
                as="textarea"
                placeholder="Ingrese el mensaje"
                required
              />
            </div>
            <button className="contact__btn" type="submit">
              Enviar
            </button>
          </Form>
        </Formik>
      </section>
    </>
  );
};
