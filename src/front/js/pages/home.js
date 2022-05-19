import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Cards from "./Cards.jsx";
import Forgot_password from "../component/Login/forgot_password.js";
import Carousel from "./Carousel-home.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Carousel img="https://picsum.photos/1080/720" />
      <Cards />
      <Forgot_password
        logo2="Forgot your password?"
        parrafo="Oops! It happens to the best of us. Input your email address to
        fix the issue."
        fp_email=" Email address"
        boton_login=" " 
        boton__newAccount=" "
        text_preg1="Already have an account?"
        text_preg2="New user?"
        text_botonLogin="login here"
        text_botonNew="create new account"/>
    </>
  );
};
