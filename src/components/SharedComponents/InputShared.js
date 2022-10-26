import React from "react";

const InputShared = ({ type, value, myFunc, className }) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={myFunc}
    ></input>
  );
};

export default InputShared;
