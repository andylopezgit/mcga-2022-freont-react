import React from "react";

const ButtonShared = ({ text, type, onClick, className }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonShared;
