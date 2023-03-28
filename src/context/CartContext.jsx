import { createContext, useState } from "react";
export const CartContext = createContext(null);
import Swal from "sweetalert2";

const CartContextProvider = ({ children }) => {
  const [listaCart, setListaCart] = useState([]);

  const [total, setTotal] = useState(0);

  function agregarProducto(producto) {
    const productoExistente = listaCart.find((p) => p.id === producto.id);
    if (productoExistente) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Este producto ya esta en el carrito",
      });
      return;
    }
    setListaCart([...listaCart, producto]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Se añadio el producto al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  function precioTotal() {
    let totalPrice = 0;

    for (let i = 0; i < listaCart.length; i++) {
      totalPrice += listaCart[i].price * listaCart[i].quantity;
    }

    setTotal(totalPrice);
  }

  return (
    <CartContext.Provider
      value={{ listaCart, setListaCart, agregarProducto, total, precioTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
