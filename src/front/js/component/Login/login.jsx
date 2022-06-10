import React from "react";
import { GiGuitarHead } from "react-icons/gi";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";



const Login = (props) => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await actions.getLogin(data);
    console.log(resp);
    if (resp.access_token) {
      Swal.fire({
        title: "Inicio de Session Exitosa",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email/Password incorrecto!",
        footer: "Por favor intente nuevamente!",
      });
    }
  };

  useEffect(() => {
    if (store.currentUser !== null) {
     // history.push("/");
    }
  }, [store.currentUser]);

  return (
    <div className="container-fluid Container1  ">
      <div className="login text-center mb-0">
        <div className="logo text-warning m-1">
          <GiGuitarHead />
        </div>
        <div className="logo2 text-warning m-2">{props.logo2}</div>

        <div className="login-form-1 mb-5">
          <form onSubmit={handleSubmit} id="login-form" className="text-left" />
          <div className="login-form-main-message"></div>
          <div className="main-login-form">
            <div className="login-group">
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                //  value={data.email}
                  className="form-control"
                  placeholder="Correo electronico"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
              //    value={data.password}
                  className="form-control"
                  placeholder="Contraseña"
                  onChange={handleChange}
                />
              </div>
              <button onClick={handleSubmit} type="submit" className="login-button">
                <i className="fa fa-chevron-right">Go</i>
              </button>
              <div className="etc-login-form m-3">
                <input
                  type="checkbox"
                  className="box"
                  id="lg_remember"
                  name="lg_remember"
                />
                <label form="lg_remember">{props.lg_remember}</label>
                <p>
                  {props.text_preg1}{" "}
                  <a href={props.boton_forgotPass}>{props.text_linkForg}</a>
                </p>{" "}
                {/*//////////Agregar Links/////////*/}
                <p>
                  {props.text_preg2}{" "}
                  <a href={props.boton_newAccount}>{props.text_linkNew}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Login.propTypes = {
  logo2: PropTypes.string,
  lg_remember: PropTypes.string,
  text_preg1: PropTypes.string,
  text_preg2: PropTypes.string,
  boton_forgotPass: PropTypes.string,
  boton_newAccount: PropTypes.string,
  text_linkForg: PropTypes.string,
  text_linkNew: PropTypes.string,
};
export default Login;
