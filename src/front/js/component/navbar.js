import React from "react";
import { Link } from "react-router-dom";
import {GiGuitarHead } from "react-icons/gi";
import {FaShoppingCart} from "react-icons/fa"




export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
			<div className="container d-flex">
				<Link className="navbar-brand text-warning ml-5" to="/">
				< GiGuitarHead/>
				</Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active text-warning" to="algun lado" href="#">Marca 1</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active text-warning" to="algun lado" href="#">Marca 2</Link>
						</li>
						<li className="nav-item dropdown">
							<Link className="nav-link active text-warning" to="algun lado" href="#">Marca 3</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active text-warning" to="algun lado" href="#">Marca 4</Link>
						</li>
					</ul>
					<form className="d-flex me-5 ">
						<button className="btn btn-outline text-warning ">
							<FaShoppingCart/>
						</button>
					</form>
				</div>
			</div>
		</nav>
	)
}
