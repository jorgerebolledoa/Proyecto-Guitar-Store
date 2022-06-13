import React from "react";
import "../../../styles/admin.css"


const ProductSection = ({ img, title }) => {

    return (
          <>
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
                   
                        <td className="align-middle text-center"><img src={img} alt="Img"/>
                        </td>
                        <td className="text-nowrap align-middle">{title}</td>
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
                
         
       </>
    );
};

export default ProductSection;