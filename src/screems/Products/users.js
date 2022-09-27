import React, { useState, useEffect } from "react";
import { Tableusers } from "../../components/Users/tableUsers";
import style from "./users.module.css";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
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

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div className={style.container}>
      <h1>Componente Users</h1>
      <button onClick={goToHome}>Ir a Home</button>
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
