import "./App.css";
import { Task } from "./components/task/task";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Login } from "./screems/Login/login.js";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";
import { Users } from "./screems/Products/users";
import { Layout } from "./components/Layout/layout";

// darle estilos al layout, vista de productos con una tabla, crear un componente compartido, agregarle footer al layout

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Users />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
