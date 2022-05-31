import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Forgot_password from "../component/Login/forgot_password.js";


export const Page_forgot_password = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <Forgot_password
                logo2="Olvidaste tu contraseña?"
                parrafo="Oops! Esto le pasa a los mejores, ingresa tu email para solucionarlo."
                    
                fp_email=" Email address"
                boton_login="/login "
                boton_newAccount="/register "
                text_preg1="Ya tienes una cuenta?"
                text_preg2="Nuevo usuario?"
                text_botonLogin="Ingresa aqui"
                text_botonNew="Crear nueva cuenta." />
        </>
    );
};
