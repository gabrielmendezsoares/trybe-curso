const { species } = require('../data/script-01');

const getSpeciesByIds = (...ids) => species
  .filter(({ id }) => ids.includes(id));

module.exports = getSpeciesByIds;
