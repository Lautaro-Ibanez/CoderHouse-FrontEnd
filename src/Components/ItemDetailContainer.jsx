import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "graficas", `${id}`);
    getDoc(item).then((res) => setProduct({ id: res.id, ...res.data() }));
  }, []);

  return (
    <div className="box-itemList">
      <ItemDetail graficas={product} />
    </div>
  );
};

export default ItemDetailContainer;
