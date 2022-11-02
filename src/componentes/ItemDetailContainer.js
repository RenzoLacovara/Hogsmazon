import React, { useEffect, useState }   from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import {getProductsPorNombre} from "./utils"

let productosIniciales = [
  {
    nombre: "Diadema de Ravenclaw",
    id: "1",
    precio: "2500",
    imagen: "../diadema.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "Copa de Hufflepuff",
    id: "2",
    precio: "2500",
    imagen: "../copa.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "Guardapelo de Slytherin",
    id: "3",
    precio: "2500",
    imagen: "../guardapelo.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "Espada de Gryffindor",
    id: "4",
    precio: "2500",
    imagen: "../espada.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "Varita de Sauco",
    id: "5",
    precio: "1999",
    oferta: "si",
    ofertaValor: "1999",
    imagen: "../sauco.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "El Innombrable",
    id: "6",
    precio: "1999",
    oferta: "si",
    ofertaValor: "1999",
    imagen: "../voldy.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
];

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const { id } = useParams();
  
  useEffect(() => {

    getProductsPorNombre(id).then((respuesta) => {
      setDetalle(respuesta);
    });

    }, [id])


  return  (
    <div>
      <ItemDetail detalle={detalle}/>
    </div>
)}

export default ItemDetailContainer;
