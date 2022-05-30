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
    <div className="container-fluid m-0 p-0">
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
                  Strandbergguitars
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
                  prsguitars
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
                    <li>
                      <a
                        className="dropdown-item text-warning"
                        href="/forgot_password"
                      >
                        Forgot password
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <Link
              className="btn btn-outline text-warning"
              to="/carroDeCompras"
              href="/carroDeCompras"
            >
              <FaShoppingCart />
            </Link>
            <form />
          </div>
        </div>
      </nav>
    </div>
  );
};
