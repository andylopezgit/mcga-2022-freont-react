import React from "react";

function Button({ name, children }) {
  const myFunction = () => {
    console.log("desde el boton");
  };
  return (
    <>
      <button onClick={myFunction}>
        {name}
        {children}
      </button>
    </>
  );
}

export { Button };
