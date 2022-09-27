import React from "react";
import styles from "./tableUsers.module.css";

const Tableusers = ({ id, name, username, email }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
    </tr>
  );
};

export { Tableusers };
