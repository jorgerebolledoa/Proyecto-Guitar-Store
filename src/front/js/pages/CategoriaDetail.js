import React, { useEffect, useState } from "react";
import "../../styles/img.css";
import CardDerecha from "../component/Vista_principal/CardimgDerecha.jsx";
import Cardlateral from "../component/Vista_principal/Cardlateral.jsx";
import { useParams } from "react-router-dom";
import Card from "../component/Vista_principal/Card.jsx";
export const CategoriaDetail = () => {
    const { id_categori } = useParams();

    useEffect(() => { }, []);
    const [lista, setlista] = useState([]);
    const urlApi = "https://3001-jorgereboll-proyectofin-f5wtyul2spl.ws-us46.gitpod.io/api/products/id_categori/" + id_categori
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
                    <Card
                        img={tastk.img1}
                        title={tastk.name}
                        text={tastk.description}
                        linkbtn={"/categoria/" + tastk.id}
                        textbtn="Comprar"
                    />
                </div>
            );
        })
    );
};
