import React, { useEffect, useState } from "react";
import 'animate.css'



export const Profile = () => {
    useEffect(() => { }, []);
    const [profile, setProfile] = useState([]);
    const urlApi = "https://3001-jorgereboll-proyectofin-f5wtyul2spl.ws-us47.gitpod.io/api/profile"
    useEffect(() => {
        getTask(urlApi);
    }, []);
    const getTask = (url) => {
        fetch(url, {
            headers: {
                "Authorization": "Bearer token"
            }
        })
            .then((Response) => Response.json())
            .then((data) => {
                console.log(data);
                setProfile(data);
            })
            .catch((error) => console.log(error));
    };


    return (

        <>
            <div className="container-fluid Container1">
                <div className="container bg-gradient -10 text-warning Container4 mt-5 animate__animated animate__fadeInDownBig animate__delay-0.5s">
                    <h2 className="pb-3 pt-3 border-bottom">Perfil</h2>
                    <div className="row mb-3">
                        <div className="col-6">
                            <label>Nombre completo:</label>
                        </div>
                        <div className="col-6 ">
                            <label>{profile.name}</label>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <label>Correo electronico:</label>
                        </div>
                        <div className="col-6">
                            <label>{profile.email}</label>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <label>Direccion:</label>
                        </div>
                        <div className="col-6">
                            <label>{profile.address}</label>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <label>Ciudad:</label>
                        </div>
                        <div className="col-6">
                            <label>{profile.city}</label>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <label>Pais:</label>
                        </div>
                        <div className="col-6">
                            <label>{profile.country}</label>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <label>Telefono:</label>
                        </div>
                        <div className="col-6">
                            <label>{profile.phone}</label>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <label>Contraseña:</label>
                        </div>
                        <div className="col-6">
                            <label>{profile.password}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container d-flex justify-content-around mt-3">
                            <button type="button" className="btn btn-sm">Editar</button>
                            <button type="button" className="btn btn-sm">Guardar</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};
