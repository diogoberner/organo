import "./Title.css";

const Title = (props) => {
  if (!props.className) {
    return null;
  }

  return (
    <div className="title-container">
      <h2 className={`title ${props.className}`}>{props.title}</h2>
    </div>
  );
};

export default Title;
