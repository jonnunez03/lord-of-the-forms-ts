import { Component } from "react";
import { ClassFormState, FormProps } from "../types";
import { UserInformation } from "../types";
import { ClassPhoneInput } from "./ClassAppComponents/ClassPhoneInput";
import {
  hasCity,
  isEmailValid,
  isNameValid,
  isPhoneValid,
} from "../utils/validations";
import { ClassTextInput } from "./ClassAppComponents/ClassTextInput";
import { allCities } from "../utils/all-cities";

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
      emailInputState: "",
      cityInputState: "",
      phoneInputState: ["", "", "", ""],
      hasInteractedWithForm: false,
    };
  }

  resetValues = () => {
    this.setState({
      firstNameInputState: "",
      lastNameInputState: "",
      emailInputState: "",
      cityInputState: "",
      phoneInputState: ["", "", "", ""],
      hasInteractedWithForm: false,
    });
  };

  setPhoneInputState = (newState: string[]) => {
    this.setState({ phoneInputState: newState });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { setUserData } = this.props;

    this.setState({ hasInteractedWithForm: true }, () => {
      const allValid =
        isNameValid(this.state.firstNameInputState) &&
        isNameValid(this.state.lastNameInputState) &&
        isEmailValid(this.state.emailInputState) &&
        hasCity(this.state.cityInputState) &&
        isPhoneValid(this.state.phoneInputState);

      const userInfo: UserInformation = {
        firstName: this.state.firstNameInputState,
        lastName: this.state.lastNameInputState,
        email: this.state.emailInputState,
        city: this.state.cityInputState,
        phone: this.state.phoneInputState.join(","),
      };

      if (allValid) {
        this.resetValues();
        setUserData(userInfo);
      } else {
        alert("bad data input");
        return;
      }
      setUserData(userInfo);
    });
  };

  render() {
    const {
      firstNameInputState,
      lastNameInputState,
      emailInputState,
      cityInputState,
      phoneInputState,
      hasInteractedWithForm,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <u>
          <h3>User Information Form</h3>
        </u>

        {/* first name input */}
        <ClassTextInput
          inputProps={{
            id: "firstName",
            name: "First Name",
            placeholder: "Bilbo",
            value: firstNameInputState,
            onChange: (e) => {
              const value = e.target.value;
              if (/^[a-zA-Zà-ÿÀ-Ÿ' -]+$/.test(value) || value.length === 0)
                this.setState({ firstNameInputState: value });
            },
          }}
          errorMessage={firstNameErrorMessage}
          shouldDisplayMessage={
            !isNameValid(firstNameInputState) && hasInteractedWithForm
          }
        />

        {/* last name input */}
        <ClassTextInput
          inputProps={{
            id: "lastName",
            name: "Last Name",
            placeholder: "Baggins",
            value: lastNameInputState,
            onChange: (e) => {
              const value = e.target.value;
              if (/^[a-zA-Zà-ÿÀ-Ÿ' -]+$/.test(value) || value.length === 0)
                this.setState({ lastNameInputState: value });
            },
          }}
          errorMessage={lastNameErrorMessage}
          shouldDisplayMessage={
            !isNameValid(lastNameInputState) && hasInteractedWithForm
          }
        />

        {/* Email Input */}
        <ClassTextInput
          inputProps={{
            id: "email",
            name: "email",
            placeholder: "bilbo-baggins@adventurehobbits.net",
            value: emailInputState,
            onChange: (e) => {
              const value = e.target.value;
              this.setState({ emailInputState: value });
            },
          }}
          errorMessage={emailErrorMessage}
          shouldDisplayMessage={
            !isEmailValid(emailInputState) && hasInteractedWithForm
          }
        />

        {/* City Input */}
        <ClassTextInput
          inputProps={{
            id: "city",
            name: "City",
            placeholder: "Hobbiton",
            value: cityInputState,
            onChange: (e) => {
              const value = e.target.value;
              if (/^[a-zA-Zà-ÿÀ-Ÿ' -]+$/.test(value) || value.length === 0)
                this.setState({ cityInputState: value });
            },
            list: "allCities",
          }}
          errorMessage={cityErrorMessage}
          shouldDisplayMessage={
            !hasCity(cityInputState) && hasInteractedWithForm
          }
        />
        <datalist id="allCities">
          {allCities.map((city) => (
            <option key={city} value={city} />
          ))}
        </datalist>

        <ClassPhoneInput
          phoneInputState={phoneInputState}
          setPhoneInputState={this.setPhoneInputState}
          errorMessage={phoneNumberErrorMessage}
          shouldDisplayMessage={
            !isPhoneValid(phoneInputState) && hasInteractedWithForm
          }
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
