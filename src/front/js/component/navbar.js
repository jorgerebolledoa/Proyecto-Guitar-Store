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
    <nav className={`navbar d-flex justify-content-center    mb-5 navbar-expand-lg   bg-${state.bg} fixed-top ${!!state.shadow ? state.shadow : ""
      }`}>
      <div className="container-fluid">
        <a className="navbar-brand text-warning ml-5" href="/">
          <GiGuitarHead />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-warning"
                href="/categoria/1"
              >
                Cort
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-warning"
                href="/categoria/2"
              >
                Strandbergguitars
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active text-warning"
                href="/categoria/3"
              >
                Fender
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-warning"
                href="/categoria/4"
              >
                prsguitars
              </a>
            </li>
            <div className="d-flex justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-warning"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Login
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      {!store.token ? (
                        <Link to="/login" className="dropdown-item text-warning" href="/login">
                          Login
                        </Link>
                      ) : (
                        <Link to="/" onClick={() => actions.logout()} className="dropdown-item text-warning" href="">
                          Logout
                        </Link>
                      )}
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-warning"
                        href="/register"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <a
                className="btn btn-outline text-warning"
                href="/carroDeCompras"
              >
                <FaShoppingCart />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav >
  )
};
