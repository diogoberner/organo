import { useContext, useState } from "react";
import { TeamContext } from "../../context/TeamContext";
import FormInput from "../FormInput";
import "./TeamForm.css";
import FormButton from "../FormButton";
import ColorInput from "../ColorInput";

const TeamForm = () => {
  const { categories } = useContext(TeamContext);
  const [color, setColor] = useState("#000000");
  const [teamName, setTeamName] = useState("");

  return (
    <form className="form team-form">
      <h2>Preencha os dados para criar um novo time.</h2>
      <FormInput
        label="Nome do Time"
        placeholder="Digite o nome do time."
        name="teamName"
        value={teamName}
        setTeamName={setTeamName}
      />
      <ColorInput value={color} setColor={setColor} />
      <FormButton />
    </form>
  );
};

export default TeamForm;
