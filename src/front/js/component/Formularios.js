import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "styled-components";

const colores = {
	borde: "rgba(0, 0, 0, 0.06) ",
	error: "#CE1414",
	exito: "#1ed12d",
};

const Form = styled.form`
	position: relative;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6),
		inset 2px 2px 4px rgba(255, 255, 255, 0.5);
	border: none;
	outline: none;
	background-color: rgba(0, 0, 0, 0.8);
	color: #efc804de;
	border-radius: 8px;
	padding: 10px 20px;
	margin-bottom: 0;
	border-bottom: 1px solid #efefef69;

	&:hover {
		box-shadow: 2px 2px 4px rgba(45, 45, 45, 0.092),
			inset 2px 2px 6px rgba(255, 255, 255, 0.5);
	}
`;

const GrupoInput = styled.div`
	margin-bottom: 0;
	border-bottom: 1px solid #efefef69;
	position: relative;
	background: transparent;
	padding: 7px 0;
	font-weight: light;
	color: #efc804de;
	height: auto;

	  
}
	}
	&:hover {

	border-color: rgba(255, 255, 255, 0.752);
			}

`;
const Input = styled.input`
	background-color: rgba(0, 0, 0, 0.06);
	border: 0;
	width: 100%;
	box-shadow: 0 0 0;
	border-radius: 4px;
	color: #efc804de;
	padding: 7px 0;
	font-weight: light;
	height: auto;

	&: focus {
		border: 1px solid ${colores.borde};
		outline: none;
		box-shadow: 1px 0px 1px rgba(163, 163, 163, 0.4);
	}
	${(props) =>
		props.valido === "true" &&
		css`
			border: 1px solid transparent;
		`}
	${(props) =>
		props.valido === "false" &&
		css`
			border-bottom: 1px dotted ${colores.error} !important;
		`}
`;
const Error = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;
	${(props) =>
		props.valido === "true" &&
		css`
			display: none;
		`}
	${(props) =>
		props.valido === "false" &&
		css`
			display: block;
		`}
`;
const Validacion = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 15px;
	z-index: 100;
	font-size: 18px;
	opacity: 0;
	border-radius: 8px;

	${(props) =>
		props.valido === "true" &&
		css`
			opacity: 1;
			color: ${colores.exito};
		`}
	${(props) =>
		props.valido === "false" &&
		css`
			opacity: 1;
			color: ${colores.error};
		`}
`;
const ContenedorTerminos = styled.div`
	grid-column: span 2;
	input {
		margin-right: 10px;
	}
	@media (max-width: 800px) {
		grid-column: span 1;
	}
`;
const ContenedorBoton = styled.div`
	display:flex
    flex-direction:column;
    align-items:center;
    grid-column:span 2;
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;
const Boton = styled.button`
	position: absolute;
	right: -25px;
	top: 50%;
	background: #413f3f64;
	color: #efc804de;
	padding: 0 20px 0 0;
	width: 50px;
	height: 50px;
	margin-top: -25px;
	border: 5px solid #efc804de;
	border-radius: 50%;
	transition: all ease-in-out 500ms;

	&:hover {
		color: #efc804de;
		transform: rotate(450deg);
	}
`;
//const Mensaje = styled.p`
//	font-size: 14px;
//	color: ${colores.exito};
//`;
const MsjeError = styled.div`
	height: 45px;
	line-height: 45px;
	background: ${colores.error};
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 1;
	p {
		margin: 0;
	}
	b {
		margin-left: 10px;
	}
`;
export {
	Form,
	GrupoInput,
	Input,
	Error,
	Validacion,
	ContenedorTerminos,
	ContenedorBoton,
	Boton,
	//	Mensaje,
	MsjeError,
};