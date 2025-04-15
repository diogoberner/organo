import "./ColorInput.css";
import { useCallback, useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";

const ColorInput = ({ category }) => {
  const { setCategories } = useContext(CategoryContext);

  function lightenColor(hex, amount = 40) {
    let color = hex.replace("#", "");

    if (color.length === 3) {
      color = color
        .split("")
        .map((c) => c + c)
        .join("");
    }

    const num = parseInt(color, 16);

    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00ff) + amount;
    let b = (num & 0x0000ff) + amount;

    r = Math.min(255, r);
    g = Math.min(255, g);
    b = Math.min(255, b);

    return `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;
  }

  const handleColorChange = useCallback(
    (event) => {
      const newPrimary = event.target.value;
      const newSecondary = lightenColor(newPrimary, 140);
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
