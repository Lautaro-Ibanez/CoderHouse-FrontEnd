import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import ItemDetailContainer from "./Components/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Nav />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/catalogue" element={<ItemListContainer />} />
        <Route exact path="/category/:cat" element={<ItemListContainer />} />
        <Route exact path="/detail/:id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
