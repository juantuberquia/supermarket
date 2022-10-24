import React from "react";
import ItemList from "./ItemList/ItemList";

const itemListContainer = ({ greeting }) => {
  return (
    <div className="h1 text-center">
      <p>{greeting}</p>
      <ItemList />
    </div>
  );
};

export default itemListContainer;
