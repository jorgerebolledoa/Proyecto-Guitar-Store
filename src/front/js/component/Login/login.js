import React from "react";
import { Link } from "react-router-dom";
import { GiGuitarHead } from "react-icons/gi";
import PropTypes from "prop-types";


export const Login = (props) => {
	return (

		<div className="container-fluid Container1 m-0 p-0">
			<div className="login text-center mb-3" >
				<div className="logo text-warning m-1">< GiGuitarHead /></div>
				<div className="logo2 text-warning m-2">{props.logo2}</div>

				<div className="login-form-1 mb-5">
					<form id="login-form" className="text-left" />
					<div className="login-form-main-message"></div>
					<div className="main-login-form">
						<div className="login-group">
							<div className="form-group">
								<label form="lg_username" className="sr-only">{props.lg_username}</label>
								<input type="text" className="form-control" id="lg_username" name="lg_username" placeholder="Username" />
							</div>
							<div className="form-group">
								<label form="lg_password" className="sr-only">{props.lg_password}</label>
								<input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="Password" />
							</div>
							<button type="submit" class="login-button"><i class="fa fa-chevron-right">Go</i></button>
							<div class="etc-login-form m-3">
								<input type="checkbox" className="box" id="lg_remember" name="lg_remember" />
								<label form="lg_remember">{props.lg_remember}</label>
								<p>{props.text_preg1} <a href={props.link_forgotPass} >{props.text_linkForg}</a></p>				{/*//////////Agregar Links/////////*/}
								<p>{props.text_preg2} <a href={props.link__newAccount} >{props.text_linkNew}</a></p>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>

	)
}
Login.propTypes = {

	logo2: PropTypes.string,
	lg_username: PropTypes.string,
	lg_password: PropTypes.string,
	lg_remember: PropTypes.string,
	text_preg1: PropTypes.string,
	text_preg2: PropTypes.string,
	link_forgotPass: PropTypes.string,
	link__newAccount: PropTypes.string,
	text_linkForg: PropTypes.string,
	text_linkNew: PropTypes.string,
};

<>
	<Login
		logo2="Login"
		lg_username="Username"
		lg_password=" Password"
		lg_remember="Remember me."
		text_preg1="Forgot your password?"
		text_preg2="Dont have account?"
		boton_forgotPass=" "
  		boton__newAccount=" "
		text_linkForg="click here"
		text_linkNew="create new account"
	/>
</>