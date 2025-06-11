import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { ClassFormState, FormProps } from "../PropType";
import { UserInformation } from "../types";
import { ClassNameInput } from "./ClassAppComponents/ClassNameInput";
import { ClassCityInput } from "./ClassAppComponents/ClassCityInput";
import { ClassEmailInput } from "./ClassAppComponents/ClassEmailInput";
import { ClassPhoneInput } from "./ClassAppComponents/ClassPhoneInput";
import { capitalize, formatPhoneNumber } from "../utils/transformations";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export class ClassForm extends Component<FormProps, ClassFormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      firstNameInputState: "",
      lastNameInputState: "",
      isFirstNameValid: false,
      isLastNameValid: false,
      emailInputState: "",
      isEmailComplete: false,
      cityInputState: "",
      isCityValid: false,
      phoneInputState: ["", "", "", ""],
      isPhoneValid: false,
      hasInteractedWithForm: false,
    };
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    this.setState({ hasInteractedWithForm: true }, () => {
      const allValid =
        this.state.isFirstNameValid &&
        this.state.isLastNameValid &&
        this.state.isEmailComplete &&
        this.state.isCityValid &&
        this.state.isPhoneValid;

      if (allValid) {
        const userInfo: UserInformation = {
          firstName: capitalize(this.state.firstNameInputState),
          lastName: capitalize(this.state.lastNameInputState),
          email: this.state.emailInputState.trim(),
          city: this.state.cityInputState.trim(),
          phone: formatPhoneNumber(this.state.phoneInputState)!,
        };

        this.props.setUserData(userInfo);

        this.setState({
          firstNameInputState: "",
          isFirstNameValid: false,
          lastNameInputState: "",
          isLastNameValid: false,
          emailInputState: "",
          isEmailComplete: false,
          cityInputState: "",
          isCityValid: false,
          phoneInputState: ["", "", "", ""],
          isPhoneValid: false,
          hasInteractedWithForm: false,
        });
      } else {
        alert("bad data input");
      }
    });
  };

  setInput = (
    field: keyof ClassFormState,
    value:
      | string
      | string[]
      | boolean
      | ((prevState: boolean) => boolean)
      | ((prevState: string[]) => string[])
  ) => {
    this.setState({ [field]: value } as Pick<
      ClassFormState,
      keyof ClassFormState
    >);
  };

  render() {
    const {
      firstNameInputState,
      lastNameInputState,
      emailInputState,
      cityInputState,
      phoneInputState,
      isFirstNameValid,
      isLastNameValid,
      isEmailComplete,
      isCityValid,
      isPhoneValid,
      hasInteractedWithForm,
    } = this.state;
    const { setInput } = this;

    return (
      <form onSubmit={this.handleSubmit}>
        <u>
          <h3>User Information Form</h3>
        </u>

        {/* first name input */}
        <ClassNameInput
          fieldName="firstName"
          inputValue={firstNameInputState}
          setInputValue={(val) => setInput("firstNameInputState", val)}
          isNameValid={isFirstNameValid}
          setIsNameValid={(val) => setInput("isFirstNameValid", val)}
        />
        <ErrorMessage
          message={firstNameErrorMessage}
          show={hasInteractedWithForm && !isFirstNameValid}
        />

        {/* last name input */}
        <ClassNameInput
          fieldName="lastName"
          inputValue={lastNameInputState}
          setInputValue={(val) => setInput("lastNameInputState", val)}
          isNameValid={isLastNameValid}
          setIsNameValid={(val) => setInput("isLastNameValid", val)}
        />
        <ErrorMessage
          message={lastNameErrorMessage}
          show={hasInteractedWithForm && !isLastNameValid}
        />

        {/* Email Input */}
        <ClassEmailInput
          emailInputState={emailInputState}
          setEmailInputState={(val) => setInput("emailInputState", val)}
          isEmailComplete={isEmailComplete}
          setIsEmailComplete={(val) => setInput("isEmailComplete", val)}
        />
        <ErrorMessage
          message={emailErrorMessage}
          show={hasInteractedWithForm && !isEmailComplete}
        />

        {/* City Input */}
        <ClassCityInput
          cityInputState={cityInputState}
          setCityInputState={(val) => setInput("cityInputState", val)}
          isCityValid={isCityValid}
          setIsCityValid={(val) => setInput("isCityValid", val)}
        />
        <ErrorMessage
          message={cityErrorMessage}
          show={hasInteractedWithForm && !isCityValid}
        />

        <ClassPhoneInput
          phoneInputState={phoneInputState}
          setPhoneInputState={(val) => setInput("phoneInputState", val)}
          isPhoneValid={isPhoneValid}
          setIsPhoneValid={(val) => setInput("isPhoneValid", val)}
        />

        <ErrorMessage
          message={phoneNumberErrorMessage}
          show={hasInteractedWithForm && !isPhoneValid}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
