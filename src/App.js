import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
      <div className="App">
        <NavBar />
        <ItemListContainer
          greeting='Este la sección de los items'
        />
    </div>
  );
}

export default App;
