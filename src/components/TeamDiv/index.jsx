import CardContainer from "../CardContainer";
import ColorInput from "../ColorInput";
import Title from "../Title";
import "./TeamDiv.css";

const TeamDiv = ({ membersInCategory, category }) => {
  return (
    <section className={`team-div`}>
      <ColorInput />
      <Title title={category} />
      {membersInCategory.length > 0 ? (
        <CardContainer membersList={membersInCategory} />
      ) : (
        <></>
      )}
    </section>
  );
};

export default TeamDiv;
