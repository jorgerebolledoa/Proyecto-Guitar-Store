import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Cards from "./Cards.jsx";

import Carousel from "./Carousel-home.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Carousel
        img="https://picsum.photos/id/1/1080/720"
        img2="https://picsum.photos/id/69/1080/720"
        img3="https://picsum.photos/id/40/1080/720"
      />
      <Cards />

     
    </>
  );
};


       

