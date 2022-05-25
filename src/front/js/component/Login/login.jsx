import React from "react";
import { Link } from "react-router-dom";
import { GiGuitarHead } from "react-icons/gi";
import PropTypes from "prop-types";
import { useState } from "react/cjs/react.production.min";

const Login = (props) => {
  const [autoemail, setEmail] = useState("hola");
  //   const [password, setPassword] = useState("");

  const handleClick = () => {
    const options = {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch(
      "https://3001-jorgereboll-proyectofin-f5wtyul2spl.ws-us45.gitpod.io/api/login",
      options
    )
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("There has been some error");
      })
      .then()
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="container-fluid Container1 m-0 p-0">
      <div className="login text-center mb-3">
        <div className="logo text-warning m-1">
          <GiGuitarHead />
        </div>
        <div className="logo2 text-warning m-2">{props.logo2}</div>

        <div className="login-form-1 mb-5">
          <form id="login-form" className="text-left" />
          <div className="login-form-main-message"></div>
          <div className="main-login-form">
            <div className="login-group">
              <div className="form-group">
                <label form="lg_username" className="sr-only">
                  {props.lg_username}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lg_username"
                  name="lg_username"
                  placeholder="Username"
                  value={autoemail}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label form="lg_password" className="sr-only">
                  {props.lg_password}
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="lg_password"
                  name="lg_password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="login-button">
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
  lg_username: PropTypes.string,
  lg_password: PropTypes.string,
  lg_remember: PropTypes.string,
  text_preg1: PropTypes.string,
  text_preg2: PropTypes.string,
  boton_forgotPass: PropTypes.string,
  boton_newAccount: PropTypes.string,
  text_linkForg: PropTypes.string,
  text_linkNew: PropTypes.string,
};
export default Login;
