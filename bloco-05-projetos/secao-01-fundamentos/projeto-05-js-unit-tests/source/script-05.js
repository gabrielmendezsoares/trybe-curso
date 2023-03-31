const myCounter = () => {
  const myArray = [];

  for (let counterA = 0; counterA <= 3; counterA += 1) {
    myArray.push(counterA);

    for (let counterB = 2; counterB <= 3; counterB += 1) {
      myArray.push(counterB);
    }
  }

  return myArray;
};

module.exports = myCounter;
