import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { createNewCategory, deleteCategory } from "../api/teamServices";
import { getRandomColor, uid } from "../utils";
import hexToRgba from "hex-to-rgba";

export const useCleanCategories = () => {
  const { categories, setCategories } = useContext(CategoryContext);

  const cleanUnusedCategories = async (teamMembers) => {
    const activeCategories = new Set(teamMembers.map((cat) => cat.category));

    const knownCategories = new Set(categories.map((cat) => cat.category));

    const missingCategories = [...activeCategories].filter(
      (cat) => !knownCategories.has(cat)
    );

    if (missingCategories.length > 0) {
      const newEntries = missingCategories.map((cat) => {
        const color = getRandomColor();
        const newCategory = {
          id: uid(),
          category: cat,
          primaryColor: color,
          secondaryColor: hexToRgba(color, 0.4),
        };
        createNewCategory(newCategory);
        return newCategory;
      });

      setCategories((prev) => [...prev, ...newEntries]);
    }

    const unusedCategories = categories.filter((cat) => {
      return !activeCategories.has(cat.category);
    });

    await Promise.all(unusedCategories.map((cat) => deleteCategory(cat.id)));

    setCategories((prev) =>
      prev.filter((cat) => activeCategories.has(cat.category))
    );
  };

  return { cleanUnusedCategories };
};
