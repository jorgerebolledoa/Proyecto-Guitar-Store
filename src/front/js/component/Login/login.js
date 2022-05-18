import React from "react";
import { Link } from "react-router-dom";
import { GiGuitarHead } from "react-icons/gi";

////////falta CSS//////////////
export const Login = () => {
	return (                        ///////////Faltan detalles//////////

		 <div className="container-fluid Container1 m-0 p-0">
			<div className="login text-center mb-3" >
				<div className="logo text-warning m-1">< GiGuitarHead /></div>
				<div className="logo2 text-warning m-2">Login</div>

				<div className="login-form-1 mb-5">
					<form id="login-form" className="text-left" />
					<div className="login-form-main-message"></div>
					<div className="main-login-form">
						<div className="login-group">
							<div className="form-group">
								<label form="lg_username" className="sr-only">Username</label>
								<input type="text" className="form-control" id="lg_username" name="lg_username" placeholder="Username" />
							</div>
							<div className="form-group">
								<label form="lg_password" className="sr-only">Password</label>
								<input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="Password" />
							</div>
							<button type="submit" class="login-button"><i class="fa fa-chevron-right">Go</i></button>
							<div class="etc-login-form m-3">
								<input type="checkbox" className="box" id="lg_remember" name="lg_remember" />
								<label form="lg_remember">Remember me</label>
								<p>Forgot your password? <a href="#">click here</a></p>				{/*//////////Agregar Links/////////*/}
								<p>Dont have account? <a href="#">create new account</a></p>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>

	)
}