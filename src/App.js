import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
      <div className="App">
        <NavBar />
        {/*<ItemListContainer
          greeting='Nike / Man'
        />*/}
        <ItemDetailContainer />
    </div>
  );
}

export default App;
