import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Forgot_password from "../component/Login/forgot_password.js";


export const Page_forgot_password = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <Forgot_password
                logo2="Forgot your password?"
                parrafo="Oops! It happens to the best of us. Input your email address to
                        fix the issue."
                fp_email=" Email address"
                boton_login="/login "
                boton_newAccount="/register "
                text_preg1="Already have an account?"
                text_preg2="New user?"
                text_botonLogin="login here"
                text_botonNew="create new account" />
        </>
    );
};
