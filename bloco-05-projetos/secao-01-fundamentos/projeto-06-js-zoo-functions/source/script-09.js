const { species, employees } = require('../data/script');

const getOldestFromFirstSpecies = (id) => {
  const { responsibleFor } = employees
    .find(({ id: employeeId }) => employeeId === id);

  const [firstSpecie] = responsibleFor;

  const { residents } = species
    .find(({ id: specieId }) => specieId === firstSpecie);

  const [firstResident] = residents;

  const oldestSpecie = residents
    .reduce((accumulator, resident) => ((resident.age > accumulator.age)
      ? resident
      : accumulator),
    firstResident);

  return Object.values(oldestSpecie);
};

module.exports = getOldestFromFirstSpecies;
