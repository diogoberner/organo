import Title from "../Title";
import "./SectionHeader.css";

const SectionHeader = ({ setShowForm, showForm }) => {
  return (
    <header className="section-header">
      <Title
        category={{ category: "Minha Organização:", primaryColor: "#6278F7" }}
        className="section-header__title"
      />
      <button
        className="section-header__button"
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        <img src="/images/add-button.svg" alt="" />
      </button>
    </header>
  );
};

export default SectionHeader;
