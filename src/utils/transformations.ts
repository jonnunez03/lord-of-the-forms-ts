export const capitalize = (str: string): string => {
  const trimmedStr = str.trim();
  return trimmedStr.charAt(0).toUpperCase() + trimmedStr.slice(1).toLowerCase();
  // `capitalize("jOn")` should output `"Jon"`
};

export const formatPhoneNumber = (numStr: string): string => {
  return numStr.split(",").join("-");
  // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
};
