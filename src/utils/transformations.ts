export const capitalize = (str: string): string => {
  const trimmedStr = str.trim();
  return trimmedStr.charAt(0).toUpperCase() + trimmedStr.slice(1).toLowerCase();
  // `capitalize("jOn")` should output `"Jon"`
};

export const formatPhoneNumber = (numStrArr: string[]): string | null => {
  const onlyNumbersRegex = /^\d*$/;
  const isValidPhone =
    numStrArr.join("").length === 7 &&
    onlyNumbersRegex.test(numStrArr.join(""));

  if (!isValidPhone) return null;
  return numStrArr.join("-");
  // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
};
