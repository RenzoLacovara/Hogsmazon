import React from "react";
import { db } from "./firebase";
import { useRef, useState } from "react";
import { collection, query, where, addDoc } from "firebase/firestore";

const Carrito = () => {
  const handleSubmit = (e) => {
    const ordenes = collection(db, "ordenes");
    addDoc(ordenes);
  };
  return <div>Carrito</div>;
};

export default Carrito;
