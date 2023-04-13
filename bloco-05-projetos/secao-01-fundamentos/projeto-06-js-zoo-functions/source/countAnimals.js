const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return data.species
      .reduce((accumulator, specie) => {
        accumulator[specie.name] = specie.residents.length;
        return accumulator;
      }, {});
  }

  const specieObject = data.species
    .find((specie) => specie.name === animal.species);

  if (animal.sex) {
    return specieObject.residents
      .filter((resident) => resident.sex === animal.sex).length;
  }

  return specieObject.residents.length;
};

console.log(countAnimals());

module.exports = countAnimals;
