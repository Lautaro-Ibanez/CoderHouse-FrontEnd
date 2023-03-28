import { Button, color } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import FormSend from "./FormSend";

const CartShoppingList = () => {
  const { listaCart, total, precioTotal } = useContext(CartContext);

  precioTotal();

  return (
    <div className="cartShopping">
      {listaCart?.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          price={item.price}
          quantity={item.quantity}
          title={item.title}
          category={item.category}
          image={item.image}
        />
      ))}
      <div className="footerShopping">
        <h1 className="titlePriceTotal">Total = ${total} </h1>
        <Link to={'/Form'}>
        <Button>Finalizar Compra</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartShoppingList;
