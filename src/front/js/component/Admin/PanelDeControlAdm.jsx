import React from "react";
import "/workspace/Proyecto-final-en-grupo-landing-guitarra-/src/front/styles/admin.css";
export const PanelDeControlAdm = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br id="pageTop"></br>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2 bg-dark text-white">
              <div className="card-body ">
                <div className="row align-items-center ">
                  <div className="col mr-2 ">
                    <div className="text-xs font-weight-bold text-white text-uppercase mb-1">
                      Ganancias (Mensuales)
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      $44.067.000
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success  shadow h-100 py-2 bg-dark text-white">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-white text-uppercase mb-1">
                      Ganancias (Anuales)
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      $234.415.000
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 py-2 bg-dark text-white">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-white text-uppercase mb-1">
                      Tareas
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
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
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            href=""
            className="bg-dark text-white col-xl-3 col-md-6 mb-4"
          >
            <div className="card border-left-white shadow h-100 py-2 bg-dark text-white">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      Mensajes
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800 ">
                      18
                    </div>
                  </div>

                  <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </button>
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
            <a href="/editpost"
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
            <div className="card shadow mb-4 bg-dark text-white">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-white">
                  Tareas Pendientes
                </h6>
              </div>
              <div className="card-body">
                <h4 className="small font-weight-bold">
                  Actualización de stock{" "}
                  <span className="float-right">20%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <h4 className="small font-weight-bold">
                  Rastreo de envíos <span className="float-right">40%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow={40}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <h4 className="small font-weight-bold">
                  Revisar base de datos de usuarios{" "}
                  <span className="float-right">60%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <h4 className="small font-weight-bold">
                  Tranferir sueldos <span className="float-right">80%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar  bg-warning"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <h4 className="small font-weight-bold">
                  Capacitación empleados{" "}
                  <span className="float-right">Complete!</span>
                </h4>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning bg-opacity-50"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#pageTop">
        <i className="fas fa-angle-up bg-dark text-white col-md-12 d-flex justify-content-center fs-1" />
      </a>
      <div />
    </>
  );
};
