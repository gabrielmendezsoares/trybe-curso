const calculator = (number1, number2) => {
  const object = {
    sum: number1 + number2,
    mult: number1 * number2,
    div: Math.floor(number1 / number2),
    sub: number1 - number2
  };

  return object;
};

const arrayGenerator = (type, object) => {
  switch (type) {
    case 'keys':
      return Object.keys(object);

    case 'values':
      return Object.values(object);

    case 'entries':
      return Object.entries(object);

    default:
      return undefined;
  }
};

module.exports = { calculator, arrayGenerator };
