import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ItemDetail = ({ graficas }) => {
  console.log(graficas);
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
            {" "}
            <b>Precio :</b> ${graficas[0].price}
          </p>
          <p className="cardStock-detail">
            <b>Disponible :</b> {graficas[0].stock}
          </p>
        </div>
        <div className="rightFooter">

        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
