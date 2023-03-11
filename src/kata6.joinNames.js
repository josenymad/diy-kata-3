const joinNames = (namesObj) => {
  const namesArray = namesObj.map((person) => person.name);

  const stringOfNames = namesArray.reduce((acc, curr, index) => {
    if (index === namesArray.length - 1) {
      return acc + " & " + curr;
    }
    return acc + ", " + curr;
  });
  return stringOfNames;
};

module.exports = joinNames;
