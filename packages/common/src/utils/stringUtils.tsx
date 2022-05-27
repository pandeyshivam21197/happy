export const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const isValidNumber = (number: string): RegExpMatchArray | null => {
  return number.match("(0|91)?[6-9][0-9]{9}");
};
