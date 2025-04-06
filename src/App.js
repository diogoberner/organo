import { useEffect, useState } from "react";

import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import SectionHeader from "./components/SectionHeader";
import TeamDiv from "./components/TeamDiv";

import teamList from "./components/teamList";
import { getTeamMembers } from "./api/teamServices";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    getTeamMembers()
      .then((response) => setTeamMembers(response.data))
      .catch((err) => console.error("Erro ao buscar membros", err));
  }, []);

  const categories = [...new Set(teamMembers.map((m) => m.category))];

  return (
    <div className="App">
      <Banner />
      <Form teamList={teamList} showForm={showForm} />
      <SectionHeader setShowForm={setShowForm} showForm={showForm} />
      {teamList.map((team, index) => {
        return <TeamDiv key={index} team={team} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
