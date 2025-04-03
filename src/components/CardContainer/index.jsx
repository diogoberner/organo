import Card from "../Card";
import Title from "../Title";
import "./CardContainer.css";

const CardContainer = ({ teamList }) => {
  return (
    <>
      <Title teamList={teamList} />
      <section className="card-container">
        {teamList.map((team, index) => {
          return <Card key={index} team={team} />;
        })}
      </section>
      ;
    </>
  );
};

export default CardContainer;
