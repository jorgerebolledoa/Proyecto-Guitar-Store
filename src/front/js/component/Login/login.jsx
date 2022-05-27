import React from "react";
import { Link } from "react-router-dom";
import { GiGuitarHead } from "react-icons/gi";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";



const Login = (props) => {
  const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const history = useHistory();


  console.log ("this is your token",store.token)

	const handleClick = () => {
    actions.login (email,password);

  };
  if(store.token && store.token != "" && store.token != undefined )history.push("")

	return (
    <div className="container-fluid Container1 m-0 p-0">
      {store.token && store.token != "" && store.token != undefined ? (
        "you are logged in with this token" + store.token
      ) : (
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
                  <label form="lg_email" className="sr-only">
                    {props.lg_email}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lg_email"
                    name="lg_email"
                    placeholder="Email"
                    value={email}
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
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleClick}
                  type="submit"
                  className="login-button"
                >
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
      )}
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
 