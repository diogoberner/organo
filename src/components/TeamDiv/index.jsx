import CardContainer from "../CardContainer";
import Title from "../Title";
import "./TeamDiv.css";

const TeamDiv = ({ membersInCategory, category, className }) => {
  return (
    <section className={`team-div ${className}`}>
      <Title title={category} className={className} />
      {membersInCategory.length > 0 ? (
        <CardContainer membersList={membersInCategory} className={className} />
      ) : (
        <></>
      )}
    </section>
  );
};

export default TeamDiv;
