import React, { useState } from "react";
import ButtonShared from "./ButtonShared";
import InputShared from "./InputShared";
import styles from "../../screems/Login/login.module.css";
import { useForm } from "react-hook-form";

const FormShared = ({ style }) => {
  const INITIAL_STATE = "";
  const [user, setUser] = useState(INITIAL_STATE);
  const [password, setPassword] = useState(INITIAL_STATE);

  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => console.log("desde el onsubmit", data);

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
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <span>Desde Form Shared</span>
      <InputShared type="text" name="valUser" register={register} />
      <InputShared type="password" name="passUser" register={register} />
      <ButtonShared
        className={style.btn}
        text="Aceptar"
        // onClick={() => login()}
        type="submit"
      ></ButtonShared>
    </form>
  );
};

export default FormShared;
