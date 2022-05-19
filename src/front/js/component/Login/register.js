import React from "react";
import { Link } from "react-router-dom";
import { GiGuitarHead } from "react-icons/gi";

export const Register = () => {
  return (                   ///////////Faltan detalles//////////
  <div className="container-fluid Container3 m-0 p-0">
  <div className="register text-center mb-3">
    <div className="logo text-warning m-1">< GiGuitarHead /></div>
    <div className="logo2 text-warning m-2">{props.logo2}</div>
    <div className="login-form-1">
      <form id="register-form" className="text-left">
        <div className="login-form-main-message"></div>
        <div className="main-login-form">
          <div className="login-group">
            <div className="form-group">
              <div className="form-group">
                <label form="reg_fullname" className="sr-only">{props.reg_fullname}</label>
                <input type="text" className="form-control" id="reg_fullname" name="reg_fullname required" placeholder="Full name" />
              </div>
              <label form="reg_email" className="sr-only">{props.reg_email}</label>
              <input type="text" className="form-control" id="reg_email" name="reg_email required" placeholder="Enter email address" />
            </div>
            <div className="form-group">
              <label form="reg_username" className="sr-only">{props.reg_username}</label>
              <input type="text" className="form-control" id="reg_username" name="reg_username required" placeholder="Username" />
            </div>
            <div className="form-group">
              <label form="reg_street" className="sr-only">{props.reg_street}</label>
              <input type="text" className="form-control" id="reg_street" name="reg_street required" placeholder="Street Address" />
            </div>
            <div className="form-group">
              <label form="reg_city" className="sr-only">{props.reg_city}</label>
              <input type="text" className="form-control" id="reg_city" name="reg_city required" placeholder="City" />
            </div>
            <div className="form-group">
              <label form="reg_country" className="sr-only">{props.reg_country}</label>
              <input type="text" className="form-control" id="reg_country" name="reg_countryrequired" placeholder="Country" />
            </div>
            <div className="form-group">
              <label form="reg_phone" className="sr-only">{props.reg_phone}</label>
              <input type="text" className="form-control" id="reg_phone" name="reg_phone required" placeholder="Phone Number" />
            </div>

            <div className="form-group">
              <label form="reg_password" className="sr-only">{props.reg_password}</label>
              <input type="password" className="form-control" id="reg_password" name="reg_password required" placeholder="Password" />
            </div>
            <div className="form-group">
              <label form="reg_password_confirm" className="sr-only">{props.reg_password_confirm}</label>
              <input type="password" className="form-control" id="reg_password_confirm" name="reg_password_confirm required" placeholder="Confirm password" />
            </div>
            {/*  <div className="form-group login-group-checkbox">*/}

            {/* </div>*/}
          </div>
          <button type="submit" className="login-button"><i className="fa fa-chevron-right">Go</i></button>
        </div>
        <div className="etc-login-form text-warning m-3">
          <input type="checkbox" className="box" id="reg_agree" name="reg_agree required" />
          <label form="reg_agree"> {props.text_linkAgree} <a href={props.link_agree}>{props.text_linkAgree2}</a></label>
          <p>{props.text_linkLogin} <a href={props.link_login}>{props.text_linkLogin2}</a></p>      {/*//////////Agregar Links/////////*/}
        </div>
      </form>
    </div>

  </div>
</div>

  )
}


Register.propTypes = {

	logo2: PropTypes.string,
	reg_fullname: PropTypes.string,
	reg_email: PropTypes.string,
	reg_username: PropTypes.string,
	reg_street: PropTypes.string,
	reg_city: PropTypes.string,
	reg_country: PropTypes.string,
	reg_phone: PropTypes.string,
  reg_password: PropTypes.string,
  reg_password_confirm: PropTypes.string,
	text_linkAgree: PropTypes.string,
	link_agree: PropTypes.string,
  text_linkAgree2:PropTypes.string,
  text_linkLogin: PropTypes.string,
	link_login: PropTypes.string,
  text_linkLogin2:PropTypes.string,
};

<>
	<Register
		logo2="Register"
		reg_fullname="Full Name"
		reg_email="Enter email address"
		reg_username="Username"
		reg_street="Street Address"
	  reg_city="City"
		reg_country="Country"
    reg_phone="Phone Number"
    reg_password="Password"
    reg_password_confirm="Password Confirm"
		text_linkAgree="I agree with"
    link_agree=" "
    text_linkAgree2="terms"
		text_linkLogin="Already have an account?"
    link_login=" "
    text_linkLogin2="Login here"
	/>
</>

