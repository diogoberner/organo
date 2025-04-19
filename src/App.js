import { useContext, useEffect } from "react";
import { TeamContext } from "./context/TeamContext.js";
import { CategoryContext } from "./context/CategoryContext.js";

import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import SectionHeader from "./components/SectionHeader";
import TeamDiv from "./components/TeamDiv";
import { useCleanCategories } from "./hooks/useCleanCategories.js";

function App() {
  const { showForm, setShowForm, teamMembers } = useContext(TeamContext);

  const { categories, setCategories } = useContext(CategoryContext);
  const { cleanUnusedCategories } = useCleanCategories();

  useEffect(() => {
    setCategories((prevCategories) =>
      prevCategories.filter((c) =>
        teamMembers.some((member) => member.category === c.category)
      )
    );
    cleanUnusedCategories(teamMembers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamMembers]);

  return (
    <div className="App">
      <Banner />
      <Form showForm={showForm} setShowForm={setShowForm} />
      <SectionHeader showForm={showForm} setShowForm={setShowForm} />
      {categories.map((c) => {
        const membersInCategory = teamMembers.filter(
          (member) => member.category === c.category
        );
        return (
          membersInCategory.length > 0 && (
            <TeamDiv
              key={c.id}
              membersInCategory={membersInCategory}
              category={c}
            />
          )
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
