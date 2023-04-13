const { species, employees } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employeeObject = employees
    .find((employee) => employee.id === id);

  const [firstSpecie] = employeeObject.responsibleFor;
  const specieObject = species
    .find((specie) => specie.id === firstSpecie);

  const [firstResident] = specieObject.residents;
  const oldestSpecie = specieObject.residents
    .reduce((accumulator, resident) => ((resident.age > accumulator.age)
      ? resident
      : accumulator),
    firstResident);

  return [...Object.values(oldestSpecie)];
};

module.exports = getOldestFromFirstSpecies;
