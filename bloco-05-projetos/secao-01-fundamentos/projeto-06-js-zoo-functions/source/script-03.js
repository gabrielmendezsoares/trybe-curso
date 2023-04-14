const data = require('../data/script-01');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
};

module.exports = getEmployeeByName;
