import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "graficas");

    getDocs(itemsCollection).then((res) =>
      setProducts(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, []);

  const { cat } = useParams();
  const catFilter = products.filter((item) => item.category === cat);

  return (
    <div className="box-itemList">
      {cat ? (
        <ItemList graficas={catFilter} />
      ) : (
        <ItemList graficas={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
