import { allCities } from "./all-cities";

export function isEmailValid(emailAddress: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export const areNamesValid = (name: string): boolean => {
  const nameRegex = /^[a-zA-Zà-ÿÀ-Ÿ' -]+$/;
  return nameRegex.test(name.trim()) && name.length >= 2;
};

export const hasCity = (value: string): boolean => {
  const lowercaseCities = allCities.map((city) => city.toLowerCase());
  return lowercaseCities.includes(value.toLowerCase().trim());
};
