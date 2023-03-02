import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Data from "/Users/Lautaro/Desktop/Nueva carpeta (2)/data.json";

const ItemListContainer = () => {
  const {category} = useParams
  const [graficas,setGraficas] = useState();

  useEffect(()=>{
    fetch('https://app.gigasheet.com/spreadsheet/item/d481c05f_f90b_4237_9331_71e1fe22e5f7')
    .then((response)=>console.log(response))
  })

  return (
    <div className="box-itemList">
      {category ? (
        <ItemList graficas={catFilter} />
      ) : (
        <ItemList graficas={Data} />
      )}
    </div>
  );
};

export default ItemListContainer;
