import logo from "./logo.svg";
import "./App.css";
import { Task } from "./components/task/task";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Login } from "./components/login/login";

function App() {
  const [task, setTask] = useState([]);

  const addTask = (e) => {
    setTask(e.target.value);
  };
  const addTask2 = (event) => {
    event.preventDefault();
    const id = uuidv4();
    console.log(task);
    console.log(id);
  };

  return (
    <div className="container">
      <Login />
      {/*<div className='title'>*/}
      {/*    <h2>Task Maneger</h2>*/}
      {/*</div>*/}

      {/*<form onSubmit={addTask2}>*/}
      {/*    <label>*/}
      {/*        Name:*/}
      {/*        <input type="text" value={task} onChange={addTask}/>*/}
      {/*    </label>*/}
      {/*    <input type="submit" value="Submit"/>*/}
      {/*</form>*/}
      {/*<Task task={task} completed="true"/>*/}
    </div>
  );
}

export default App;
