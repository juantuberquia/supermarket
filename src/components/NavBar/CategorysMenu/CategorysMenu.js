import Category from "./Category";
import { v4 as uuidv4 } from "uuid";

const CategorysMenu = (props) => {
  let collectionCategorys = Object.values(props);

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {collectionCategorys.map((nameCategory) => (
        <Category key={uuidv4()} nameCategory={nameCategory} />
      ))}
    </ul>
  );
};

export default CategorysMenu;
