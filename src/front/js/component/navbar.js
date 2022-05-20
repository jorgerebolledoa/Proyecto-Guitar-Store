import React from "react";
import { Link } from "react-router-dom";
import { GiGuitarHead } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top mb-5">
        <div className="container d-flex">
          <Link className="navbar-brand text-warning ml-5" to="/">
            <GiGuitarHead />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-warning"
                  to="/producto"
                  href="#"
                >
                  Cort
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-warning"
                  to="/admin"
                  href="#"
                >
                  Strandbergguitars
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active text-warning"
                  to="/admin"
                  href="#"
                >
                  Fender
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-warning"
                  to="/admin"
                  href="#"
                >
                  prsguitars
                </Link>
              </li>
            </ul>
            <form className="d-flex me-5 " />

            <div className="btn-group">
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
                      <a className="dropdown-item text-warning" href="/login">
                        Login
                      </a>
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
