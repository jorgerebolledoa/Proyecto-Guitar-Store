import React from "react";

export const UsersViewAdm = () => {
    return (
      <>
      <br id="pageTop"></br>
      <br></br>
      <br></br>
      <div className="body_list">
      <div className="container p-4 col-md-10 p-4 rounded ">
      <a href="/adminprueba" className="text-warning float-end">volver</a>
  <div className="row flex-lg-nowrap">
  <div className="col">
    <div className="row flex-lg-nowrap">
      <div className="col mb-3">
        <div className="e-panel card  bg-dark border-white">
          <div className="card-body">
            <div className="card-title">
              <h6 className="mr-2">
                <small className="px-1 text-white">Dashboard de Usuarios</small>
              </h6>
            </div>
            <div className="e-table">
              <div className="table-responsive table-lg mt-3">
                <table className="table table-bordered text-white">
                  <thead>
                    <tr>
                      <th className="align-top">
                        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="all-items"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="all-items"
                          />
                        </div>
                      </th>
                      <th>Photo</th>
                      <th className="max-width">Name</th>
                      <th className="sortable">Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="align-middle">
                        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="item-1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="item-1"
                          />
                        </div>
                      </td>
                      <td className="align-middle text-center">
                        <div
                          className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                          style={{ width: 35, height: 35, borderRadius: 3 }}
                        >
        
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">Adam Cotter</td>
                      <td className="text-nowrap align-middle">
                        <span>09 Dec 2017</span>
                      </td>
                      <td className="text-center align-middle">
                        <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-outline-secondary badge"
                            type="button"
                            data-toggle="modal"
                            data-target="#user-form-modal"
                          >
                            Editar
                          </button>
                          <button
                            className="btn btn-sm btn-outline-warning badge"
                            type="button"
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="item-2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="item-2"
                          />
                        </div>
                      </td>
                      <td className="align-middle text-center">
                        <div
                          className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                          style={{ width: 35, height: 35, borderRadius: 3 }}
                        >
                          <i
                            className="fa fa-fw fa-photo"
                            style={{ opacity: "0.8" }}
                          />
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        Pauline Noble
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>26 Jan 2018</span>
                      </td>
                      <td className="text-center align-middle">
                      <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-outline-secondary badge"
                            type="button"
                            data-toggle="modal"
                            data-target="#user-form-modal"
                          >
                            Editar
                          </button>
                          <button
                            className="btn btn-sm btn-outline-warning badge"
                            type="button"
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="item-3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="item-3"
                          />
                        </div>
                      </td>
                      <td className="align-middle text-center">
                        <div
                          className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                          style={{ width: 35, height: 35, borderRadius: 3 }}
                        >
                          <i
                            className="fa fa-fw fa-photo"
                            style={{ opacity: "0.8" }}
                          />
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        Sherilyn Metzel
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>27 Jan 2018</span>
                      </td>
                      <td className="text-center align-middle">
                      <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-outline-secondary badge"
                            type="button"
                            data-toggle="modal"
                            data-target="#user-form-modal"
                          >
                            Editar
                          </button>
                          <button
                            className="btn btn-sm btn-outline-warning badge"
                            type="button"
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="item-4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="item-4"
                          />
                        </div>
                      </td>
                      <td className="align-middle text-center">
                        <div
                          className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                          style={{ width: 35, height: 35, borderRadius: 3 }}
                        >
                          <i
                            className="fa fa-fw fa-photo"
                            style={{ opacity: "0.8" }}
                          />
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        Terrie Boaler
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>20 Jan 2018</span>
                      </td>
                      <td className="text-center align-middle">
                      <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-outline-secondary badge"
                            type="button"
                            data-toggle="modal"
                            data-target="#user-form-modal"
                          >
                            Editar
                          </button>
                          <button
                            className="btn btn-sm btn-outline-warning badge"
                            type="button"
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="item-5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="item-5"
                          />
                        </div>
                      </td>
                      <td className="align-middle text-center">
                        <div
                          className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                          style={{ width: 35, height: 35, borderRadius: 3 }}
                        >
                          <i
                            className="fa fa-fw fa-photo"
                            style={{ opacity: "0.8" }}
                          />
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">Rutter Pude</td>
                      <td className="text-nowrap align-middle">
                        <span>13 Jan 2018</span>
                      </td>
                      <td className="text-center align-middle">
                      <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-outline-secondary badge"
                            type="button"
                            data-toggle="modal"
                            data-target="#user-form-modal"
                          >
                            Editar
                          </button>
                          <button
                            className="btn btn-sm btn-outline-warning badge"
                            type="button"
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="item-6"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="item-6"
                          />
                        </div>
                      </td>
                      <td className="align-middle text-center">
                        <div
                          className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                          style={{ width: 35, height: 35, borderRadius: 3 }}
                        >
                          <i
                            className="fa fa-fw fa-photo"
                            style={{ opacity: "0.8" }}
                          />
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        Clifford Benjamin
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>25 Jan 2018</span>
                      </td>
                      <td className="text-center align-middle">
                      <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-outline-secondary badge"
                            type="button"
                            data-toggle="modal"
                            data-target="#user-form-modal"
                          >
                            Editar
                          </button>
                          <button
                            className="btn btn-sm btn-outline-warning badge"
                            type="button"
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="item-7"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="item-7"
                          />
                        </div>
                      </td>
                      <td className="align-middle text-center">
                        <div
                          className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                          style={{ width: 35, height: 35, borderRadius: 3 }}
                        >
                          <i
                            className="fa fa-fw fa-photo"
                            style={{ opacity: "0.8" }}
                          />
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        Thedric Romans
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>12 Jan 2018</span>
                      </td>
                      <td className="text-center align-middle">
                      <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-outline-secondary badge"
                            type="button"
                            data-toggle="modal"
                            data-target="#user-form-modal"
                          >
                            Editar
                          </button>
                          <button
                            className="btn btn-sm btn-outline-warning badge"
                            type="button"
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="item-8"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="item-8"
                          />
                        </div>
                      </td>
                      <td className="align-middle text-center">
                        <div
                          className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                          style={{ width: 35, height: 35, borderRadius: 3 }}
                        >
                          <i
                            className="fa fa-fw fa-photo"
                            style={{ opacity: "0.8" }}
                          />
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        Haily Carthew
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>27 Jan 2018</span>
                      </td>
                      <td className="text-center align-middle">
                      <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-outline-secondary badge"
                            type="button"
                            data-toggle="modal"
                            data-target="#user-form-modal"
                          >
                            Editar
                          </button>
                          <button
                            className="btn btn-sm btn-outline-warning badge"
                            type="button"
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="item-9"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="item-9"
                          />
                        </div>
                      </td>
                      <td className="align-middle text-center">
                        <div
                          className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                          style={{ width: 35, height: 35, borderRadius: 3 }}
                        >
                          <i
                            className="fa fa-fw fa-photo"
                            style={{ opacity: "0.8" }}
                          />
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        Dorothea Joicey
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>12 Dec 2017</span>
                      </td>
                      <td className="text-center align-middle">
                      <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-outline-secondary badge"
                            type="button"
                            data-toggle="modal"
                            data-target="#user-form-modal"
                          >
                            Editar
                          </button>
                          <button
                            className="btn btn-sm btn-outline-warning badge"
                            type="button"
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="item-10"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="item-10"
                          />
                        </div>
                      </td>
                      <td className="align-middle text-center">
                        <div
                          className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                          style={{ width: 35, height: 35, borderRadius: 3 }}
                        >
                          <i
                            className="fa fa-fw fa-photo"
                            style={{ opacity: "0.8" }}
                          />
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        Mikaela Pinel
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>10 Dec 2017</span>
                      </td>
                      <td className="text-center align-middle">
                      <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-outline-secondary badge"
                            type="button"
                            data-toggle="modal"
                            data-target="#user-form-modal"
                          >
                            Editar
                          </button>
                          <button
                            className="btn btn-sm btn-outline-warning badge"
                            type="button"
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="item-11"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="item-11"
                          />
                        </div>
                      </td>
                      <td className="align-middle text-center">
                        <div
                          className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                          style={{ width: 35, height: 35, borderRadius: 3 }}
                        >
                          <i
                            className="fa fa-fw fa-photo"
                            style={{ opacity: "0.8" }}
                          />
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        Donnell Farries
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>03 Dec 2017</span>
                      </td>
                      <td className="text-center align-middle">
                      <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-outline-secondary badge"
                            type="button"
                            data-toggle="modal"
                            data-target="#user-form-modal"
                          >
                            Editar
                          </button>
                          <button
                            className="btn btn-sm btn-outline-warning badge"
                            type="button"
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="item-12"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="item-12"
                          />
                        </div>
                      </td>
                      <td className="align-middle text-center">
                        <div
                          className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                          style={{ width: 35, height: 35, borderRadius: 3 }}
                        >
                          <i
                            className="fa fa-fw fa-photo"
                            style={{ opacity: "0.8" }}
                          />
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        Letizia Puncher
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>09 Dec 2017</span>
                      </td>
                      <td className="text-center align-middle">
                      <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-outline-secondary badge"
                            type="button"
                            data-toggle="modal"
                            data-target="#user-form-modal"
                          >
                            Editar
                          </button>
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
              <div className="d-flex justify-content-center ">
                <ul className="pagination mt-3 mb-0 ">
                  <li className="disabled page-item">
                    <a href="#" className="page-link ">
                      ‹
                    </a>
                  </li>
                  <li className="active page-item ">
                    <a href="#" className="page-link ">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      ›
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      »
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-3 mb-3">
        <div className="card card bg-dark text-white border-white">
          <div className="card-body">
            <hr className="my-3" />
            <div>
              <div className="form-group">
                <label>Fecha desde - hasta:</label>
                <div>
                  <input
                    id="dates-range"
                    className="form-control flatpickr-input"
                    placeholder="01 Dec 17 - 27 Jan 18"
                    type="text"
                  />
                </div>
              </div>
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
            </div>
            <hr className="my-3" />
            <button type="button" class="btn btn-outline-warning">Buscar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<a className="scroll-to-top rounded d-flex justify-content-center" href="#pageTop">
        <i className="fas fa-angle-up bg-dark text-white col-1 d-flex justify-content-center fs-1" />
      </a>
  </div>
  </div>
      </>
    );
  };