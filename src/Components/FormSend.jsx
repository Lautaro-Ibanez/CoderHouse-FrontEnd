import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "@chakra-ui/react";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const FormSend = () => {
  const { listaCart, total } = useContext(CartContext);
  const [orderId, setOrderID] = useState(null);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");

  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({ id }) => setOrderID(id));
  };

  const order = {
    buyer: { name, mail, number },
    items: listaCart,
    cobrar: `$${total}`,
  };

  return (
    <div className="formBox">
      <div className="infoCompra">
        <h2>Estas por comprar :</h2>
        <div className="titulosProductosCompra">
          {listaCart?.map((elem) => (
            <div className="titleYcantidad">
              <p>
                producto : <b>{elem.title}</b>
              </p>
              <span>
                cantidad : <b>{elem.quantity}</b>
              </span>
            </div>
          ))}
        </div>
        <h1>
          precio total : <b>${total}</b>
        </h1>
      </div>
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="nombre">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="correo">
          <label htmlFor="mail">Correo</label>
          <input
            type="mail"
            id="mail"
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="numero">
          <label htmlFor="number">Numero</label>
          <input type="number" onChange={(e) => setNumber(e.target.value)} />
        </div>
        <Button type="submit" className="buttonSubmit">
          Enviar
        </Button>
      </form>
      <div className="boxOrderNumber">
        <p className="orderNumber">Numero de orden : {orderId}</p>
      </div>
    </div>
  );
};

export default FormSend;
