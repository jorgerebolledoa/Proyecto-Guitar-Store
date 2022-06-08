import React from "react";

export const ProductsViewAdmin = () => {
    return (
      <>
      <br id="pageTop"></br>
      <br></br>
      <br></br>
      <div className="container p-4 col-md-10 p-4 rounded bg-dark">
      <a href="/adminprueba" className="text-warning float-end">volver</a>
  <div className="col ">
    <div className="row flex-lg-nowrap ">
      <div className="col mb-3 ">
        <div className="e-panel card bg-dark border-white">
          <div className="card-body  ">
            <div className="card-title ">
              <h6 className="mr-2">
                <small className="px-1 text-white">Dashboard de productos</small>
              </h6>
            </div>
            <div className="e-table ">
              <div className="table-responsive table-lg mt-3">
                <table className="table table-bordered  border-white text-white">
                  <thead>
                    <tr>
                      <th>Foto</th>
                      <th className="max-width">Nombre modelo</th>
                      <th>Acciones Editar/Borrar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                 
                      <td className="align-middle text-center">foto
                      </td>
                      <td className="text-nowrap align-middle">modelo guitarra</td>
                      <td className="text-center align-middle"> 
                        <div className="btn-group align-top">
                          <a
                            className="btn btn-sm btn-outline-secondary badge"
                            type="button"
                            href="/editpost"
                          >
                            Editar
                          </a>
                          <button
                            className="btn btn-sm btn-outline-warning badge"
                            type="button"
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-3 mb-3">
        <div className="card bg-dark text-white border-white">
          <div className="card-body">
            <hr className="my-3" />
            
              <div className="form-group">
                <label>Buscar por nombre:</label>
                <div>
                  <input
                    className="form-control w-100"
                    type="text"
                    placeholder="Name"
                    defaultValue=""
                  />
                </div>
              </div>
            <hr className="my-3" />
            <button type="button" class="btn btn-outline-warning">Buscar</button>
          </div>
        </div>
      </div>
    </div>
  </div>

<a className="scroll-to-top rounded d-flex justify-content-center" href="#pageTop">
        <i className="fas fa-angle-up bg-dark text-white col-1 d-flex justify-content-center fs-1" />
      </a>
  </div>
      </>
    );
  };