import { Component, ReactNode } from "react";
import { TextInput } from "../../types";
import { ErrorMessage } from "../../ErrorMessage";

export class ClassTextInput extends Component<TextInput> {
  render(): ReactNode {
    const { inputProps, errorMessage, shouldDisplayMessage } = this.props;
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
  }
}
