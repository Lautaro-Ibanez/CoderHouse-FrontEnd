import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import StateComponent from "./context/StateComponent";
import CartShopping from "./context/CartContext";
import CartShoppingList from "./Components/CartShoppingList";
import FormSend from "./Components/FormSend";

function App() {
  return (
    <CartShopping>
      <StateComponent>
        <BrowserRouter>
          <div className="app">
            <Nav />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/catalogue" element={<ItemListContainer />} />
              <Route
                exact
                path="/category/:cat"
                element={<ItemListContainer />}
              />
              <Route
                exact
                path="/detail/:id"
                element={<ItemDetailContainer />}
              />
              <Route exact path="/Cart" element={<CartShoppingList />} />
              <Route exact path="/Form" element={<FormSend />} />
            </Routes>
          </div>
        </BrowserRouter>
      </StateComponent>
    </CartShopping>
  );
}

export default App;
