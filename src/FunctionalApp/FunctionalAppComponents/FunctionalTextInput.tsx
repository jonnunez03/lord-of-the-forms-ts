import { ErrorMessage } from "../../ErrorMessage";
import { TextInput } from "../../types";

export const FunctionalTextInput = ({
  inputProps,
  errorMessage,
  shouldDisplayMessage,
}: TextInput) => {
  return (
    <>
      <div className="input-wrap">
        <label htmlFor={inputProps.id}>{inputProps.name}:</label>
        <input {...inputProps} />
      </div>
      <div>
        <ErrorMessage message={errorMessage} show={shouldDisplayMessage} />
      </div>
    </>
  );
};
