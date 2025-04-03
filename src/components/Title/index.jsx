import "./Title.css";

const Title = ({ teamList }) => {
  return (
    <div className="title-container">
      <h2 className={`title ${teamList.className}`}>{teamList.category}</h2>
    </div>
  );
};

export default Title;
