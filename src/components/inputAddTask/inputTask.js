import React, { useState } from "react";
import styles from "./input.module.css";
import { Task } from "../task/task";
import { v4 as uuidv4 } from "uuid";

const InputAddTask = (props) => {
  const [input, setInput] = useState(" ");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const resetInput = () => {
    setInput(" ");
  };

  const newTask = (e) => {
    e.preventDefault();
    const textUpperCase = input.toUpperCase();
    const taskNew = {
      id: uuidv4(),
      text: textUpperCase,
      completed: false,
    };
    resetInput();
    props.sendTask(taskNew);
  };

  return (
    <>
      <form className={styles.wrapper} onSubmit={newTask}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ingrese una tarea"
          value={input}
        />
        <button type="submit" value="Add" className={styles.btn}>
          Add
        </button>
      </form>
    </>
  );
};

export { InputAddTask };
