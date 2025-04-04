import "./Card.css";

const Card = ({ teamMember, className }) => {
  if (!teamMember) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={`card ${className}`}>
      <div className="card__image">
        <img src={teamMember.imgURL} alt={`Foto do ${teamMember.name}`} />
      </div>
      <div className="card__content">
        <h3 className="card__name">{teamMember.name}</h3>
        <p className="card__role">{teamMember.role}</p>
      </div>
    </div>
  );
};

export default Card;
