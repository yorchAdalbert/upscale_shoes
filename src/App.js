import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item" element={<ItemDetailContainer />} />
        {/*<ItemListContainer
          greeting='Nike / Man'
        />
        <ItemDetailContainer />*/}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
