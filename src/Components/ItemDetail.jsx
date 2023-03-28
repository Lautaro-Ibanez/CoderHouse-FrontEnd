import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CounterContext } from "../context/counterContext";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const ItemDetail = ({ graficas }) => {
  const { counter, increment, decrement, setCounter } =
    useContext(CounterContext);

  const { agregarProducto, total } = useContext(CartContext);

  if (graficas[0].stock < counter) {
    setCounter(graficas[0].stock);
  }

  return (
    <div className="cardBox-detail" key={graficas[0].id}>
      <h1 className="titleCard-detail">{graficas[0].title}</h1>
      <div className="box-img-detail">
        <img className="cardImage-detail" src={graficas[0].image} />
      </div>
      <p className="cardDescription-detail">
        <b>Descripcion:</b>
        <span className="span-description"> {graficas[0].description}</span>
      </p>
      <div className="footerCard-detail">
        <div className="leftFooter">
          <p className="cardPrice-detail">
            <b>Precio :</b> ${graficas[0].price}
          </p>
          <p className="cardStock-detail">
            <b>Disponible :</b> {graficas[0].stock}
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
              if (graficas[0].stock > counter) {
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
          graficas[0].quantity = counter;
          setCounter(0);
          agregarProducto(graficas[0]);
          console.log(total);
        }}
      >
        Añadir al carrito
      </Button>
    </div>
  );
};

export default ItemDetail;
