import React, { useState } from "react";
import styles from "./input.module.css";
import { Task } from "../task/task";
import { v4 as uuidv4 } from "uuid";

const InputAddTask = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const newTask = (e) => {
    e.preventDefault();
    const taskNew = {
      id: uuidv4(),
      text: input,
      completed: false,
    };

    props.sendTask(taskNew);
  };

  return (
    <>
      <form className={styles.wrapper} onSubmit={newTask}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ingrese una tarea"
        />
        <button type="submit" value="Add" className={styles.btn}>
          Add
        </button>
      </form>
    </>
  );
};

export { InputAddTask };
