import React from "react";

export const VisibilityControl = props => {
  return (
    <div className="m-2">
      <input
        type="checkbox"
        className=""
        checked={props.isChecked}
        onChange={ e => props.callback(e.target.checked)}
      />
      <label >
        Mostrar tareas completas
      </label>
    </div>
  );
};