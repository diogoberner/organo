import { useState } from "react";

import "./Form.css";
import FormInput from "../FormInput";
import FormButton from "../FormButton/index.jsx";

const Form = ({ categories, showForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    imgURL: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            categories={categories}
            value={formData.category}
            name="category"
            onChange={handleChange}
          />
          <FormButton />
        </form>
      )}
    </>
  );
};

export default Form;
