import Banner from "./components/Banner/Banner";
import CardContainer from "./components/CardContainer";
import Form from "./components/Form";
import TeamDiv from "./components/TeamDiv";

import teamList from "./components/teamList";

function App() {
  return (
    <div className="App">
      <Banner />
      <Form teamList={teamList} />
      <TeamDiv teamList={teamList} />
    </div>
  );
}

export default App;
