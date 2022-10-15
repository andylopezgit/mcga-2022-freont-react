import React, { useEffect } from "react";
import "./login.css";
import { Route, Router } from "react-router-dom";

function Login() {
  const [user, setUser] = React.useState([]);
  const [pass, setPass] = React.useState([]);

  useEffect(() => {
    console.log(user);
    if (user === "Jorge") return;
    setUser("Jorge");
  }, [user]);

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    console.log(user, pass);
  };

  return (
    <section>
      <form action="" className="formLogin" onSubmit={login}>
        <label htmlFor="">User:</label>
        <input type="text" onChange={handleUser} />
        <label htmlFor="">Pass:</label>
        <input type="password" onChange={handlePass} />
        <input type="submit" value="Loginn" className="btnLogin" />
      </form>
    </section>
  );
}

export { Login };
