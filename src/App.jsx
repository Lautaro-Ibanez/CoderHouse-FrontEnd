import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer";
import Nav from "./Components/Nav";
import Home from "./Components/Home";


function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Nav />

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/catalogue" element={<ItemListContainer/>}/>
        <Route exact path="/category/:category" element={<ItemListContainer/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
