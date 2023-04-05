const joinNames = (namesObj) => {
  const namesArray = namesObj.map((person) => person.name);

  return namesArray.reduce((acc, curr, index) => {
    if (index === namesArray.length - 1) {
      return `${acc} & ${curr}`;
    }
    return `${acc}, ${curr}`;
  });
};

module.exports = joinNames;
