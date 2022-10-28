import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ItemListContainer greeting="Bienvenido al SuperMarket Tuberquia" />
      </BrowserRouter>
    </>
  );
}

export default App;
