import React, { Component } from "react";
import { GiGuitarHead } from "react-icons/gi";
import { Link } from "react-router-dom";;

export const Footer = () => {

  return (
    <div className="container-fluid bg-dark" >
      <footer className=" text-center text-warning">
        <section >
          <div className="row text-center d-flex justify-content-center pt-2">

            <div className="col-md-2 text-warning ">
              <Link to="" href="" className="text-warning">< GiGuitarHead /></Link>
            </div>
            <div className="col-md-2 ">
              <Link to="" href="" className="text-warning ">Costumer Services</Link>
            </div>
            <div className="col-md-2">
              <Link to="" href="" className="text-warning">Community FAQ</Link>
            </div>

            <div className="col-md-2">
              <Link to="/contacto" href="/contacto" className="text-warning">Contact</Link>
            </div>

            <div className="col-md-2">
              <Link to="" href="" className="text-warning">Term of Use</Link>
            </div>
          </div>
        </section>
        <div className="container-fluid ">
          <h6 className="font-weight-bold">
            <Link to="/adminprueba" href="/adminprueba" className="text-warning">Admin Test</Link>
          </h6>
          <section className="mb-2">
            <Link className="btn btn-outline-warning btn-floating m-3" id="btnFooter" to="" href="" role="button">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="btn form btn-outline-warning btn-floating m-3" id="btnFooter" to="" href="" role="button">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link className="btn form btn-outline-warning btn-floating m-3" id="btnFooter" to="" href="" role="button">
              <i className="fab fa-instagram"></i>
            </Link>
          </section>
        </div>
        <div className="d-inline-flex text-warning">
          <p> Copyright © 2022</p>
        </div>
      </footer>
    </div>
  )
};
