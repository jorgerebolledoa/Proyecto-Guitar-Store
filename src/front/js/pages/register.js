import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Register from "/src/front/js/component/Login/register.js";



export const Page_register = () => {
    const { store, actions } = useContext(Context);

    return (
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
                link_login="/login"
                text_linkLogin2="Login here"
            />
        </>
    );
};


