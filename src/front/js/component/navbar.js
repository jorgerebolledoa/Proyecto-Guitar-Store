import React from "react";
import { Link } from "react-router-dom";
import { GiGuitarHead } from "react-icons/gi";
<<<<<<< HEAD
import { FaShoppingCart } from "react-icons/fa"




export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
			<div className="container d-flex">
				<Link className="navbar-brand text-warning ml-5" to="/">
					< GiGuitarHead />
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
						<div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
							<ul className="navbar-nav">
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle text-warning" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Inicia sesión
									</a>
									<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
										<li><a className="dropdown-item text-warning" href="#">Inicia sesión</a></li>{/* Agregar Link a LOGIN */}
										<li><a className="dropdown-item text-warning" href="#">Registrate</a></li> {/* Agregar Link a REGISTER*/}
										<li><a className="dropdown-item text-warning" href="#">Mi cuenta</a></li> {/* Agregar Link a PERFIL */}
									</ul>
								</li>
							</ul>
						</div>

						<button className="btn btn-outline text-warning ">
							<FaShoppingCart />
						</button>
					</form>
				</div>
			</div>
		</nav>
	)
}
=======
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
      <div className="container d-flex">
        <Link className="navbar-brand text-warning ml-5" to="/">
          <GiGuitarHead />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-warning"
                to="algun lado"
                href="#"
              >
                Marca 1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-warning"
                to="algun lado"
                href="#"
              >
                Marca 2
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link active text-warning"
                to="algun lado"
                href="#"
              >
                Marca 3
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-warning"
                to="algun lado"
                href="#"
              >
                Marca 4
              </Link>
            </li>
          </ul>
          <form className="d-flex me-5 ">
            <Link
              className="btn btn-outline text-warning"
              to="/carroDeCompras"
              href="/carroDeCompras"
            >
              <FaShoppingCart />
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};
>>>>>>> 9d23ed098c6ea10b0f286f589853672c1ab1d3fb
