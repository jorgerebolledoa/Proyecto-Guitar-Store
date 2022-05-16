import React from "react";
import { Link } from "react-router-dom";
import { GiGuitarHead } from "react-icons/gi";

export const Login = () => {
  return (                   ///////////Faltan detalles//////////

    <div className="register text-center mb-3">
      <div className="logo text-warning m-5">< GiGuitarHead /></div>
      <div className="logo2 text-warning m-3">Register</div>
      <div className="login-form-1">
        <form id="register-form" className="text-left">
          <div className="login-form-main-message"></div>
          <div className="main-login-form">
            <div className="login-group">
              <div className="form-group">
                <div className="form-group">
                  <label form="reg_fullname" className="sr-only">Full Name</label>
                  <input type="text" className="form-control" id="reg_fullname" name="reg_fullname required" placeholder="Full name" />
                </div>
                <label form="reg_email" className="sr-only">Email</label>
                <input type="text" className="form-control" id="reg_email" name="reg_email required" placeholder="Enter email address" />
              </div>
              <div className="form-group">
                <label form="reg_username" className="sr-only">Email address</label>
                <input type="text" className="form-control" id="reg_username" name="reg_username required" placeholder="Username" />
              </div>
              <div className="form-group">
                <label form="reg_street" className="sr-only">Street Address</label>
                <input type="text" className="form-control" id="reg_street" name="reg_street required" placeholder="Street Address" />
              </div>
              <div className="form-group">
                <label form="reg_city" className="sr-only">City</label>
                <input type="text" className="form-control" id="reg_city" name="reg_city required" placeholder="City" />
              </div>
              <div className="form-group">
                <label form="reg_country" className="sr-only">Country</label>
                <input type="text" className="form-control" id="reg_country" name="reg_countryrequired" placeholder="Country" />
              </div>
              <div className="form-group">
                <label form="reg_phone" className="sr-only">Phone Number</label>
                <input type="text" className="form-control" id="reg_phone" name="reg_phone required" placeholder="Phone Number" />
              </div>

              <div className="form-group">
                <label form="reg_password" className="sr-only">Password</label>
                <input type="password" className="form-control" id="reg_password" name="reg_password required" placeholder="Password" />
              </div>
              <div className="form-group">
                <label form="reg_password_confirm" className="sr-only">Password Confirm</label>
                <input type="password" className="form-control" id="reg_password_confirm" name="reg_password_confirm required" placeholder="Confirm password" />
              </div>
              {/*  <div className="form-group login-group-checkbox">*/}

              {/* </div>*/}
            </div>
            <button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
          </div>
          <div className="etc-login-form text-warning m-3">
            <input type="checkbox" className="box" id="reg_agree" name="reg_agree required" />
            <label form="reg_agree">  I agree with <a href="#">terms</a></label>
            <p>Already have an account? <a href="#">Login here</a></p>      {/*//////////Agregar Links/////////*/}
          </div>
        </form>
      </div>

    </div>

  )
}


