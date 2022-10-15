import React, { useState } from "react";
import { Task } from "../task/task";
import { InputAddTask } from "../inputAddTask/inputTask";

function ListTask() {
  const [tasks, setTasks] = useState([]);

  const addTasks = (task) => {
    console.log("tarea agregada");
    console.log(task);
  };
  return (
    <>
      <h2>Componente lista de tareas</h2>
      <InputAddTask sendTask={addTasks} />
      <div>
        {/*  muestro una lista de componentes task*/}
        {tasks.map((task) => (
          <Task />
        ))}
      </div>
    </>
  );
}

export default ListTask;
