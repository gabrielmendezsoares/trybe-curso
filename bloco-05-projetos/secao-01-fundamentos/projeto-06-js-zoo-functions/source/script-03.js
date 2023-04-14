const { employees } = require('../data/script-01');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  return employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
};

module.exports = getEmployeeByName;
