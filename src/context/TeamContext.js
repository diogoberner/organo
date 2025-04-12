import { uid } from "../utils";

const { createContext, useState } = require("react");

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: uid(),
    name: "",
    role: "",
    imgURL: "",
    category: "",
  });
  const [editId, setEditId] = useState(null);

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
