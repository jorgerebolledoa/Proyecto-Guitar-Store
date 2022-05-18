import React from "react";
import { Link } from "react-router-dom";
import { GiGuitarHead } from "react-icons/gi";

const Forgot_password = () => {
  return (
    ///////////Faltan detalles//////////
    <div className="container-fluid Container2 m-0 p-0">
      <div className="forgot_password text-center mb-3">
        <div className="logo text-warning m-1">
          <GiGuitarHead />
        </div>
        <div className="logo2 text-warning m-3">Forgot your password? </div>
        <div className="login-form-1">
          <form id="forgot-password-form" className="text-left">
            <div className="etc-login-form text-warning m-3">
              <p>
                {" "}
                Oops! It happens to the best of us. Input your email address to
                fix the issue.
              </p>
            </div>
            <div className="login-form-main-message"></div>
            <div className="main-login-form">
              <div className="login-group">
                <div className="form-group">
                  <label form="fp_email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fp_email"
                    name="fp_email"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <button type="submit" className="login-button">
                <i className="fa fa-chevron-right">Go</i>
              </button>
            </div>
            <div className="etc-login-form text-warning m-3">
              <p>
                Already have an account? <a href="#">login here</a>{/*//////////Agregar Links/////////*/}
              </p>
             
              <p>
                New user? <a href="#">create new account</a> {/*//////////Agregar Links/////////*/}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Forgot_password;
