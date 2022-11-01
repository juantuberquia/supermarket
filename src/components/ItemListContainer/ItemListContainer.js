import React from "react";
import ItemList from "./ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="h1 text-center">
      <p className="title-greeting">{greeting}</p>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
