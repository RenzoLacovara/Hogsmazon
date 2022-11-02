import React, { useEffect, useState }   from "react";

import ItemCount from "./ItemCount"


const ItemDetail = ({detalle}) => {
    const [detalles, setDetalles] = useState({});
    useEffect(() => {
 
        let produ = detalle[0]
        setDetalles(produ)
    
        }, [detalle])

   
    const handleOnAdd = (cantidad) => {
    }

    return (
        
        <div>
            
            {detalles === undefined ? <h1 className="h-screen">Cargando...</h1> : 
            <div>

                <h2>{detalles.nombre} - ${detalles.precio}</h2>
                <div className="detail-flex">
                    <img src={detalles.imagen} alt={detalles.nombre} />
                    <div>
                        <p>{detalles.descripcion}</p>
                        <ItemCount handleOnAdd={handleOnAdd}/>
                    </div>
    
                </div>
              
            </div>}
            
        </div>
    )
}
export default ItemDetail