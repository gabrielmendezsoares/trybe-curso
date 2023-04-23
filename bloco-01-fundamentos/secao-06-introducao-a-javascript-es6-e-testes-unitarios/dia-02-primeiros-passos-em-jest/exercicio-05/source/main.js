const hydrate = (string) => {
  const splitString = string.split('');
  let glassesOfWater = 0;

  for (let index = 0; index < splitString.length; index += 1) {
    const parsedCharacter = parseInt(splitString[index]);

    if (parsedCharacter) {
      glassesOfWater += parsedCharacter;
    }
  }

  let glass = 'glass';

  if (glassesOfWater > 1) {
    glass = 'glasses';
  }

  return `${glassesOfWater} ${glass} of water`;
};

module.exports = hydrate;
