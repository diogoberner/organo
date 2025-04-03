import CardContainer from "../CardContainer";
import "./TeamDiv.css";

const TeamDiv = ({ teamList }) => {
  return (
    <section className="team-div">
      <CardContainer teamList={teamList} />
    </section>
  );
};

export default TeamDiv;
