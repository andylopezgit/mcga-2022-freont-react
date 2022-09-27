import React from "react";
import { Link as Linkrouter } from "react-router-dom";

const Link = ({ text, to, style }) => {
  return (
    <Linkrouter to={to}>
      <button className={style}>{text}</button>
    </Linkrouter>
  );
};

export { Link };
