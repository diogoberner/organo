import { getTeamMembers } from "../api/teamServices";

const { createContext, useState, useEffect } = require("react");

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    role: "",
    imgURL: "",
    category: "",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTeamMembers();
        setTeamMembers(data);
      } catch (error) {
        console.error("Erro ao buscar membros", error);
        return;
      }
    };

    fetchData();
  }, [setTeamMembers]);

  return (
    <TeamContext.Provider
      value={{
        teamMembers,
        setTeamMembers,
        showForm,
        setShowForm,
        formData,
        setFormData,
        editId,
        setEditId,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};
