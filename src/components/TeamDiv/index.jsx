import CardContainer from "../CardContainer";
import Title from "../Title";
import "./TeamDiv.css";

const TeamDiv = ({ team }) => {
  return (
    <section className={`team-div ${team.className}`}>
      <Title title={team.category} className={team.className} />
      {team.teamMembers.length > 0 ? (
        <CardContainer teamList={team.teamMembers} className={team.className} />
      ) : (
        <></>
      )}
    </section>
  );
};

export default TeamDiv;
