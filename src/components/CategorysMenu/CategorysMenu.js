import React from "react";
import Category from "./Category";
import { v4 as uuidv4 } from "uuid";

const CategorysMenu = (props) => {
  let collectionCategorys = Object.values(props);

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {collectionCategorys.map((item) => (
        <Category key={uuidv4()} nameCategory={item} />
      ))}
    </ul>
  );
};

export default CategorysMenu;
