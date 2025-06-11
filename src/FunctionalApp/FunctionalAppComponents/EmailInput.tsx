import { isEmailValid } from "../../utils/validations";
import { EmailInputProps } from "../../PropType";

export const EmailInput = ({
  emailInputState,
  setEmailInputState,
  setIsEmailComplete,
}: EmailInputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailInputState(value);

    if (isEmailValid(value)) setIsEmailComplete(true);
  };

  return (
    <div className="input-wrap">
      <label>{"Email"}:</label>
      <input
        placeholder="bilbo-baggins@adventurehobbits.net"
        value={emailInputState}
        onChange={onChangeHandler}
      />
    </div>
  );
};
