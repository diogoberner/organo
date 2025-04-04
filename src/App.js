import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import TeamDiv from "./components/TeamDiv";

import teamList from "./components/teamList";

function App() {
  return (
    <div className="App">
      <Banner />
      <Form teamList={teamList} />
      {teamList.map((team, index) => {
        return <TeamDiv key={index} team={team} />;
      })}
    </div>
  );
}

export default App;
