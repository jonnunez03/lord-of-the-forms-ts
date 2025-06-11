import { NameInputProps } from "../../PropType";
import { areNamesValid } from "../../utils/validations";

export const NameInput = ({
  inputValue,
  setInputValue,
  setIsNameValid,
  fieldName,
}: NameInputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameRegex = /^[a-zA-Zà-ÿÀ-Ÿ' -]*$/;
    const value = e.target.value;
    nameRegex.test(value) ? setInputValue(value) : inputValue;

    if (areNamesValid(value)) setIsNameValid(true);
  };

  return (
    <div className="input-wrap">
      <label>{fieldName === "firstName" ? "First Name" : "Last Name"}:</label>
      <input
        placeholder={fieldName === "firstName" ? "Bilbo" : "Baggins"}
        value={inputValue}
        onChange={onChangeHandler}
      />
    </div>
  );
};
