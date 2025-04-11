import { deleteMember } from "../../api/teamServices";
import "./Card.css";

const Card = ({ teamMember, className }) => {
  const handleDelete = (e) => {
    const currentCard = e.currentTarget.closest(".card");
    const currentId = currentCard.getAttribute("data-id");

    deleteMember(currentId);
    currentCard.remove();
  };

  if (!teamMember) {
    return <p>Carregando...</p>;
  }

  return (
    <div data-id={teamMember.id} className={`card ${className}`}>
      <div className="card__image">
        <img src={teamMember.imgURL} alt={`Foto do ${teamMember.name}`} />
      </div>
      <div className="card__content">
        <h3 className="card__name">{teamMember.name}</h3>
        <p className="card__role">{teamMember.role}</p>
      </div>
      <div className="card__buttons">
        <button className="card__edit">
          <img
            src="/images/edit-button.png"
            alt={`Botão de editar o ${teamMember.name}`}
          />
        </button>
        <button className="card__delete">
          <img
            src="/images/delete-button.png"
            alt={`Botão de deletar o ${teamMember.name}`}
            onClick={handleDelete}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
