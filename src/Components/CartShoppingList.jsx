import { Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const CartShoppingList = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { listaCart, total, precioTotal } = useContext(CartContext);

  precioTotal();

  function sinProductos() {
    setIsVisible(true);
  }

  if (listaCart.length != 0) {
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
          <h1 className="titlePriceTotal">
            Total = <b>${total}</b>{" "}
          </h1>

          <Link to={"/Form"}>
            <Button>Finalizar Compra</Button>
          </Link>
        </div>
      </div>
    );
  } else {
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
          <h1 className="titlePriceTotal">
            Total = <b>${total}</b>{" "}
          </h1>

          <Button onClick={sinProductos}>Finalizar Compra</Button>
        </div>
        {isVisible && (
          <h1 className="noProducts">No hay productos en el carrito !!</h1>
        )}
      </div>
    );
  }
};

export default CartShoppingList;
