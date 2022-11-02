
import { toast } from "react-toastify";

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


const generarPromesa = (operation,time = 1000) => {
  let promesa= new Promise((resolve,reject) => {
      setTimeout(() => {
          resolve(operation)
      }, time)
    })
    toast.promise(
      promesa,
  
      {
        pending: "Buscando productos",
        success: "Como por arte de magia!",
        error: "Ups, algo salió mal",
      },
      { position: toast.POSITION.TOP_CENTER, autoClose: 1000 }
    );
    return promesa
}


export const getProducts = () => generarPromesa(productosIniciales)

export const getProductsPorTipo = (oferta) => generarPromesa(productosIniciales.filter(item=>item.oferta === "si"))

export const getProductsPorNombre = (id) => generarPromesa(productosIniciales.filter(item=>item.id === id))


