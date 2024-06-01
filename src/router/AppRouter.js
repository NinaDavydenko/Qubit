import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contacts from "../pages/Contacts";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
