import { Button } from "@chakra-ui/react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartItem = ({key,id,price,quantity,title,image}) => {
  const {listaCart, setListaCart, precioTotal} = useContext(CartContext)


  function eliminarDelCarrito (id) {
    setListaCart(listaCart.filter(item => item.id !== id))
  }


  return (
    <div className="itemCartBox" key={key}>
      <img src={image} />
      <div className="descriptionCartItem">
        <h3>Producto : <b>{title}</b></h3>
        <p>Precio : <b>${price}</b></p>
      </div>
      <p>Cantidad Seleccionada : <b>{quantity}</b></p>
      <Button onClick={()=>{
        eliminarDelCarrito(id)
        
        }}>
        Eliminar
      </Button>
    </div>
  )
}

export default CartItem