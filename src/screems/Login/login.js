import React from "react";
//import { Link } from "../../components/links";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
//import { Button } from "../../components/button/button";
import FormShared from "../../components/SharedComponents/FormShared";

const Login = () => {
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  const navigate = useNavigate();

  const onUser = (e) => {
    setUser(e.target.value);
  };

  const onPass = (e) => {
    setPass(e.target.value);
  };

  const onLogin = (e) => {
    e.preventDefault();
    if (user === "andy" || pass === "1234") {
      return navigate("/products");
    } else {
      console.log("error en datos");
    }
  };

  return (
    <div className={styles.container}>
      {/*<form action="" className={styles.form} onClick={onLogin}>*/}
      {/*  <input type="text" placeholder="User" onChange={onUser} />*/}
      {/*  <input type="password" placeholder="Password" onChange={onPass} />*/}
      {/*  <input type="submit" value="Login" className={styles.btn} />*/}
      {/*  /!*<Link text={"Login"} to={"/home"} style={styles.btn} />*!/*/}
      {/*</form>*/}
      {/*<Button name="Eliminar">*/}
      {/*  como Child*/}
      {/*</Button>*/}

      <FormShared style={styles} />
    </div>
  );
};

export { Login };
