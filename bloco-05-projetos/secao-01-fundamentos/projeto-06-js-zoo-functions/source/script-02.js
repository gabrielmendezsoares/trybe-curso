const { species } = require('../data/script');

const getAnimalsOlderThan = (animal, age) => species
  .find(({ name }) => name === animal).residents
  .every(({ age: residentAge }) => residentAge >= age);

module.exports = getAnimalsOlderThan;
