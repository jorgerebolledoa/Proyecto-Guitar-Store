import React from "react";
import "../../../styles/admin.css";
import { TaskCreator } from "./TaskCreator.jsx";
import { TaskRow } from "./TaskRow.jsx";
import { VisibilityControl } from "./VisibilityControl.jsx";
import { useState, useEffect } from "react";

export const TodoListAdmin = () => {
  const [taskItems, setTaskItems] = useState([
    { name: "Tarea uno pendiente como ejemplo", done: false },
    { name: "Tarea uno realizada como ejemplo", done: true },
  ]);
  const [showCompleted, setshowCompleted] = useState(true);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = task =>
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const taskTableRows = doneValue =>
    taskItems
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));
  return (
    <>
      <div>
        <h4 className="title text-white">
          Tareas pendientes
        </h4>
      </div>
      <div>
        <TaskCreator callback={createNewTask} />
        <table className="taskBox text-white">
          <tbody>{taskTableRows(false)}</tbody>
        </table>
        <div className="taskBox square text-white">
          <VisibilityControl
            description="Completed Tasks"
            isChecked={showCompleted}
            callback={checked => setshowCompleted(checked)}
          />
        </div>
        {showCompleted && (
          <table className="taskBox text-white">
            <tbody>{taskTableRows(true)}</tbody>
          </table>
        )}
      </div>
    </>
  )
}