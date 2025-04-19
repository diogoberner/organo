import { useContext, useEffect, useMemo } from "react";

import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import SectionHeader from "./components/SectionHeader";
import TeamDiv from "./components/TeamDiv";

import { getTeamMembers } from "./api/teamServices";
import { TeamContext } from "./context/TeamContext.js";
import { CategoryContext } from "./context/CategoryContext.js";
import TeamForm from "./components/TeamForm/index.jsx";

function App() {
  const { showForm, setShowForm, teamMembers, setTeamMembers } =
    useContext(TeamContext);
  const { categories } = useContext(CategoryContext);

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
    <div className="App">
      <Banner />
      <Form showForm={showForm} setShowForm={setShowForm} />
      <TeamForm />
      <SectionHeader showForm={showForm} setShowForm={setShowForm} />
      {categories.map((c) => {
        const membersInCategory = teamMembers.filter(
          (member) => member.category === c.category
        );
        return (
          <TeamDiv
            key={c.category}
            membersInCategory={membersInCategory}
            category={c}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
