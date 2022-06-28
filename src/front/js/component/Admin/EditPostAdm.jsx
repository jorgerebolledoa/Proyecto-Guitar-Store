import React from "react";
import { useState } from "react";
import "../../../styles/admin.css";

export const EditPostAdm = () => {

  const [datos, setDatos] = useState({
    imagenes: "",
    titulo: "",
    marca: "",
    descripcion: "",
  })

  const handleInputChange = (event) => {
    setDatos ({
      ...datos, [event.target.name] : event.target.value
    })
  }
    const enviarDatos  = (event) => {
        event.preventDefault();
    }
    return (
      <>
      <br id="pageTop"></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="body_form">
      <div className="container col-md-6 p-4 rounded bg-dark opacity-75">
      <a href="/adminprueba" className="text-warning float-end">volver</a>
        <h1 className="text-white text-center m-4">Edita tu publicación</h1>
      <div id="FileUpload">
  <div className="wrapper">
    <div className="upload">
      <p className="text-center">
        Arrastra las imagenes acá o...{" "}
        <span className="upload__button" name="imagenes" type="file" onChange={handleInputChange}>Buscar</span>
      </p>
    </div>
  </div>
</div>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-warning ">
      Titulo
    </label>
    <input
      type="text-white"
      className="form-control bg-white "
      placeholder="Guitarra electrica PRS 24 Eriza Verde"
      name="titulo"
      onChange={handleInputChange}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-warning ">
      Marca
    </label>
    <input
      type="text"
      className="form-control bg-white "
      placeholder="prs 24 Custom"
      name="marca"
      onChange={handleInputChange}
    />
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label text-warning ">Descripción</label>
  <textarea className="form-control bg-white  " id="exampleFormControlTextarea1" name="descripcion" onChange={handleInputChange} rows="5" placeholder="With the PRS SE Custom 24-08 solidbody electric guitar, PRS brings one of their most sonically versatile guitars to their most affordable line of instruments. It's loaded with a pair of TCI (Tuned Capacitance and Inductance) humbucking pickups and advanced switching options to yield every type of tone a modern guitarist could ask for. Two mini toggle switches serve as coil taps for each pickup, allowing you to switch between fat humbucking tones and chiming single-coil tones instantly —"></textarea>
</div>
  <button type="submit" className="btn btn-warning mb-4">
    Submit
  </button>
</form>

<a className="scroll-to-top rounded d-flex justify-content-center" href="#pageTop">
        <i className="fas fa-angle-up bg-dark text-white col-1 d-flex justify-content-center fs-1" />
      </a>
  

  </div>
  </div>
      </>
    );
  };
  