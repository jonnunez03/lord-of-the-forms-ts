import React, { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { PhoneInput } from "./FunctionalAppComponents/PhoneInput";
import { EmailInput } from "./FunctionalAppComponents/EmailInput";
import { NameInput } from "./FunctionalAppComponents/NameInput";
import { CityInput } from "./FunctionalAppComponents/CityInput";
import { UserInformation } from "../types";
import { FormProps } from "../PropType";
import { capitalize, formatPhoneNumber } from "../utils/transformations";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({ setUserData }: FormProps) => {
  const [firstNameInputState, setFirstNameInputState] = useState("");
  const [lastNameInputState, setLastNameInputState] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);

  const [emailInputState, setEmailInputState] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [cityInputState, setCityInputState] = useState("");
  const [isCityValid, setIsCityValid] = useState(false);

  const [phoneInputState, setPhoneInputState] = useState(["", "", "", ""]);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const [hasInteractedWithForm, setHasInteractedWithForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setHasInteractedWithForm(true);

    const allValid =
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isCityValid &&
      isPhoneValid;

    const userInfo: UserInformation = {
      firstName: capitalize(firstNameInputState),
      lastName: capitalize(lastNameInputState),
      email: emailInputState.trim(),
      city: cityInputState.trim(),
      phone: formatPhoneNumber(phoneInputState)!,
    };

    if (allValid) {
      setFirstNameInputState("");
      setIsFirstNameValid(false);
      setLastNameInputState("");
      setIsLastNameValid(false);
      setEmailInputState("");
      setIsEmailValid(false);
      setCityInputState("");
      setIsCityValid(false);
      setPhoneInputState(["", "", "", ""]);
      setIsPhoneValid(false);
      setHasInteractedWithForm(false);

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
      <NameInput
        fieldName="firstName"
        inputValue={firstNameInputState}
        setInputValue={setFirstNameInputState}
        setIsNameValid={setIsFirstNameValid}
        isNameValid={isFirstNameValid}
      />
      <ErrorMessage
        message={firstNameErrorMessage}
        show={hasInteractedWithForm && !isFirstNameValid}
      />
      {/* last name input */}
      <NameInput
        fieldName="lastName"
        inputValue={lastNameInputState}
        setInputValue={setLastNameInputState}
        setIsNameValid={setIsLastNameValid}
        isNameValid={isLastNameValid}
      />
      <ErrorMessage
        message={lastNameErrorMessage}
        show={hasInteractedWithForm && !isLastNameValid}
      />
      {/* Email Input */}
      <EmailInput
        emailInputState={emailInputState}
        setEmailInputState={setEmailInputState}
        isEmailComplete={isEmailValid}
        setIsEmailComplete={setIsEmailValid}
      />
      <ErrorMessage
        message={emailErrorMessage}
        show={hasInteractedWithForm && !isEmailValid}
      />
      {/* City Input */}
      <CityInput
        cityInputState={cityInputState}
        setCityInputState={setCityInputState}
        isCityValid={isCityValid}
        setIsCityValid={setIsCityValid}
      />
      <ErrorMessage
        message={cityErrorMessage}
        show={hasInteractedWithForm && !isCityValid}
      />
      <PhoneInput
        phoneInputState={phoneInputState}
        setPhoneInputState={setPhoneInputState}
        isPhoneValid={isPhoneValid}
        setIsPhoneValid={setIsPhoneValid}
      />
      <ErrorMessage
        message={phoneNumberErrorMessage}
        show={hasInteractedWithForm && !isPhoneValid}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
