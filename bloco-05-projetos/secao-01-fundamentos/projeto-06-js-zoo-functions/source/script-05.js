const { species } = require('../data/script');

const countAnimals = (animal) => {
  if (!animal) {
    return species
      .reduce((accumulator, { name, residents }) => {
        accumulator[name] = residents.length;
        return accumulator;
      }, {});
  }

  const { residents } = species
    .find(({ name }) => name === animal.species);

  if (animal.sex) {
    return residents
      .filter(({ sex }) => sex === animal.sex).length;
  }

  return residents.length;
};

module.exports = countAnimals;
