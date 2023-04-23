const { isManager, getRelatedEmployees } = require('../source/script-04');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

describe('04 - Tests for `isManager` and `getRelatedEmployees`', () => {
  test('Tests for `true` manager Id', () => {
    const expected = true;

    managers.forEach((managerId) => {
      const actual = isManager(managerId);
      expect(actual).toBe(expected);
    });
  });

  test('Tests for `false` manager Id', () => {
    const actual = isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
    const expected = false;

    expect(actual).toBe(expected);
  });

  test('Tests for employees list', () => {
    const actual = getRelatedEmployees(stephanieId);
    const expected = ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];

    expect(actual).toEqual(expected);
  });

  test('Tests for error case', () => {
    const actual = '4b40a139-d4dc-4f09-822d-ec25e819a5ad';

    expect(() => getRelatedEmployees(actual)).toThrow(/^O id inserido não é de uma pessoa colaboradora gerente!$/);
  });
});
