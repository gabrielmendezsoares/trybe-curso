const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  return ids
    .map((id) => species
      .find((specie) => specie.id === id));
};

module.exports = getSpeciesByIds;
