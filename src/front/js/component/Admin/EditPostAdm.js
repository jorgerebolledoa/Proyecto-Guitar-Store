import React from "react";


export const EditPostAdm = () => {
    return (
      <>
      <br></br>
      <br></br>
      <br></br>
      <br id="pageTop"></br>
      <div className="container">
        <h1 className="text-white">Edita tu publicación</h1>
      <div id="FileUpload">
  <div className="wrapper">
    <div className="upload">
      <p>
        Arrastra las imagenes acá o...{" "}
        <span className="upload__button">Buscar</span>
      </p>
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
      placeholder="Guitarra electrica PRS 24 Eriza Verde"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-warning opacity-75">
      Marca
    </label>
    <input
      type="text"
      className="form-control"
      placeholder="prs 24 Custom"
    />
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label text-warning opacity-75">Descripción</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="With the PRS SE Custom 24-08 solidbody electric guitar, PRS brings one of their most sonically versatile guitars to their most affordable line of instruments. It's loaded with a pair of TCI (Tuned Capacitance and Inductance) humbucking pickups and advanced switching options to yield every type of tone a modern guitarist could ask for. Two mini toggle switches serve as coil taps for each pickup, allowing you to switch between fat humbucking tones and chiming single-coil tones instantly —"></textarea>
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