import { useContext } from "react";
import "./ColorInput.css";
import { CategoryContext } from "../../context/CategoryContext";

const ColorInput = ({ category }) => {
  const { setCategories } = useContext(CategoryContext);
  return (
    <input
      className="color-input"
      type="color"
      value={category.primaryColor}
      onChange={(event) =>
        setCategories((prevCat) => {
          console.log(prevCat);
          const newCategories = prevCat.map((cat) => {
            if (cat.category === category.category) {
              return { ...cat, primaryColor: event.target.value };
            }
            return cat;
          });
          return newCategories;
        })
      }
    />
  );
};

export default ColorInput;
