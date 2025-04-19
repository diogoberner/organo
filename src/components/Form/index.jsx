import { useContext, useEffect, useRef } from "react";

import "./Form.css";
import FormInput from "../FormInput";
import FormButton from "../FormButton/index.jsx";
import { createNewMember, editMember } from "../../api/teamServices.js";
import { TeamContext } from "../../context/TeamContext.js";
import { CategoryContext } from "../../context/CategoryContext.js";

const Form = () => {
  const formRef = useRef(null);

  const {
    teamMembers,
    setTeamMembers,
    formData,
    setFormData,
    showForm,
    setShowForm,
    editId,
  } = useContext(TeamContext);
  const { categories } = useContext(CategoryContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (editId) {
        editMember(editId, formData);
        const updatedMembers = teamMembers.map((member) =>
          member.id === editId ? { ...member, ...formData } : member
        );
        setTeamMembers(updatedMembers);
      } else {
        createNewMember(formData);
        setTeamMembers([...teamMembers, formData]);
      }
      setFormData({ name: "", role: "", imgURL: "", category: "" });
      setShowForm(!setShowForm);
    } catch (error) {
      console.error("Falha na criação do card.", error);
      return;
    }
  };

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.focus();
    }
  }, [showForm, editId]);

  return (
    <>
      {showForm && (
        <form className="form" onSubmit={handleSubmit}>
          <h2>Preencha os dados para criar o card do colaborador.</h2>
          <FormInput
            label="Nome"
            placeholder="Digite seu nome"
            value={formData.name}
            name="name"
            onChange={handleChange}
            ref={formRef}
          />
          <FormInput
            label="Cargo"
            placeholder="Digite seu cargo"
            value={formData.role}
            name="role"
            onChange={handleChange}
          />
          <FormInput
            label="Imagem"
            placeholder="Informe o endereço da imagem"
            value={formData.imgURL}
            name="imgURL"
            onChange={handleChange}
          />
          <FormInput
            label="Time"
            placeholder=""
            categories={categories.map((c) => c.category)}
            value={formData.category}
            name="category"
            onChange={handleChange}
          />
          {editId ? (
            <FormButton label="Editar card" />
          ) : (
            <FormButton label="Criar card" />
          )}
        </form>
      )}
    </>
  );
};

export default Form;
