export const formatDay = (duration: number) => {
  let lastItem = duration % 10;
  let stroke = "";
  if (lastItem === 1) {
    stroke = "день";
  } else if (lastItem === 2 || lastItem === 3 || lastItem === 4) {
    stroke = "дня";
  } else if (
    lastItem === 5 ||
    lastItem === 6 ||
    lastItem === 7 ||
    lastItem === 8 ||
    lastItem === 9 ||
    lastItem === 0
  ) {
    stroke = "дней";
  }
  return `${duration} ${stroke}`;
};
