import React, { useEffect, useState } from "react";
import { Task } from "../task/task";
import { InputAddTask } from "../inputAddTask/inputTask";

function ListTask() {
  const [tasks, setTasks] = useState([]);

  const addTasks = async (task) => {
    console.log("Llega la tarea a list task");
    console.log(task);
    await setTasks([...tasks, task]);
  };

  useEffect(() => {
    console.log("desde el use efect", tasks);
  });
  return (
    <>
      <h2>Componente lista de tareas</h2>
      <InputAddTask sendTask={addTasks} />
      <div>
        {tasks.map((item) => {
          return <h1>{JSON.stringify(item)}</h1>;
        })}
      </div>
    </>
  );
}

export default ListTask;
