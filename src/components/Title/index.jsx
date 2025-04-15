import "./Title.css";

const Title = ({ category, className }) => {
  return (
    <div className="title-container">
      <h2
        className={`title ${className}`}
        style={{ borderColor: `${category.primaryColor}` }}
      >
        {category.category}
      </h2>
      <div
        className="title__underline"
        style={{ backgroundColor: `${category.primaryColor}` }}
      />
    </div>
  );
};

export default Title;
