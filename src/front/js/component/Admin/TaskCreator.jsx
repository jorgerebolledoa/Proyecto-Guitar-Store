import React, { useState } from "react";

export const TaskCreator = props => {
  const [newTaskName, setNewTaskName] = useState("");

  const updateNewTaskValue = e => setNewTaskName(e.target.value);

  const createNewTask = () => {
    props.callback(newTaskName);
    setNewTaskName('');
  }




  return (
    <div className="field">
      <input
        type="text"
        className="fieldText"
        value={newTaskName}
        onChange={updateNewTaskValue}
      />
      <button className="fieldButton" onClick={createNewTask}>
        Agrega una tarea
      </button>
    </div>
  );
};