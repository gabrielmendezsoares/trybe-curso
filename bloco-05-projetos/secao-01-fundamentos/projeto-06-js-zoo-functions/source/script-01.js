const { species } = require('../data/script');

const getSpeciesByIds = (...ids) => species
  .filter(({ id }) => ids.includes(id));

module.exports = getSpeciesByIds;
