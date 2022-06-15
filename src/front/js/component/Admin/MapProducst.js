import "../../../styles/admin.css";
import React, { useEffect, useState } from "react";
import ProductSection from "./ProductSection";

const MapProducts = () => {
    useEffect(() => { }, []);
    const [lista, setlista] = useState([]);
    const urlApi = "https://3001-davidgcorso-proyectofin-zlegvip7c6l.ws-us47.gitpod.io/api/products" 
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
        lista.map((product, index) => {
            return (
                <div key={product.id}>
                    <ProductSection
                        img={product.img1}
                        title={product.name}
                
                    />
                </div>
            );
        })
    );
};
export default MapProducts;