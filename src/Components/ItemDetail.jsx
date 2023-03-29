import { Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CounterContext } from "../context/counterContext";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ graficas }) => {
  const { counter, increment, decrement, setCounter } =
    useContext(CounterContext);

  const { agregarProducto, total } = useContext(CartContext);

  {
    if (graficas.stock < counter) {
      setCounter(graficas.stock);
    }

    return (
      <div className="cardBox-detail" key={graficas.id}>
        <h1 className="titleCard-detail">{graficas.title}</h1>
        <div className="box-img-detail">
          <img className="cardImage-detail" src={graficas.image} />
        </div>
        <p className="cardDescription-detail">
          <b>Descripcion:</b>
          <span className="span-description"> {graficas.description}</span>
        </p>
        <div className="footerCard-detail">
          <div className="leftFooter">
            <p className="cardPrice-detail">
              <b>Precio :</b> ${graficas.price}
            </p>
            <p className="cardStock-detail">
              <b>Disponible :</b> {graficas.stock}
            </p>
          </div>
          <div className="rightFooter">
            <Button
              colorScheme="teal"
              variant="ghost"
              className="substract"
              onClick={() => decrement()}
            >
              -
            </Button>
            <p>{counter}</p>
            <Button
              colorScheme="teal"
              variant="ghost"
              className="add"
              onClick={() => {
                if (graficas.stock > counter) {
                  increment();
                }
              }}
            >
              +
            </Button>
          </div>
        </div>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => {
            graficas.quantity = counter;
            setCounter(0);
            agregarProducto(graficas);
            console.log(total);
          }}
        >
          Añadir al carrito
        </Button>
      </div>
    );
  }
};

export default ItemDetail;
