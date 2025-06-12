import { useState } from "react";
import { PhoneInput } from "./FunctionalAppComponents/PhoneInput";
import { UserInformation } from "../types";
import { FormProps } from "../types";
import { FunctionalTextInput } from "./FunctionalAppComponents/FunctionalTextInput";
import {
  isNameValid,
  isEmailValid,
  hasCity,
  isPhoneValid,
} from "../utils/validations";
import { allCities } from "../utils/all-cities";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({ setUserData }: FormProps) => {
  const [firstNameInputState, setFirstNameInputState] = useState("");
  const [lastNameInputState, setLastNameInputState] = useState("");
  const [emailInputState, setEmailInputState] = useState("");
  const [cityInputState, setCityInputState] = useState("");
  const [phoneInputState, setPhoneInputState] = useState(["", "", "", ""]);
  const [hasInteractedWithForm, setHasInteractedWithForm] = useState(false);

  const resetValues = () => {
    setFirstNameInputState("");
    setLastNameInputState("");
    setEmailInputState("");
    setCityInputState("");
    setPhoneInputState(["", "", "", ""]);
    setHasInteractedWithForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setHasInteractedWithForm(true);

    const allValid =
      isNameValid(firstNameInputState) &&
      isNameValid(lastNameInputState) &&
      isEmailValid(emailInputState) &&
      hasCity(cityInputState) &&
      isPhoneValid(phoneInputState);

    const userInfo: UserInformation = {
      firstName: firstNameInputState,
      lastName: lastNameInputState,
      email: emailInputState,
      city: cityInputState,
      phone: phoneInputState.join(),
    };

    if (allValid) {
      resetValues();
      setUserData(userInfo);
    } else {
      alert("bad data input");
      return;
    }
    setUserData(userInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <u>
        <h3>User Information Form</h3>
      </u>
      {/* first name input */}
      <FunctionalTextInput
        inputProps={{
          id: "firstName",
          name: "First Name",
          placeholder: "Bilbo",
          value: firstNameInputState,
          onChange: (e) => {
            const value = e.target.value;
            if (/^[a-zA-Zà-ÿÀ-Ÿ' -]+$/.test(value) || value.length === 0)
              setFirstNameInputState(value);
          },
        }}
        errorMessage={firstNameErrorMessage}
        shouldDisplayMessage={
          !isNameValid(firstNameInputState) && hasInteractedWithForm
        }
      />

      {/* last name input */}
      <FunctionalTextInput
        inputProps={{
          id: "lastName",
          name: "Last Name",
          placeholder: "Baggins",
          value: lastNameInputState,
          onChange: (e) => {
            const value = e.target.value;
            if (/^[a-zA-Zà-ÿÀ-Ÿ' -]+$/.test(value) || value.length === 0)
              setLastNameInputState(value);
          },
        }}
        errorMessage={lastNameErrorMessage}
        shouldDisplayMessage={
          !isNameValid(lastNameInputState) && hasInteractedWithForm
        }
      />

      {/* Email Input */}
      <FunctionalTextInput
        inputProps={{
          id: "email",
          name: "email",
          placeholder: "bilbo-baggins@adventurehobbits.net",
          value: emailInputState,
          onChange: (e) => {
            const value = e.target.value;
            setEmailInputState(value);
          },
        }}
        errorMessage={emailErrorMessage}
        shouldDisplayMessage={
          !isEmailValid(emailInputState) && hasInteractedWithForm
        }
      />

      {/* City Input */}
      <FunctionalTextInput
        inputProps={{
          id: "city",
          name: "City",
          placeholder: "Hobbiton",
          value: cityInputState,
          onChange: (e) => {
            const value = e.target.value;
            if (/^[a-zA-Zà-ÿÀ-Ÿ' -]+$/.test(value) || value.length === 0)
              setCityInputState(value);
          },
          list: "allCities",
        }}
        errorMessage={cityErrorMessage}
        shouldDisplayMessage={!hasCity(cityInputState) && hasInteractedWithForm}
      />
      <datalist id="allCities">
        {allCities.map((city) => (
          <option key={city} value={city} />
        ))}
      </datalist>

      {/* Phone Input */}
      <PhoneInput
        phoneInputState={phoneInputState}
        setPhoneInputState={setPhoneInputState}
        errorMessage={phoneNumberErrorMessage}
        shouldDisplayMessage={
          !isPhoneValid(phoneInputState) && hasInteractedWithForm
        }
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
