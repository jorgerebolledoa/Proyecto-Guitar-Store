import React, { useEffect, useState } from "react";
import "../../styles/img.css";
import CardDerecha from "../component/Vista_principal/CardimgDerecha.jsx";
import Cardlateral from "../component/Vista_principal/Cardlateral.jsx";
import { useParams } from "react-router-dom";
export const CategoriaDetail = () => {
    const { id_categori } = useParams();

    useEffect(() => { }, []);
    const [lista, setlista] = useState([]);
    const urlApi = "https://3001-jorgereboll-proyectofin-f5wtyul2spl.ws-us46.gitpod.io/api/products/id/" + id_categori
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

        <div className="container  " key={lista.id}>
            <div className="row ">
                <div className="col-12 col-md-12">
                    <Cardlateral
                        img={lista.img1}
                        title={lista.name}
                        text={lista.description_1}
                        linkbtn={"/producto/" + lista.name}
                        textbtn="Comprar"
                    />
                </div>
                <div className="col-12 col-md-12">
                    <CardDerecha
                        img={lista.img2}
                        title={lista.name}
                        text={lista.description_2}
                        linkbtn={"/producto/" + lista.name}
                        textbtn="Comprar"
                    />
                </div>
                <div className="col-12 col-md-12">
                    <Cardlateral
                        img={lista.img3}
                        title={lista.name}
                        text={lista.description_3}
                        linkbtn={"/producto/" + lista.name}
                        textbtn="Comprar"
                    />
                </div>
                <div className="col-12 col-md-12">
                    <CardDerecha
                        img={lista.img4}
                        title={lista.name}
                        text={lista.description_4}
                        linkbtn={"/producto/" + lista.name}
                        textbtn="Comprar"
                    />
                </div>
            </div>
        </div>
    )
}