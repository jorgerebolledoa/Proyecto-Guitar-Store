import React from "react";
import { useState } from "react";
import "../../../styles/admin.css";

export const UploadAdm = () => {

  const [datos, setDatos] = useState({
    sku: "",
    imag1: "",
    imag2: "",
    imag3: "",
    imag4: "",
    name: "",
    title_description_1: "",
    description_1: "",
    title_description_2: "",
    description_2: "",
    title_description_3: "",
    description_3: "",
    title_description_4: "",
    description_4: "",
    price: "",
    thumbnail: "",
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos, [event.target.name]: event.target.value
    })
  }
  const enviarDatos = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <br id="pageTop"></br>
      <br></br>
      <br></br>
      <div className="container col-md-6 p-4 rounded bg-dark">
        <form onSubmit={enviarDatos}>
          <a href="/adminprueba" className="text-warning float-end">volver</a>
          <h1 className="text-white opacity-70 text-center m-4">Crea tu publicación</h1>
          <div id="FileUpload">
            <div className="wrapper">
              <div className="uploaded uploaded--one">
                <input class="form-control btn btn-outline-warning" type="file" id="formFileMultiple" multiple name="" />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label text-warning opacity-75">
              Titulo
            </label>
            <input
              type="text"
              className="form-control bg-white opacity-50"
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="row mb-3">
            <div className="form-group col-md-6">
              <label className="text-warning opacity-75">sku</label>
              <input type="number" className="form-control bg-white opacity-50" name="sku" onChange={handleInputChange} />
            </div>
            <div class="form-group col-md-6">
              <label className="text-warning opacity-75">Precio</label>
              <input type="number" className="form-control bg-white opacity-50" name="precio" onChange={handleInputChange} />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label text-warning opacity-75">Descripción corta del producto (Thumbnail)</label>
            <textarea className="form-control bg-white opacity-50" name="thumbnail" onChange={handleInputChange} rows="2"></textarea>
          </div>
          <div className="mb-3">
          <label className="form-label text-warning opacity-75">
              Titulo Descripción 1
            </label>
            <input
              type="text"
              className="form-control bg-white opacity-50"
              name="desc_titulo1"
              onChange={handleInputChange}
            />
            <label for="exampleFormControlTextarea1" class="form-label text-warning opacity-75">Descripción</label>
            <textarea className="form-control bg-white opacity-50" name="descripcion1" onChange={handleInputChange} rows="4"></textarea>
          </div>
          <div className="mb-3">
          <label className="form-label text-warning opacity-75">
              Titulo Descripción 2
            </label>
            <input
              type="text"
              className="form-control bg-white opacity-50"
              name="desc_titulo2"
              onChange={handleInputChange}
            />
            <label for="exampleFormControlTextarea1" class="form-label text-warning opacity-75">Descripción</label>
            <textarea className="form-control bg-white opacity-50" name="descripcion2" onChange={handleInputChange} rows="4"></textarea>
          </div>
          <div className="mb-3">
          <label className="form-label text-warning opacity-75">
              Titulo Descripción 3
            </label>
            <input
              type="text"
              className="form-control bg-white opacity-50"
              name="desc_titulo3"
              onChange={handleInputChange}
            />
            <label for="exampleFormControlTextarea1" class="form-label text-warning opacity-75">Descripción</label>
            <textarea className="form-control bg-white opacity-50" name="descripcion3" onChange={handleInputChange} rows="4"></textarea>
          </div>
          <div className="mb-3">
          <label className="form-label text-warning opacity-75">
              Titulo Descripción 4
            </label>
            <input
              type="text"
              className="form-control bg-white opacity-50"
              name="desc_titulo4"
              onChange={handleInputChange}
            />
            <label for="exampleFormControlTextarea1" class="form-label text-warning opacity-75">Descripción</label>
            <textarea className="form-control bg-white opacity-50" name="descripcion4" onChange={handleInputChange} rows="4"></textarea>
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