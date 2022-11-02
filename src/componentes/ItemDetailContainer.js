import React, { useEffect, useState }   from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import {getProductsPorNombre} from "./utils"

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
