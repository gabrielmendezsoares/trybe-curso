const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const specieObject = data.species
    .find((specie) => specie.name === animal);

  return specieObject.residents
    .every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
