import React from "react";
import "../../styles/contacto.css"
export const Contacto = () => {
  return (
    <div className="container-fluid justify-content-center contacto_container_primary">
      <form
        action="https://formspree.io/f/xdobjaqz"
        method="POST"
      >
        <div className="container-fluid  text-warning  contacto_container ">
          <div className=" m-3 p-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" name="email" className="form-control text-warning border-0 bg-secondary bg-opacity-25" id="exampleFormControlInput1" />
          </div>
          <div className=" m-3 p-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label text-warning ">Menssege</label>
            <textarea name="message" className="form-control bg-secondary bg-opacity-25 border-0 text-warning" id="exampleFormControlTextarea1" rows="10" />
            <div className="float-end p-2">
              <button type="submit" className="btn btn-dark text-warning" >enviar</button>
            </div>
          </div>
        </div>
      </form>
    </div >
  );
};
