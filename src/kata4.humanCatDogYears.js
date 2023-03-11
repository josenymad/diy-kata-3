const humanCatDogYears = (number) => {
  if (number === 1) {
    return [number, 15, 15];
  }
  if (number === 2) {
    return [number, 24, 24];
  }
  if (number >= 3) {
    return [number, 24 + (number - 2) * 4, 24 + (number - 2) * 5];
  }
};

module.exports = humanCatDogYears;
