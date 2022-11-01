import React, { useState } from "react";
import ButtonShared from "./ButtonShared";
import InputShared from "./InputShared";
import styles from "../../screems/Login/login.module.css";

const FormShared = ({ style }) => {
  const INITIAL_STATE = "";
  const [user, setUser] = useState(INITIAL_STATE);
  const [password, setPassword] = useState(INITIAL_STATE);

  const handleChangeUser = (e) => {
    const user = e.target.value;
    setUser(user);
  };

  const handleChangePass = (e) => {
    const pass = e.target.value;
    setPassword(pass);
  };

  const login = () => {
    console.log("user", user, "pass", password);
    resetInput();
  };

  const resetInput = () => {
    setUser(INITIAL_STATE);
    setPassword(INITIAL_STATE);
    console.log(user, password);
  };
  return (
    <form className={style.form}>
      <span>Desde Form Shared</span>
      <InputShared type="text" myFunc={handleChangeUser} value={user} />
      <InputShared type="password" myFunc={handleChangePass} value={password} />
      <ButtonShared
        className={style.btn2}
        type="button"
        text="Aceptar"
        onClick={() => login()}
      ></ButtonShared>
    </form>
  );
};

export default FormShared;
