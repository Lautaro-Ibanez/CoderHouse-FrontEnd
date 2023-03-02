import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Placas from "../data.json";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [graficas, setGraficas] = useState([]);
  useEffect(()=>{
  },[])


  const idFilter = Placas.filter(item => item.id == id);

  return (
    <div className="box-itemList">
      <ItemDetail graficas={idFilter}/>
    </div>
  );
};

export default ItemDetailContainer;