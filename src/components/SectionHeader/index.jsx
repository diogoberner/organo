import Title from "../Title";
import "./SectionHeader.css";

const SectionHeader = () => {
  return (
    <header className="section-header">
      <Title title="Minha Organização:" className="section-header__title" />
      <button className="section-header__button">
        <img src="/images/add-button.svg" alt="" />
      </button>
    </header>
  );
};

export default SectionHeader;
