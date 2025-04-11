const { createContext, useState } = require("react");

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <TeamContext.Provider value={{ teamMembers, setTeamMembers }}>
      {children}
    </TeamContext.Provider>
  );
};
