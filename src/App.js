import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <header className="">
      <NavBar />
      <ItemListContainer greeting="Bienvenido al SuperMarket Tuberquia" />
    </header>
  );
}

export default App;
