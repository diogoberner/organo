import "./ColorInput.css";
import { useCallback, useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import hexToRgba from "hex-to-rgba";

const ColorInput = ({ category }) => {
  const { setCategories } = useContext(CategoryContext);

  const handleColorChange = useCallback(
    (event) => {
      const newPrimary = event.target.value;
      const newSecondary = hexToRgba(newPrimary, 0.4);
      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.category === category.category
            ? { ...cat, primaryColor: newPrimary, secondaryColor: newSecondary }
            : cat
        )
      );
    },
    [category.category, setCategories]
  );

  return (
    <input
      className="color-input"
      type="color"
      value={category.primaryColor}
      onChange={handleColorChange}
    />
  );
};

export default ColorInput;
