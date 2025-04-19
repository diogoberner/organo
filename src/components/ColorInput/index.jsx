import "./ColorInput.css";
import { useCallback, useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import hexToRgba from "hex-to-rgba";

const ColorInput = ({ category, value, setColor }) => {
  const { setCategories } = useContext(CategoryContext);

  const handleColorChange = useCallback(
    (event) => {
      if (!category) {
        setColor(event.target.value);
        return;
      }

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
    [category?.category, setCategories, setColor]
  );

  return (
    <input
      className="color-input"
      type="color"
      value={category?.primaryColor || value}
      onChange={handleColorChange}
    />
  );
};

export default ColorInput;
