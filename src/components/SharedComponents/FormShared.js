import React from "react";
import ButtonShared from "./ButtonShared";
import InputShared from "./InputShared";

const FormShared = () => {
  return (
    <form>
      <InputShared />
      <InputShared />
      <ButtonShared type="button" text="Aceptar"></ButtonShared>
    </form>
  );
};

export default FormShared;
