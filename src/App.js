import { useContext } from "react";

import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import SectionHeader from "./components/SectionHeader";
import TeamDiv from "./components/TeamDiv";

import { TeamContext } from "./context/TeamContext.js";
import { CategoryContext } from "./context/CategoryContext.js";
import TeamForm from "./components/TeamForm/index.jsx";

function App() {
  const { showForm, setShowForm, teamMembers } = useContext(TeamContext);
  const { categories } = useContext(CategoryContext);

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
