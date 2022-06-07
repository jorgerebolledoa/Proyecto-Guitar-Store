import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Login from "../component/Login/login.jsx";

export const Page_login = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Login
        logo2="Login"
        lg_remember="Recuerdame."
        text_preg1="Olvido la contraseña?"
        text_preg2="No tienes cuenta?"
        boton_forgotPass="/forgot_password "
        boton_newAccount="/register "
        text_linkForg="click aqui"
        text_linkNew="crear cuenta"
      />
    </>
  );
};
