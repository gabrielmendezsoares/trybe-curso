const { species, employees } = require('../data/script-01');

Object.isObject = (value) => (
  typeof value === 'object' &&
  value !== null &&
  !Array.isArray(value)
);

const validateInfo = (info) => {
  const error = new Error('Informações inválidas');

  if (!Object.isObject(info)) {
    throw error;
  }

  const { name, id } = info;

  if (!name && !id) {
    throw error;
  }
};

const validateEmployeeData = (data) => {
  if (!data) {
    throw new Error('Informações inválidas');
  }
};

const getEmployeeData = ({ name, id }) => {
  const employeeData = employees
    .find((employee) => (
      employee.id === id ||
      employee.firstName === name ||
      employee.lastName === name
    ));

  validateEmployeeData(employeeData);

  const { id: employeeId, firstName, lastName, responsibleFor } = employeeData;
  const filteredSpecies = species
    .filter(({ id: specieId }) => responsibleFor.includes(specieId));

  return {
    id: employeeId,
    fullName: `${firstName} ${lastName}`,
    species: filteredSpecies.map(({ name: specieName }) => specieName),
    locations: filteredSpecies.map(({ location }) => location)
  };
};

const getEmployeesData = () => {
  const data = [];

  employees.forEach(({ id, firstName, lastName, responsibleFor }) => {
    const filteredSpecies = species
      .filter(({ id: specieId }) => responsibleFor.includes(specieId));

    data.push({
      id,
      fullName: `${firstName} ${lastName}`,
      species: filteredSpecies.map(({ name: specieName }) => specieName),
      locations: filteredSpecies.map(({ location }) => location)
    });
  });

  return data;
};

const getEmployeesCoverage = (info) => {
  if (!info) {
    return getEmployeesData();
  }

  validateInfo(info);
  return getEmployeeData(info);
};

module.exports = getEmployeesCoverage;
