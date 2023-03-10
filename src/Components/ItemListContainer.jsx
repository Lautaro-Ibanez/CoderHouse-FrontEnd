import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Placas from "../data.json";

const ItemListContainer = () => {
  const { cat } = useParams();
  const [graficas, setGraficas] = useState([]);
  useEffect(()=>{
  },[])


  const catFilter = Placas.filter(item => item.category === cat);

  console.log(catFilter)

  return (
    <div className="box-itemList">
      {cat ? (
        <ItemList graficas={catFilter} />
      ) : (
        <ItemList graficas={Placas} />
      )}
    </div>
  );
};

export default ItemListContainer;
