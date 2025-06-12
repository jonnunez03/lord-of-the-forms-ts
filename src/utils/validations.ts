import { allCities } from "./all-cities";

export function isEmailValid(emailAddress: string) {
  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(emailRegex);
}

export const isNameValid = (name: string): boolean => {
  const nameRegex = /^[a-zA-Zà-ÿÀ-Ÿ' -]+$/;
  return nameRegex.test(name.trim()) && name.length >= 2;
};

export const hasCity = (value: string): boolean => {
  const lowercaseCities = allCities.map((city) => city.toLowerCase());
  return lowercaseCities.includes(value.toLowerCase().trim());
};

export const isPhoneValid = (numStrArr: string[]) => {
  const onlyNumbersRegex = /^\d{7}$/;
  return onlyNumbersRegex.test(numStrArr.join(""));
};
