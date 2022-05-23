import React from "react";

export const UsersViewAdm = () => {
    return (
      <>
      <br id="pageTop"></br>
      <br></br>
      <br></br>
      <div className="container">
  <div className="row flex-lg-nowrap">
  <div className="col">
    <div className="row flex-lg-nowrap">
      <div className="col mb-3">
        <div className="e-panel card">
          <div className="card-body">
            <div className="card-title">
              <h6 className="mr-2">
                <span>Users</span>
                <small className="px-1">Be a wise leader</small>
              </h6>
            </div>
            <div className="e-table">
              <div className="table-responsive table-lg mt-3">
                <table className="table table-bordered">
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
                            className="btn btn-sm btn-outline-dark badge"
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
                            className="btn btn-sm btn-outline-dark badge"
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
                            className="btn btn-sm btn-outline-dark badge"
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
                            className="btn btn-sm btn-outline-dark badge"
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
                            className="btn btn-sm btn-outline-dark badge"
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
                            className="btn btn-sm btn-outline-dark badge"
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
                            className="btn btn-sm btn-outline-dark badge"
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
                            className="btn btn-sm btn-outline-dark badge"
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
                            className="btn btn-sm btn-outline-dark badge"
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
                            className="btn btn-sm btn-outline-dark badge"
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
                            className="btn btn-sm btn-outline-dark badge"
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
                            className="btn btn-sm btn-outline-dark badge"
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
                    <a href="#" className="page-link">
                      ‹
                    </a>
                  </li>
                  <li className="active page-item">
                    <a href="#" className="page-link">
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
        <div className="card">
          <div className="card-body">
            <hr className="my-3" />
            <div className="e-navlist e-navlist--active-bold">
              <ul className="nav">
                <li className="nav-item active">
                  <a href="" className="nav-link">
                    <span>Todo</span>&nbsp;<small>/&nbsp;32</small>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <span>Activo</span>&nbsp;<small>/&nbsp;16</small>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <span>Seleccionado</span>&nbsp;<small>/&nbsp;0</small>
                  </a>
                </li>
              </ul>
            </div>
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
            <div className="">
              <label>Status:</label>
              <div className="px-2">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="user-status"
                    id="users-status-disabled"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="users-status-disabled"
                  >
                    Desactivado
                  </label>
                </div>
              </div>
              <div className="px-2">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="user-status"
                    id="users-status-active"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="users-status-active"
                  >
                    Activo
                  </label>
                </div>
              </div>
              <div className="px-2">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="user-status"
                    id="users-status-any"
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="users-status-any"
                  >
                    Cualquiera
                  </label>
                </div>
                <button type="button" class="btn btn-warning">Buscar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<a className="scroll-to-top rounded" href="#pageTop">
    <i className="fas fa-angle-up bg-dark text-white col-md-12 d-flex justify-content-center fs-1" />
  </a>
  <a href="/admin" className="text-warning col-md-12 d-flex justify-content-center fs-3 m-3">volver al panel de control</a>
  </div>
      </>
    );
  };