import React from "react";
import { useState } from "react";
import "../../../styles/admin.css";

export const UploadAdm = () => {

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
      <div className="container col-md-6 p-4 rounded bg-dark">
      <form onSubmit={enviarDatos}>
      <a href="/admin" className="text-warning float-end">volver</a>
        <h1 className="text-white opacity-70 text-center m-4">Crea tu publicación</h1>
      <div id="FileUpload">
  <div className="wrapper">
    <div className="upload">
      <p className="text-center">
        Arrastra las imagenes acá o...{" "}
        <span className="upload__button" name="imagenes" type="file" onChange={handleInputChange}>Buscar</span>
      </p>
    </div>
    <div className="uploaded uploaded--one">
      <div className="file">
        <div className="file__name">
          <p>img1.jpg</p>
          <i className="fas fa-times" />
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
    <div className="uploaded uploaded--two">
      <div className="file">
        <div className="file__name">
          <p>img2.jpg</p>
          <i className="fas fa-times" />
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
            style={{ width: "80%" }}
          />
        </div>
      </div>
    </div>
    <div className="uploaded uploaded--three">
      <div className="file">
        <div className="file__name">
          <p>img3.jpg</p>
          <i className="fas fa-times" />
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
            style={{ width: "60%" }}
          />
        </div>
      </div>
    </div>
  </div>
</div>
     
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-warning opacity-75">
      Titulo
    </label>
    <input
      type="text"
      className="form-control bg-white opacity-50"
      name="titulo"
      onChange={handleInputChange}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-warning opacity-75">
      Marca
    </label>
    <input
      type="text"
      className="form-control bg-white opacity-50"
      name="marca"
      onChange={handleInputChange}
    />
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label text-warning opacity-75">Descripción</label>
  <textarea className="form-control bg-white opacity-50" name="descripcion" onChange={handleInputChange} rows="6"></textarea>
</div>
  <button type="submit" className="btn btn-warning">
    Submit
  </button>
</form>

<a className="scroll-to-top rounded d-flex justify-content-center" href="#pageTop">
        <i className="fas fa-angle-up bg-dark text-white col-1 d-flex justify-content-center fs-1" />
      </a>
  </div>
      </>
    );
  };