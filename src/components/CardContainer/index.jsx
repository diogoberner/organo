import Card from "../Card";
import "./CardContainer.css";

const CardContainer = ({ teamList, className }) => {
  return (
    <>
      <section className="card-container">
        {teamList.map((teamMember, index) => {
          return (
            <Card key={index} teamMember={teamMember} className={className} />
          );
        })}
      </section>
      ;
    </>
  );
};

export default CardContainer;
