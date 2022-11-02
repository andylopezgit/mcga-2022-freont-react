import React from "react";
import { useForm } from "react-hook-form";

const InputShared = ({ type, name, register }) => {
  return <input {...register(name)} type={type} name={name}></input>;
};

export default InputShared;
