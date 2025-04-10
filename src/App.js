import { useEffect, useState } from "react";

import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import SectionHeader from "./components/SectionHeader";
import TeamDiv from "./components/TeamDiv";

import { getTeamMembers } from "./api/teamServices";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [teamMembers, setTeamMembers] = useState([]);

  const categoryClassMap = {
    Programação: "programming",
    "Front-End": "front-end",
    "Data Science": "data-science",
    DevOps: "devops",
    "UX e Design": "ux-design",
    Mobile: "mobile",
    "Inovação e Gestão": "innovation-management",
  };

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
  }, []);

  const categories = [...new Set(teamMembers.map((m) => m.category))];

  return (
    <div className="App">
      <Banner />
      <Form
        categories={categories}
        showForm={showForm}
        setShowForm={setShowForm}
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
      />
      <SectionHeader setShowForm={setShowForm} showForm={showForm} />
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
