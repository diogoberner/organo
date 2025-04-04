import CardContainer from "../CardContainer";
import Title from "../Title";
import "./TeamDiv.css";

const TeamDiv = ({ teamList }) => {
  return teamList.map((team, index) => {
    return (
      <section key={index} className={`team-div ${team.className}`}>
        <Title title={team.category} className={team.className} />
        <CardContainer teamList={teamList} />
      </section>
    );
  });
};

export default TeamDiv;
