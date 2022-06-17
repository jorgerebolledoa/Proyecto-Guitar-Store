import React from "react";
import "../../../styles/admin.css";
import TodoListAdmin from "./TodolistAdmin.jsx";



export const PanelDeControlAdm = () => {

  return (
    <>
      <br id="pageTop"></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container p-4 rounded bg-dark">
        <div className="row p-4">
          <div className=" col-xl-4 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2 bg-dark text-white">
              <div className="card-body ">
                <div className="row align-items-center ">
                  <div className="col mr-2 ">
                    <div className="text-xs font-weight-bold text-white text-uppercase mb-1 ">
                      Fecha
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800 opacity-75" id="current_date">
                    {`${new Date().toDateString()}`}
                    </div>
                  </div>
                  <div className="col-2">
                    <i className="fas fa-calendar fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 py-2 bg-dark text-white">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-white text-uppercase mb-1">
                      Tareas
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800 opacity-75">
                          50%
                        </div>
                      </div>
                      <div className="col">
                        <div className="progress progress-sm mr-2">
                          <div
                            className="progress-bar bg-warning bg-opacity-75"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="/contactadmin"
            className="bg-dark text-white col-xl-4 col-md-6 mb-4 text-decoration-none"
          >
            <div className="card border-left-white shadow h-100 py-2 bg-dark text-white">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      Mensajes
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800 opacity-75">
                      18
                    </div>
                  </div>

                  <div className="col-2">
                    <i className="fas fa-comments fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div
          className="btn-group container"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <div className="col-md-12 d-flex justify-content-center gap-3 mb-4">
            <a href="/upload" className="btn btn-outline-warning col-md-4">
              Crear publicaciónes
            </a>
            <a href="/productsview"
              className="btn btn-outline-warning col-md-4"
              htmlFor="btncheck2"
            >
              Editar publicaciónes
            </a>
            <a href="/usersview"
              className="btn btn-outline-warning col-md-4"
              htmlFor="btncheck2"
            >
              Usuarios
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mb-4">
            <TodoListAdmin />
          </div>
        </div>
      </div>

      <a className="scroll-to-top rounded d-flex justify-content-center mt-4" href="#pageTop">
        <i className="fas fa-angle-up bg-dark text-white col-1 d-flex justify-content-center fs-1" />
      </a>
      <div />
    </>
  );
};