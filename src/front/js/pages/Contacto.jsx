import React from "react";
import "../../styles/contacto.css"
export const Contacto = () => {

  return (
    <div className="container-fluid bg-dark text-warning justify-content-center  contacto_container">
      <div className=" m-3 p-3 ">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control bg-secondary border-0" id="exampleFormControlInput1" />
      </div>
      <div className=" m-3 p-3">
        <label for="exampleFormControlTextarea1" className="form-label text-warning ">Example textarea</label>
        <textarea className="form-control bg-secondary border-0 text-warning" id="exampleFormControlTextarea1" rows="10" />
      </div>
    </div>
  );
};
