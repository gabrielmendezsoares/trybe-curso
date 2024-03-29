const { species } = require('../data/zoo');

const getElephants = () => species
  .find(({ name }) => name === 'elephants');

const averageAge = ({ residents }) => residents
  .reduce((accumulator, { age }) => accumulator + age, 0) / residents.length;

const computeData = (param, elephants) => {
  switch (param) {
    case 'count':
      return elephants.residents.length;

    case 'names':
      return elephants.residents
        .map(({ name }) => name);

    case 'averageAge':
      return averageAge(elephants);

    default:
      return null;
  }
};

const handlerElephants = (param) => {
  if (param === undefined) {
    return undefined;
  }

  if (typeof param !== 'string') {
    return 'Parâmetro inválido, é necessário uma string';
  }

  const elephants = getElephants();

  if (Object.keys(elephants).includes(param)) {
    return elephants[param];
  }

  return computeData(param, elephants);
};

module.exports = handlerElephants;
