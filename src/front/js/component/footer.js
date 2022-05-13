import React, { Component } from "react";
import { GiGuitarHead } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Footer = () => {

	return (
		<div className="footer expand-lg  bg-dark text-warning ">


			<div className="container d-flex justify-content-center ">
				<span className="nav-item text-warning">
					< GiGuitarHead />
				</span>

				<span className="nav-item">
					<Link className="nav-link active text-warning" to="agregar link" href="#">Customer Services</Link>
				</span>
				<span className="nav-item">
					<Link className="nav-link active text-warning" to="agregar link" href="#">Comunnity FQA</Link>
				</span>
				<span className="nav-item dropdown">
					<Link className="nav-link active text-warning" to="agregar link" href="#">Contact</Link>
				</span>
				<span className="nav-item">
					<Link className="nav-link active text-warning" to="agregar link" href="#">Term of Use</Link>
				</span>
				<span className="nav-item">
					<Link className="nav-link active text-warning" to="agregar link" href="#">Privacy Policy</Link>
				</span>


			</div>
		</div>
	)

};
