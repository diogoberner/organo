import Card from "../Card";
import "./CardContainer.css";

const CardContainer = ({ membersList, className }) => {
  return (
    <>
      <section className="card-container">
        {membersList.map((teamMember, index) => {
          return <Card key={index} teamMember={teamMember} />;
        })}
      </section>
      ;
    </>
  );
};

export default CardContainer;
