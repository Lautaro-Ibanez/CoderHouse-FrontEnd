import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const FormSend = () => {
    const {listaCart,total} = useContext(CartContext)
    console.log(listaCart)


  return (
    <div className='formBox'>
        <div className="infoCompra">
            <h2>Estas por comprar :</h2>
            <div className="titulosProductosCompra">
                {listaCart?.map((elem)=>(
                    <div className='titleYcantidad'>
                        <p>producto : <b>{elem.title}</b></p>
                        <span>cantidad : <b>{elem.quantity}</b></span>
                    </div>
                ))}
            </div>
            <h1>precio total : <b>${total}</b></h1>
        </div>
        <div className="form">
                    
        </div>
    </div>
  )
}

export default FormSend