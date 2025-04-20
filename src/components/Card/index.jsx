import { useContext } from "react";
import { deleteMember, editFavorite } from "../../api/teamServices";
import "./Card.css";
import { TeamContext } from "../../context/TeamContext.js";
import { CategoryContext } from "../../context/CategoryContext.js";

const Card = ({ teamMember }) => {
  const { teamMembers, setTeamMembers, setFormData, setShowForm, setEditId } =
    useContext(TeamContext);
  const { categories } = useContext(CategoryContext);

  const handleDelete = async (currentId) => {
    try {
      await deleteMember(currentId);
      const updatedMembers = teamMembers.filter(
        (member) => member.id !== currentId
      );
      setTeamMembers(updatedMembers);
    } catch (error) {
      console.error("Erro ao deletar membro do time:", error);
    }
  };

  const handleEdit = async (currentId) => {
    const currentMember = teamMembers.find((member) => member.id === currentId);
    setFormData(currentMember);
    setShowForm(true);
    setEditId(currentId);
    try {
    } catch (error) {
      console.error("Erro ao encontrar membro do time:", error);
    }
  };

  if (!teamMember) {
    return <p>Carregando...</p>;
  }

  const handleFavorite = (id, favorite) => {
    const updatedMembers = teamMembers.map((member) => {
      if (member.id === id) {
        const updatedMember = { ...member, favorite: !favorite };
        editFavorite(id, updatedMember);
        return updatedMember;
      }
      return member;
    });
    setTeamMembers(updatedMembers);
  };

  let color = categories.find(
    (cat) => cat.category === teamMember.category
  ).primaryColor;

  return (
    <div
      data-id={teamMember.id}
      className={"card"}
      style={{
        background: `linear-gradient(180deg, ${color} 33%, #fff 33%)`,
      }}
    >
      <div
        className={teamMember.favorite ? "card__image favorite" : "card__image"}
      >
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
            onClick={() => handleEdit(teamMember.id)}
          />
        </button>
        <button className="card__favorite">
          <img
            src={
              teamMember.favorite
                ? "/images/favorite-button.png"
                : "/images/unfavorite-button.png"
            }
            alt={`Botão de favoritar o ${teamMember.name}`}
            onClick={() => handleFavorite(teamMember.id, teamMember.favorite)}
          />
        </button>
        <button className="card__delete">
          <img
            src="/images/delete-button.png"
            alt={`Botão de deletar o ${teamMember.name}`}
            onClick={() => handleDelete(teamMember.id)}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
