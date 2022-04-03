export const capitalize = (str) => {
  const splitted = str.split(" ");
  return splitted
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
};
