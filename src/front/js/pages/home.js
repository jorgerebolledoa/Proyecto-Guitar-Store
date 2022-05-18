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
      <Login />
      <Forgot_password />
    </>
  );
};
