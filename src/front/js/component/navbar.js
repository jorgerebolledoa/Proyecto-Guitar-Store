import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GiGuitarHead } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({
    bg: "transparent",
    variant: "dark",
    shadow: null,
  });
  const listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      setState({ bg: "dark", shadow: "shadow" });
    } else {
      setState({ bg: "transparent", shadow: null });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className="container-fluid m-0 p-0 ">
      <nav
        className={`navbar mb-5 navbar-expand-lg  bg-${state.bg} fixed-top ${!!state.shadow ? state.shadow : ""
          }`}
      >
        <div className="container d-flex">
          <Link className="navbar-brand text-warning ml-5" to="/">
            <GiGuitarHead />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-warning"
                  to="/categoria/1"
                  href="/categoria/1"
                >
                  Cort
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-warning"
                  to="/categoria/2"
                  href="/categoria/2"
                >
                  Strandberg
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active text-warning"
                  to="/categoria/3"
                  href="/categoria/3"
                >
                  Fender
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-warning"
                  to="/categoria/4"
                  href="/categoria/4"
                >
                  PRS
                </Link>
              </li>
            </ul>
            <form className="d-flex me-5 " />

            <div className="btn-group">
              <Link
                className="nav-link active text-warning"
                to="/producto"
                href="#"
              >

              </Link>
              <ul className="navbar-nav">


                {store.currentUser === null ? (
                  <Link to="/register" className="nav-link active text-warning" href="/register">
                    Registrate
                  </Link>
                ) : (
                  <Link to="/profile" className="nav-link active text-warning" href="">
                    Perfil
                  </Link>
                )}
                <li>
                  {store.currentUser === null ? (
                    <Link to="/login" className="nav-link active text-warning" href="/login">
                      Ingresa
                    </Link>
                  ) : (
                    <Link to="/" className="nav-link active text-warning" onClick={() => actions.getlogout()}>
                      Cerrar sesion
                    </Link>
                  )}
                </li>

              </ul>
            </div>
            <div className="dropdown zindex-tooltip">
              <button className="btn btn-none dropdown-toggle text-warning" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <FaShoppingCart />
                <span className="badge bg-danger rounded-circle">0</span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Cart it's empty</a></li>
                <Link
                  className="btn btn-outline text-warning"
                  to="/carroDeCompras"
                  href="/carroDeCompras"
                >
                  <li><a className="dropdown-item" href="#">ir al carro</a></li>
                </Link>
              </ul>
            </div>

            <form />
          </div>
        </div>
      </nav>
    </div>
  );
};



