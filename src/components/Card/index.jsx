import "./Card.css";

const Card = ({ team }) => {
  if (!team) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={`card ${team.className}`}>
      <div className="card__image">{/* <img src="" alt="" /> */}</div>
      <div className="card__content">
        <h3 className="card__name">Guilherme Lima</h3>
        <p className="card__role">Desenvolvedor Python e JavaScript na Alura</p>
      </div>
    </div>
  );
};

export default Card;
