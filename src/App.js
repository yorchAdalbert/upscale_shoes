import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContext from "./components/CartContext";

function App() {
  return (
      <CartContext.Provider value={[1, 2, 3]} >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
