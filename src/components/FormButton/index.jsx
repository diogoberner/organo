import "./FormButton.css";

const FormButton = ({ label }) => {
  return (
    <div className="button-container">
      <button>{label}</button>
    </div>
  );
};

export default FormButton;
