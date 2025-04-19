import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { deleteCategory } from "../api/teamServices";

export const useCleanCategories = () => {
  const { categories, setCategories } = useContext(CategoryContext);

  const cleanUnusedCategories = async (teamMembers) => {
    const activeCategories = new Set(teamMembers.map((cat) => cat.category));

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
