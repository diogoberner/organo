import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import FormInput from "../FormInput";
import "./TeamForm.css";
import FormButton from "../FormButton";
import ColorInput from "../ColorInput";
import hexToRgba from "hex-to-rgba";
import { createNewCategory } from "../../api/teamServices";
import { uid } from "../../utils";

const TeamForm = () => {
  const { categories, setCategories } = useContext(CategoryContext);
  const [color, setColor] = useState("#000000");
  const [teamName, setTeamName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const team = {
      id: uid(),
      category: teamName,
      primaryColor: color,
      secondaryColor: hexToRgba(color, 0.4),
    };
    const isDuplicate = categories.some(
      (category) => category.category === teamName
    );

    if (isDuplicate) {
      alert("Time já existe!");
      return;
    } else {
      console.log("Criando novo time:", team);
      await createNewCategory(team);
      setCategories((prevCategories) => [...prevCategories, team]);
      setTeamName("");
      setColor("#000000");
    }
  };

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <form className="form team-form" onSubmit={handleSubmit}>
      <h2>Preencha os dados para criar um novo time.</h2>
      <FormInput
        label="Nome do Time"
        placeholder="Digite o nome do time."
        name="teamName"
        value={teamName}
        setTeamName={setTeamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <ColorInput value={color} setColor={setColor} />
      <FormButton />
    </form>
  );
};

export default TeamForm;
