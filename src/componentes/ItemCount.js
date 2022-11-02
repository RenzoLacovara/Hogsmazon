import React, { useState } from 'react'

const ItemCount = ({handleOnAdd}) => {

    const [count, setCount] = useState(0)

    const sumar = () => {
        setCount(count + 1)
    }
    const restar = () => {
        setCount(count - 1)
    }
    const confirmar = () => {handleOnAdd(count)}

  return (
   
   <div>
        <button onClick={sumar}>+</button>
        <h2>{count}</h2>
        <button onClick={restar}>-</button>
        <button onClick={confirmar}>Confirmar</button>
    </div>
  )
}

export default ItemCount