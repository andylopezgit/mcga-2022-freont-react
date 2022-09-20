import React from "react";
import "./login.css";

function Login() {

    const [user, setUser] = React.useState([]);
    const [pass, setPass] = React.useState([])

    const handleUser = (e) => {
        setUser(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const login = (e) => {
        e.preventDefault()
        console.log(user, pass)

    }

    return (
        <section>
            <form action="" className="formLogin" onSubmit={login}>
                <label htmlFor="">User:</label>
                <input type="text" onChange={handleUser}/>
                <label htmlFor="">Pass:</label>
                <input type="password" onChange={handlePass}/>
                <input type="submit" value="Login" className="btnLogin"/>
            </form>
        </section>
    )

}

export {Login}