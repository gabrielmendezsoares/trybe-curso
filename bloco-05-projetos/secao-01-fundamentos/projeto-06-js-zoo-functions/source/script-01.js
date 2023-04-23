const { species } = require('../data/zoo');

const getSpeciesByIds = (...ids) => species
  .filter(({ id }) => ids.includes(id));

module.exports = getSpeciesByIds;
