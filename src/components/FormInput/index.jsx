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
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          ref={ref}
        />
      ) : (
        <>
          <input
            type="text"
            list="category-options"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            ref={ref}
          />
          <datalist id="category-options">
            {categories.map((category) => (
              <option key={category} value={category} />
            ))}
          </datalist>
        </>
      )}
    </div>
  );
};

export default FormInput;
