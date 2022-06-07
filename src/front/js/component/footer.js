import React, { Component } from "react";
import { GiGuitarHead } from "react-icons/gi";
import { Link } from "react-router-dom";;
import "../../styles/footer.css"
export const Footer = () => {

  return (
    <div className="container-fluid bg-dark" >
      <footer className=" text-center text-warning">
        <section >
          <div className="row text-center d-flex justify-content-center pt-2">

            <div className="col-md-2 text-warning ">
              <Link to="" href="" className="text-warning text-decoration-none">< GiGuitarHead /></Link>
            </div>
            <div className="col-md-2 ">
              <Link to="" href="" className="text-warning text-decoration-none">Costumer Services</Link>
            </div>
            <div className="col-md-2">
              <Link to="" href="" className="text-warning text-decoration-none">Community FAQ</Link>
            </div>

            <div className="col-md-2">
              <Link to="/contacto" href="/contacto" className="text-warning text-decoration-none">Contact</Link>
            </div>

            <div className="col-md-2">
              <Link to="/Terminos" href="" className="text-warning text-decoration-none">Term of Use</Link>
            </div>
          </div>
        </section>
        <div className="container-fluid ">
          <h6 className="font-weight-bold">
            <Link to="/adminprueba" href="/adminprueba" className="text-warning text-decoration-none ">Admin Test</Link>
          </h6>
          <section className="mb-2">
            <a className="btn btn-outline-warning btn-floating m-3" id="btnFooter" href="https://www.facebook.com/" role="button">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn form btn-outline-warning btn-floating m-3" id="btnFooter" href="https://twitter.com/" role="button">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn form btn-outline-warning btn-floating m-3" id="btnFooter" href="https://www.instagram.com/" role="button">
              <i className="fab fa-instagram"></i>
            </a>
          </section>
        </div>
        <div className="d-inline-flex text-warning">
          <p> Copyright © 2022 </p>
        </div>
      </footer>
    </div>
  )
};
