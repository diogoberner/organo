import { createContext, useEffect, useState } from "react";
import { getCategories } from "../api/teamServices";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Erro ao buscar categorias", error);
        return;
      }
    };
    fetchData();
  }, [setCategories]);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
