import React, { useEffect } from "react";
import Category from "./Category";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react/cjs/react.production.min";

const CategorysMenu = (props) => {
  let collectionCategorys = Object.values(props);

  console.log("gola munod");

  // const [first, setfirst] = useState("")
  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {collectionCategorys.map((nameCategory) => (
        <Category key={uuidv4()} nameCategory={nameCategory} />
      ))}
    </ul>
  );
};

export default CategorysMenu;
