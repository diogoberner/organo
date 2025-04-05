import { useState } from "react";

import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import SectionHeader from "./components/SectionHeader";
import TeamDiv from "./components/TeamDiv";

import teamList from "./components/teamList";

function App() {
  const [showForm, setShowForm] = useState(false);

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
