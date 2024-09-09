import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from '../components/Cart'
import Shipping from '../components/Shipping'
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
     
      </Routes>
    </>
  );
};

export default Routing;