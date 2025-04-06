import FormInput from "../FormInput";
import "./Form.css";
import FormButton from "../FormButton/index.jsx";

const Form = ({ categories, showForm }) => {
  return (
    <>
      {showForm && (
        <form className="form">
          <h2>Preencha os dados para criar o card do colaborador.</h2>
          <FormInput label="Nome" placeholder="Digite seu nome" />
          <FormInput label="Cargo" placeholder="Digite seu cargo" />
          <FormInput
            label="Imagem"
            placeholder="Informe o endereço da imagem"
          />
          <FormInput label="Time" placeholder="" categories={categories} />
          <FormButton />
        </form>
      )}
    </>
  );
};

export default Form;
