import { Component, ReactNode } from "react";
import { EmailInputProps } from "../../PropType";
import { isEmailValid } from "../../utils/validations";

export class ClassEmailInput extends Component<EmailInputProps> {
  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { setEmailInputState, setIsEmailComplete } = this.props;
    const value = e.target.value;
    setEmailInputState(value);

    if (isEmailValid(value)) setIsEmailComplete(true);
  };

  render(): ReactNode {
    const { emailInputState } = this.props;

    return (
      <div className="input-wrap">
        <label>{"Email"}:</label>
        <input
          placeholder="bilbo-baggins@adventurehobbits.net"
          value={emailInputState}
          onChange={this.onChangeHandler}
        />
      </div>
    );
  }
}
