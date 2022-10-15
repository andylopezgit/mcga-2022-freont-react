import React from "react";
import styles from "./task.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ task, completed }) {
  return (
    <div className={styles.container_task}>
      <div className={completed ? styles.task_completed : styles.task}>
        {task}
      </div>
      <div>
        <AiOutlineCloseCircle className={styles.task_icon} />
      </div>
    </div>
  );
}

export { Task };
