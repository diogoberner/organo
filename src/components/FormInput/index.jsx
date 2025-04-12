import "./FormInput.css";

const FormInput = ({
  label,
  placeholder,
  categories,
  value,
  name,
  onChange,
  ref,
}) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      {!categories ? (
        <input
          type={"text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          ref={ref}
        />
      ) : (
        <>
          <select name="category" value={value} onChange={onChange}>
            <option value=""></option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default FormInput;
