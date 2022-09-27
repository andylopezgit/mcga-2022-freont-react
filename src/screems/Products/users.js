import React, { useState, useEffect } from "react";
import { Tableusers } from "../../components/Users/tableUsers";
import style from "./users.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((datos) => {
        setUsers(datos);
      });
  }, [users]);

  return (
    <div className={style.container}>
      <h1>Componente Tabla</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
        </tr>
        {users.map((item) => (
          <Tableusers
            class
            id={item.id}
            name={item.name}
            username={item.username}
            email={item.email}
          />
        ))}
      </table>
    </div>
  );
};

export { Users };
