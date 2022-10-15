import React from "react";
import styles from "./layout.module.css";
import ListTask from "../../components/listTask/listTask";

const LayoutTask = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Aca va el Logo</h1>
          <ListTask />
        </div>
      </div>
    </>
  );
};

export { LayoutTask };
