import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
      <div className="App">
        <NavBar />
        <ItemListContainer
          greeting='Nike / Man'
        />
        <ItemCount initial='2' stock='20' />
    </div>
  );
}

export default App;
