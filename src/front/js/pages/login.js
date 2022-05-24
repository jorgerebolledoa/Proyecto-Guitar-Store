import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Login from "../component/Login/login.js";


export const Page_login = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <Login
                logo2="Login"
                lg_username="Username"
                lg_password=" Password"
                lg_remember="Remember me."
                text_preg1="Forgot your password?"
                text_preg2="Dont have account?"
                boton_forgotPass="/forgot_password "
                boton_newAccount="/register "
                text_linkForg="click here"
                text_linkNew="create new"
            />
        </>
    );
};
