import React from "react";
import {
	GrupoInput,
	Input,
	Error,
	Validacion,
} from "../component/Formularios";
import {
	faCheckCircle,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const ComponenteInput = ({
	id,
	tipo,
	estado,
	cambiarEstado,
	placeholder,
	MsjeError,
	expresionRegular,
	funcion,
}) => {
	const onChange = (e) => {
		cambiarEstado({ ...estado, campo: e.target.value });
	};
	const Validando = () => {
		if (expresionRegular) {
			if (expresionRegular.test(estado.campo)) {
				cambiarEstado({ ...estado, valido: "true" });
			} else {
				cambiarEstado({ ...estado, valido: "false" });
			}
		}
		if (funcion) {
			funcion();
		}
	};
	return (
		<div>
			<GrupoInput>
				<Input
					type={tipo}
					placeholder={placeholder}
					id={id}
					value={estado.campo}
					onChange={onChange}
					onKeyUp={Validando}
					onBlur={Validando}
					valido={estado.valido}
				/>

				<Validacion
					icon={
						estado.valido === "true" ? faCheckCircle : faTimesCircle
					}
					valido={estado.valido}
				/>
			</GrupoInput>
			<Error valido={estado.valido}>{MsjeError}</Error>
		</div>
	);
};
export default ComponenteInput;