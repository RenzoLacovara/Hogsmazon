import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { toast } from "react-toastify";

let productosIniciales = [
  {
    nombre: "Diadema de Ravenclaw",
    precio: "2500",
    imagen: "../diadema.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "Copa de Hufflepuff",
    precio: "2500",
    imagen: "../copa.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "Guardapelo de Slytherin",
    precio: "2500",
    imagen: "../guardapelo.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "Espada de Gryffindor",
    precio: "2500",
    imagen: "../espada.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "Varita de Sauco",
    precio: "2500",
    oferta: "1999",
    imagen: "../sauco.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "El Innombrable",
    precio: "2500",
    oferta: "1999",
    imagen: "../voldy.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
];

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { oferta } = useParams();
  useEffect(() => {
    let pedido = new Promise((res) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 2000);
    });
    toast.promise(
      pedido,

      {
        pending: "Buscando productos",
        success: "Como por arte de magia!",
        error: "Ups, algo salió mal",
      },
      { position: toast.POSITION.TOP_CENTER }
    );
    pedido.then((respuesta) => {
      setItems(respuesta);
    });
  }, [oferta]);

  return (
    <div className="p-4 text-xl flex justify-center mt-5">
      {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
