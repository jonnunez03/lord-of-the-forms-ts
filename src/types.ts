import { ComponentProps } from "react";

export type UserInformation = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
};

export type TextInput = {
  inputProps: ComponentProps<"input">;
  errorMessage: string;
  shouldDisplayMessage: boolean;
};

export type PhoneInputProps = {
  phoneInputState: string[];
  setPhoneInputState: (newState: string[]) => void;
  errorMessage: string;
  shouldDisplayMessage: boolean;
};

export type FormProps = {
  setUserData: (data: UserInformation) => void;
};

export type ClassFormState = {
  firstNameInputState: string;
  lastNameInputState: string;
  emailInputState: string;
  cityInputState: string;
  phoneInputState: string[];
  hasInteractedWithForm: boolean;
};
