import React from "react";
import styles from "./index.module.css";
import logoReact from "../../../src/assets/logo192.png";
import logoNode from "../../../src/assets/Node.js_logo.svg";
import {useNavigate} from "react-router-dom";

function PublicView() {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/login");
  };

  return (
      <React.Fragment>
        <div className={styles.container}>
          <header>
            <h2>MCGA 2022</h2>
            <div>
              <button onClick={onLogin} id={styles.btnLogin}>
                Login
              </button>
              <button id={styles.btnLogin}>Register</button>
            </div>
          </header>
          <section>
            <article>
              <h2>Proyecto realizado en React.js + Node.js</h2>
              <div className={styles.layoutLogos}>

                <img
                    className={styles.logoReact}
                    src={logoReact}
                    alt="logo-react"
                />

                <img
                    className={styles.logoNode}
                    src={logoNode}
                    alt="logo-node"
                />
              </div>
            </article>
          </section>
          <footer>UAI - Andres Lopez - Ing. En Sistemas de Información</footer>
        </div>
      </React.Fragment>
  );
}

export default PublicView;
