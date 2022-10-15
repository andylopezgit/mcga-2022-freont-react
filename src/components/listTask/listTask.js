import React, { useEffect, useState } from "react";
import { Task } from "../task/task";
import { InputAddTask } from "../inputAddTask/inputTask";
import styles from "./index.module.css";

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
      <div className={styles.layout}>
        {tasks.map((item) => {
          return (
            <Task task={item.text} completed={item.completed}>
              {JSON.stringify(item)}
            </Task>
          );
        })}
      </div>
    </>
  );
}

export default ListTask;
