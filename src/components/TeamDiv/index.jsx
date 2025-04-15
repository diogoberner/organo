import CardContainer from "../CardContainer";
import ColorInput from "../ColorInput";
import Title from "../Title";
import "./TeamDiv.css";

const TeamDiv = ({ membersInCategory, category }) => {
  return (
    <section
      className={`team-div`}
      style={{ background: `${category.secondaryColor}` }}
    >
      <ColorInput category={category} />
      <Title category={category} />
      {membersInCategory.length > 0 ? (
        <CardContainer membersList={membersInCategory} />
      ) : (
        <></>
      )}
    </section>
  );
};

export default TeamDiv;
