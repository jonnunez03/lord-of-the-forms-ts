import { UserInformation } from "./types";

export type PhoneInputProps = {
  phoneInputState: string[];
  setPhoneInputState: React.Dispatch<React.SetStateAction<string[]>>;
  isPhoneValid: boolean;
  setIsPhoneValid: React.Dispatch<React.SetStateAction<boolean>>;
};

export type EmailInputProps = {
  emailInputState: string;
  setEmailInputState: (value: string) => void;
  isEmailComplete: boolean;
  setIsEmailComplete: (value: boolean) => void;
};

export type CityInputProps = {
  cityInputState: string;
  setCityInputState: (value: string) => void;
  isCityValid: boolean;
  setIsCityValid: (value: boolean) => void;
};

export type NameInputProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  isNameValid: boolean;
  setIsNameValid: (value: boolean) => void;
  fieldName: "firstName" | "lastName";
};

export type FormProps = {
  setUserData: (data: UserInformation) => void;
};

export type ClassFormState = {
  firstNameInputState: string;
  lastNameInputState: string;
  isFirstNameValid: boolean;
  isLastNameValid: boolean;
  emailInputState: string;
  isEmailComplete: boolean;
  cityInputState: string;
  isCityValid: boolean;
  phoneInputState: [string, string, string, string];
  isPhoneValid: boolean;
  hasInteractedWithForm: boolean;
};
