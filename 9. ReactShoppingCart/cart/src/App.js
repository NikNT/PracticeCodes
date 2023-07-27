import "./App.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

//46:42
