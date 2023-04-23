const { species } = require('../data/zoo');

const getCompactInfo = (filteredSpecies) => filteredSpecies.map(({ name }) => name);

const getDispersedInfo = (filteredSpecies, { sex, sorted }) => filteredSpecies
  .map(({ name, residents }) => {
    let residentsArray = residents
      .map(({ name: residentName }) => residentName);

    if (sex) {
      residentsArray = residents
        .filter(({ sex: residentSex }) => residentSex === sex)
        .map(({ name: residentName }) => residentName);
    }

    if (sorted) {
      residentsArray.sort();
    }

    return { [name]: residentsArray };
  });

const getLocationSpecie = (locationOption, options) => {
  const filteredSpecies = species
    .filter(({ location }) => location === locationOption);

  if (options) {
    const { includeNames, sex, sorted } = options;

    return (!includeNames)
      ? getCompactInfo(filteredSpecies)
      : getDispersedInfo(filteredSpecies, { sex, sorted });
  }

  return getCompactInfo(filteredSpecies);
};

const getAnimalMap = (options) => {
  const specieMap = {
    NE: getLocationSpecie('NE', options),
    NW: getLocationSpecie('NW', options),
    SE: getLocationSpecie('SE', options),
    SW: getLocationSpecie('SW', options)
  };

  return specieMap;
};

module.exports = getAnimalMap;
