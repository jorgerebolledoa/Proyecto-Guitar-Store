import React from "react";
import { useState } from "react";
import "../../../styles/admin.css";

export const UploadAdm = () => {

  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [thumbNail, setThumbNail] = useState("");
  const [tittleD1, setTitleD1] = useState("");
  const [descr1, setDescr1] = useState("");
  const [tittleD2, setTitleD2] = useState("");
  const [descr2, setDescr2] = useState("");
  const [tittleD3, setTitleD3] = useState("");
  const [descr3, setDescr3] = useState("");
  const [tittleD4, setTitleD4] = useState("");
  const [descr4, setDescr4] = useState("");

  const enviarDatos = async e =>  {
    e.preventDefault();

    const formData = new FormData();
    formData.append("img1", img1);
    formData.append("img2", img2);
    formData.append("img3", img3);
    formData.append("img4", img4);
    formData.append("sku", sku);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("thumbNail", thumbNail);
    formData.append("tittleD1", tittleD1);
    formData.append("descr1", descr1);
    formData.append("tittleD2", tittleD2);
    formData.append("descr2", descr2);
    formData.append("tittleD3", tittleD3);
    formData.append("descr3", descr3);
    formData.append("tittleD4", tittleD4);
    formData.append("descr4", descr4);
    
    const info = await registerFetch(formData);
    console.log(info);

  }

   const registerFetch =  async data => {
    const resp = await fetch("https://3001-jorgereboll-proyectofin-f5wtyul2spl.ws-us47.gitpod.io/api/products/", {method: "POST", body:data});
    const info = await resp.json();
    return info;
  }

  return (
    <>
      <br id="pageTop"></br>
      <br></br>
      <br></br>
      <div className="container col-md-6 p-5 rounded bg-dark">
        <form onSubmit={enviarDatos}>
          <a href="/adminprueba" className="text-warning float-end">volver</a>
          <h1 className="text-white opacity-70 text-center m-4">Crea tu publicación</h1>
          <div id="FileUpload">
            <div className="wrapper text-center">
              
                <label htmlFor="img1" className="form-label text-warning opacity-75">Foto 1</label>
                <input className="form-control btn btn-outline-warning col-md-4" type="file" id="formFile" name="img1"  files={img1}  onChange={e => setImg1(e.target.files[0])} multiple={false} accept="image/png,image/jpeg"/>
                <label htmlFor="img2" className="form-label text-warning opacity-75">Foto 2</label>
                <input className="form-control btn btn-outline-warning col-md-4" type="file" id="formFile" name="img2" /* value={img2} */ onChange={e => setImg2(e.target.files[0])} multiple={false} accept="image/png,image/jpeg"/>
                <label htmlFor="img3" className="form-label text-warning opacity-75">Foto 3</label>
                <input className="form-control btn btn-outline-warning col-md-4" type="file" id="formFile" name="img3" /* value={img3} */ onChange={e => setImg3(e.target.files[0])} multiple={false} accept="image/png,image/jpeg"/>
                <label htmlFor="img4" className="form-label text-warning opacity-75">Foto 4</label>
                <input className="form-control btn btn-outline-warning col-md-4" type="file" id="formFile" name="img4" /* value={img4} */ onChange={e => setImg4(e.target.files[0])} multiple={false} accept="image/png,image/jpeg"/>

            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label text-warning opacity-75" >
              Titulo
            </label>
            <input
              type="text"
              className="form-control bg-white opacity-50"
              name="name"
              value={name} onChange={e => setName(e.target.value)}/>
            
          </div>
          <div className="row mb-3">
            <div className="form-group col-md-6">
              <label htmlFor="sku" className="text-warning opacity-75">sku</label>
              <input type="number" className="form-control bg-white opacity-50" name="sku"
                value={sku} onChange={e => setSku(e.target.value)} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="price" className="text-warning opacity-75">Precio</label>
              <input type="number" className="form-control bg-white opacity-50" name="price" value={price} onChange={e => setPrice(e.target.value)} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="thumbNail" className="form-label text-warning opacity-75">Descripción corta del producto (Thumbnail)</label>
            <textarea className="form-control bg-white opacity-50" name="thumbnail" value={thumbNail} onChange={e => setThumbNail(e.target.value)} rows="2"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tittleD1" className="form-label text-warning opacity-75">
              Titulo Descripción 1
            </label>
            <input
              type="text"
              className="form-control bg-white opacity-50"
              name="tittleD1"
              value={tittleD1} onChange={e => setTitleD1(e.target.value)}
            />
            <label htmlFor="descr1" className="form-label text-warning opacity-75">Descripción</label>
            <textarea className="form-control bg-white opacity-50" name="descripcion1" value={descr1} onChange={e => setDescr1(e.target.value)} rows="4"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tittleD2" className="form-label text-warning opacity-75">
              Titulo Descripción 2
            </label>
            <input
              type="text"
              className="form-control bg-white opacity-50"
              name="tittleD1"
              value={tittleD2} onChange={e => setTitleD2(e.target.value)}
            />
            <label htmlFor="descr2" className="form-label text-warning opacity-75">Descripción</label>
            <textarea className="form-control bg-white opacity-50" name="descripcion1" value={descr2} onChange={e => setDescr2(e.target.value)} rows="4"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tittleD3" className="form-label text-warning opacity-75">
              Titulo Descripción 3
            </label>
            <input
              type="text"
              className="form-control bg-white opacity-50"
              name="tittleD1"
              value={tittleD3} onChange={e => setTitleD3(e.target.value)}
            />
            <label htmlFor="descr3" className="form-label text-warning opacity-75">Descripción</label>
            <textarea className="form-control bg-white opacity-50" name="descripcion3" value={descr3} onChange={e => setDescr3(e.target.value)} rows="4"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tittleD4" className="form-label text-warning opacity-75">
              Titulo Descripción 4
            </label>
            <input
              type="text"
              className="form-control bg-white opacity-50"
              name="tittleD1"
              value={tittleD4} onChange={e => setTitleD4(e.target.value)}
            />
            <label htmlFor="descr4" className="form-label text-warning opacity-75">Descripción</label>
            <textarea className="form-control bg-white opacity-50" name="descripcion4" value={descr4} onChange={e => setDescr4(e.target.value)} rows="4"></textarea>
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