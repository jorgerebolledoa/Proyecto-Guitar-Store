import "../../../styles/Slider.css";
import X250 from "../../../img/X250BKfull.png";
import React, { useEffect, useState } from "react";
import Slider from "./Slider";

const Mapeo_Slider = () => {
    useEffect(() => { }, []);
    const [lista, setlista] = useState([]);
    const urlApi = "https://3001-jorgereboll-proyectofin-f5wtyul2spl.ws-us46.gitpod.io/api/categories"
    useEffect(() => {
        getTask(urlApi);
    }, []);
    const getTask = (url) => {
        fetch(url)
            .then((Response) => Response.json())
            .then((data) => {
                console.log(data);
                setlista(data);
            })
            .catch((error) => console.log(error));
    };
    return (
        lista.length > 0 &&
        lista.map((tastk, index) => {
            return (
                <div key={tastk.id}>
                    <Slider
                        img={X250}
                        title={tastk.name}
                        text={tastk.description}
                        link={"/categoria/" + tastk.id}
                    />
                </div>
            );
        })
    );
};
export default Mapeo_Slider;
