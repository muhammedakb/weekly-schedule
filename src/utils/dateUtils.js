const days = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
export const getDate = () => {
  const date = new Date();

  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();

  const result = `${day} ${days[month]} ${year}`;
  return result;
};

export const dateCorrection = (date) => {
  const dayArr = date.split("-").reverse();
  const day = dayArr[1].charAt(0) === "0" ? dayArr[1].charAt(1) : dayArr[1];
  const result = `${dayArr[0]} ${days[day - 1]} ${dayArr[2]}`;
  return result;
};
