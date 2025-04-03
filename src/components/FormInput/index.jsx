import "./FormInput.css";

const FormInput = ({ label, placeholder, teamList }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      {!teamList ? (
        <input type={"text"} placeholder={placeholder} />
      ) : (
        <>
          <input list="teamList" />
          <datalist id="teamList">
            {teamList.map((teamName, index) => {
              return (
                <option key={index} value={teamName.category}>
                  {teamName.category}
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
