import { useContext, useEffect, useMemo } from "react";

import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import SectionHeader from "./components/SectionHeader";
import TeamDiv from "./components/TeamDiv";

import { getTeamMembers } from "./api/teamServices";
import { TeamContext } from "./context/TeamContext.js";

import { categoryClassMap } from "./data/categories.js";

function App() {
  const { showForm, setShowForm } = useContext(TeamContext);
  const { teamMembers, setTeamMembers } = useContext(TeamContext);

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

  const categories = useMemo(() => {
    return [...new Set(teamMembers.map((m) => m.category))];
  }, [teamMembers]);

  return (
    <div className="App">
      <Banner />
      <Form showForm={showForm} setShowForm={setShowForm} />
      <SectionHeader showForm={showForm} setShowForm={setShowForm} />
      {categories.map((category) => {
        const membersInCategory = teamMembers.filter(
          (member) => member.category === category
        );
        return (
          <TeamDiv
            key={category}
            membersInCategory={membersInCategory}
            category={category}
            className={categoryClassMap[category]}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
