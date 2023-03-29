import Item from "./Item";

const ItemList = ({ graficas }) => {
  return (
    <div className="itemCardBox">
      {graficas?.map((grafica) => (
        <Item
          key={grafica.id}
          id={grafica.id}
          title={grafica.title}
          price={grafica.price}
          stock={grafica.stock}
          category={grafica.category}
          image={grafica.image}
        />
      ))}
    </div>
  );
};

export default ItemList;
