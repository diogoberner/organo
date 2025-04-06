import "./FormInput.css";

const FormInput = ({ label, placeholder, categories }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      {!categories ? (
        <input type={"text"} placeholder={placeholder} />
      ) : (
        <>
          <input list="categories" />
          <datalist id="categories">
            {categories.map((category, index) => {
              console.log(category);
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
          </datalist>
        </>
      )}
    </div>
  );
};

export default FormInput;
