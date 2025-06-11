import { Component, ReactNode } from "react";
import { NameInputProps } from "../../PropType";
import { areNamesValid } from "../../utils/validations";

export class ClassNameInput extends Component<NameInputProps> {
  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { inputValue, setInputValue, setIsNameValid } = this.props;

    const nameRegex = /^[a-zA-Zà-ÿÀ-Ÿ' -]*$/;
    const value = e.target.value;
    nameRegex.test(value) ? setInputValue(value) : inputValue;

    if (areNamesValid(value)) setIsNameValid(true);
  };

  render(): ReactNode {
    const { inputValue, fieldName } = this.props;
    return (
      <div className="input-wrap">
        <label>{fieldName === "firstName" ? "First Name" : "Last Name"}:</label>
        <input
          placeholder={fieldName === "firstName" ? "Bilbo" : "Baggins"}
          value={inputValue}
          onChange={this.onChangeHandler}
        />
      </div>
    );
  }
}
