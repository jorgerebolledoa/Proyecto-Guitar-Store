import React from "react";
import "/workspace/Proyecto-final-en-grupo-landing-guitarra-/src/front/styles/admin.css";

export const UploadAdm = () => {
    return (
      <>
      <br></br>
      <br></br>
      <br></br>
      <br id="pageTop"></br>
      <div className="container">
        <h1 className="text-white">Crea tu publicación</h1>
      <div id="FileUpload">
  <div className="wrapper">
    <div className="upload">
      <p>
        Arrastra las imagenes acá o...{" "}
        <span className="upload__button">Buscar</span>
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
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-warning opacity-75">
      Titulo
    </label>
    <input
      type="text"
      className="form-control"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-warning opacity-75">
      Marca
    </label>
    <input
      type="ext"
      className="form-control"
    />
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label text-warning opacity-75">Descripción</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
  <button type="submit" className="btn btn-warning">
    Submit
  </button>
</form>

  <a className="scroll-to-top rounded" href="#pageTop">
    <i className="fas fa-angle-up bg-dark text-white col-md-12 d-flex justify-content-center fs-1" />
  </a>

  </div>
      </>
    );
  };