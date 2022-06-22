import React from "react";
import { Link } from "react-router-dom";
import { GiGuitarHead } from "react-icons/gi";
import PropTypes from "prop-types";

const Forgot_password = (props) => {
  return (
    <div className="container-fluid Container2 m-0 p-0">
      <div className="forgot_password text-center mb-3">
        <div className="logo text-warning m-1">
          <GiGuitarHead />
        </div>
        <div className="logo2 text-warning m-3"> {props.logo2} </div>
        <div className="login-form-1">
          <form id="forgot-password-form" className="text-left">
            <div className="etc-login-form text-warning m-3">
              <p>
                {props.parrafo}
              </p>
            </div>
            <div className="login-form-main-message"></div>
            <div className="main-login-form">
              <div className="login-group">
                <div className="form-group">
                  <label form="fp_email" className="sr-only">
                    {props.fp_email}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fp_email"
                    name="fp_email"
                    placeholder="Ingresa tu email"
                  />
                </div>
              </div>
              <button type="submit" className="login-button">
                <i className="fa fa-chevron-right">Go</i>
              </button>
            </div>
            <div className="etc-login-form text-warning m-3">
              <p>
                {props.text_preg1} <a href={props.boton_login}>{props.text_botonLogin}</a>
              </p>

              <p>
                {props.text_preg2} <a href={props.boton_newAccount}>{props.text_botonNew}</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Forgot_password.propTypes = {

  logo2: PropTypes.string,
  parrafo: PropTypes.string,
  fp_email: PropTypes.string,
  boton_login: PropTypes.string,
  boton_newAccount: PropTypes.string,
  text_botonLogin: PropTypes.string,
  text_botonNew: PropTypes.string,
  text_preg1: PropTypes.string,
  text_preg2: PropTypes.string,
};
export default Forgot_password;


