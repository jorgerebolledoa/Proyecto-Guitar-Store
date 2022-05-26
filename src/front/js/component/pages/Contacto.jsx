import React from "react";
export const Contacto = () => {
  return (
    <>
      <br id="pageTop"></br>
      <br></br>
      <br></br>

      <div className="container col-md-10 p-4 rounded bg-dark">
        <div className=" text-center">
          <h1 className="text-warning">¡Comunícate con nosotros!</h1>
        </div>
        <div className="row ">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-dark bg-opacity-75">
              <div className="card-body bg-dark  bg-opacity-25 text-white">
                <div className="container">
                  <form id="contact-form" role="form">
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-4 opacity-75">
                            <label htmlFor="form_name">Nombre *</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Ingresa tu nombre *"
                              required="required"
                              data-error="Ingresa tu nombre."
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-4 opacity-75">
                            <label htmlFor="form_lastname">Apellido *</label>
                            <input
                              id="form_lastname"
                              type="text"
                              name="surname"
                              className="form-control"
                              placeholder="Ingresa tu apellido *"
                              required="required"
                              data-error="Ingresa tu apellido."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-4 opacity-75">
                            <label htmlFor="form_email">Email *</label>
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Ingresa tu Email email *"
                              required="required"
                              data-error="Ingresa un Email valido."
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-4 opacity-75">
                            <label htmlFor="form_need">
                              Motivo del contacto *
                            </label>
                            <select
                              id="form_need"
                              name="need"
                              className="form-control"
                              required="required"
                              data-error="Please specify your need."
                            >
                              <option value="" selected="" disabled="">
                                --Selecciona la categoría--
                              </option>
                              <option>Sugerencias</option>
                              <option>Status de mi pedido</option>
                              <option>Consulta</option>
                              <option>Otro</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group mb-4 opacity-75">
                            <label htmlFor="form_message">Mensaje *</label>
                            <textarea
                              id="form_message"
                              name="message"
                              className="form-control"
                              placeholder="Escribe tu mensaje."
                              rows={6}
                              required="required"
                              data-error="Please, leave us a message."
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <input
                            type="submit"
                            className="btn btn-warning btn-send mt-4  pt-2 btn-block
                      "
                            defaultValue="Send Message"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
