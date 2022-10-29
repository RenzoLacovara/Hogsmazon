import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ItemListContainer from "./ItemListContainer";

const Main = () => {
  return (
    <main className="flex h-full w-full justify-center items-start">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Productos" element={<ItemListContainer />} />
        <Route path="/Productos/:tipo" element={<ItemListContainer />} />
        <Route path="" element="" />
        <Route path="" element="" />
      </Routes>
    </main>
  );
};

export default Main;
