import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import {
	Form,
	ContenedorTerminos,
	ContenedorBoton,
	Boton,
	//	Mensaje,
	MsjeError,
} from "../component/Formularios";
import Input from "../component/input";
//import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";


export const Page_register = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [name, cambiarName] = useState({ campo: "", valido: null });
	const [email, cambiarEmail] = useState({ campo: "", valido: null });
	const [username, cambiarUsername] = useState({ campo: "", valido: null });
	const [street, cambiarStreet] = useState({ campo: "", valido: null });
	const [city, cambiarCity] = useState({ campo: "", valido: null });
	const [country, cambiarCountry] = useState({ campo: "", valido: null });
	const [phone, cambiarPhone] = useState({ campo: "", valido: null });
	const [password, cambiarPassword] = useState({ campo: "", valido: null });
	const [confirm, cambiarConfirm] = useState({ campo: "", valido: null });
	const [terms, cambiarTerms] = useState(false);
	const [Form_valido, cambiarForm_valido] = useState(null);

	const expresiones = {
		name: /^[a-zA-ZÀ-ÿ\s]{4,17}$/, // Letras y espacios, pueden llevar acentos.
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		username: /^[a-zA-Z0-9_-]{1,40}$/, // Letras, numeros, guion y guion_bajo
		street: /^[a-zA-Z0-9\_\-]{4,20}$/, // Letras, numeros, guion y guion_bajo
		city: /^[a-zA-Z0-9\_\-]{4,20}$/, // Letras, numeros, guion y guion_bajo
		country: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
		phone: /^\d{7,16}$/, // 7 a 16 numeros.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		confirm: /^.{4,12}$/, // 4 a 12 digitos.
	};

	const validarPassword = () => {
		if (password.campo.length > 0) {
			if (password.campo !== confirm.campo) {
				cambiarConfirm((prevState) => {
					return { ...prevState, valido: "false" };
				});
			} else {
				cambiarConfirm((prevState) => {
					return { ...prevState, valido: "true" };
				});
			}
		}
	};

	const onChangeTerms = (e) => {
		cambiarTerms(e.target.checked);
	};


	const url = "https://3001-jorgereboll-proyectofin-b4kaxoo2l69.ws-us46.gitpod.io/api/users";
	const data = {};

	console.log (data)

	fetch (url,{
		method: "POST",
		body: JSON.stringify(data),
		headers:{
			"Content-Tye": "application/json"
		}
		
	}).then (res => res.json ())
		.catch (error => console.error("Error:",error))
		.then (response => console.log ("succes:",response));


	const onSubmit = (e) => {
		e.preventDefault();


		if (
			name.valido === "true" &&
			email.valido === "true" &&
			username.valido === "true" &&
			street.valido === "true" &&
			city.valido === "true" &&
			country.valido === "true" &&
			phone.valido === "true" &&
			password.valido === "true" &&
			confirm.valido === "true" &&
			terms
		) {
			cambiarForm_valido(true);
			cambiarName({ campo: "", valido: "" });
			cambiarEmail({ campo: "", valido: "" });
			cambiarUsername({ campo: "", valido: "" });
			cambiarStreet({ campo: "", valido: "" });
			cambiarCity({ campo: "", valido: "" });
			cambiarCountry({ campo: "", valido: "" });
			cambiarPhone({ campo: "", valido: "" });
			cambiarPassword({ campo: "", valido: "" });
			cambiarConfirm({ campo: "", valido: "" });
		} else {
			cambiarForm_valido(false);

		}




	//	useEffect(() => {

	//	}, []);

	//	fetch("https://3001-jorgereboll-proyectofin-b4kaxoo2l69.ws-us46.gitpod.io/api/users", {
	//		method: "POST",
	//		headers: { "Content-Type": "application/json" },
	//		body: JSON.stringify(useState)
	//	}).then(() => {
	//		console.log("Nuevo usuario");
	//		//	history.go(-1);
	//	})
	};









	return (
		<div className="container-fluid Container_reg  m-0 p-0">
			<main>
				<Form action="" onSubmit={onSubmit}>
					<Input
						estado={name}
						cambiarEstado={cambiarName}
						tipo="text"
						id="name"
						placeholder="Nombre completo"
						MsjeError="debe ser full name loco"
						expresionRegular={expresiones.name}
					/>
					<Input
						estado={email}
						cambiarEstado={cambiarEmail}
						tipo="text"
						id="email"
						placeholder="Correo electronico"
						MsjeError="debe ser full name loco"
						expresionRegular={expresiones.email}
					/>
					<Input
						estado={username}
						cambiarEstado={cambiarUsername}
						tipo="text"
						id="username"
						placeholder="Nombre de usuario"
						MsjeError="debe ser full name loco"
						expresionRegular={expresiones.username}
					/>
					<Input
						estado={street}
						cambiarEstado={cambiarStreet}
						tipo="text"
						id="street"
						placeholder="Direccion"
						MsjeError="debe ser full name loco"
						expresionRegular={expresiones.street}
					/>
					<Input
						estado={city}
						cambiarEstado={cambiarCity}
						tipo="text"
						id="city"
						placeholder="Ciudad"
						MsjeError="debe ser full name loco"
						expresionRegular={expresiones.city}
					/>
					<Input
						estado={country}
						cambiarEstado={cambiarCountry}
						tipo="text"
						id="country"
						placeholder="Pais"
						MsjeError="debe ser full name loco"
						expresionRegular={expresiones.country}
					/>
					<Input
						estado={phone}
						cambiarEstado={cambiarPhone}
						tipo="text"
						id="phone"
						placeholder="Numero Telefonico"
						MsjeError="debe ser full name loco"
						expresionRegular={expresiones.phone}
					/>
					<Input
						estado={password}
						cambiarEstado={cambiarPassword}
						tipo="password"
						id="password"
						placeholder="Contraseña"
						MsjeError="debe ser full name loco"
						expresionRegular={expresiones.password}
					/>
					<Input
						estado={confirm}
						cambiarEstado={cambiarConfirm}
						tipo="password"
						id="confirm_password"
						placeholder="Confirmar contraseña"
						MsjeError="Ambas contraseñas deben ser iguales"
						funcion={validarPassword}
					/>
					<ContenedorTerminos>
						<input
							type="checkbox"
							className="box"
							id="terminos"
							name="terminos"
							checked={terms}
							onChange={onChangeTerms}
						/>
						<label form="reg_agree">
							Acepto los terminos <a href="">terms</a>
						</label>
						<p>
							Tienes una cuenta? <a href="/login">Ingresa aqui</a>
						</p>
					</ContenedorTerminos>
					{Form_valido === false && (
						<MsjeError>
							<p>
								<FontAwesomeIcon icon={faExclamationTriangle} />
								<b>Error:</b> Por favor completa los datos
								correctamente.
							</p>
						</MsjeError>
					)}

					<ContenedorBoton>
						<Boton type="submit" className="login-button">
							<i className="fa fa-chevron-right">Go</i>
						</Boton>
						{Form_valido === true &&
							alert("impeque")
						}
					</ContenedorBoton>
				</Form>
			</main>
		</div>
	);
};



