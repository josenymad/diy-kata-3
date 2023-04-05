const humanCatDogYears = (number) => {
  if (number === 0) {
    return [0, 0, 0];
  }
  if (number === 1) {
    return [number, 15, 15];
  }
  if (number === 2) {
    return [number, 24, 24];
  }
  return [number, 24 + (number - 2) * 4, 24 + (number - 2) * 5];
};

module.exports = humanCatDogYears;
