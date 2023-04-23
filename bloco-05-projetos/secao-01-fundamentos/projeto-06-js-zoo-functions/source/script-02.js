const { species } = require('../data/zoo');

const getAnimalsOlderThan = (animal, age) => species
  .find(({ name }) => name === animal).residents
  .every(({ age: residentAge }) => residentAge >= age);

module.exports = getAnimalsOlderThan;
