import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, title, price, stock, image, category }) => {
  return (
    <div className="cardBox" key={id}>
      <h1 className="titleCard">{title}</h1>
      <div className="box-img">
        <img className="cardImage" src={image} />
      </div>
      <p className="cardPrice">Precio : ${price}</p>
      <p className="cardCategory">Categoria: {category}</p>
      <p className="cardStock">Disponible : {stock}</p>
      <Menu>
        <Link to={`/detail/${id}`} >
        <MenuButton as={Button}>Detail</MenuButton>
        </Link>
      </Menu>
    </div>
  );
};

export default Item;
