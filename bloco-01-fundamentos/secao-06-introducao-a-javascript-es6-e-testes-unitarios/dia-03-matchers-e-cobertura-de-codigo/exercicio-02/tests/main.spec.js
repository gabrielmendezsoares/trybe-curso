const sum = require('../source/main');

describe('1 - Create test cases for the `Sum` function', () => {
  test('Tests whether when receiving "4" and "5" as a parameter, it returns "9" as a result', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Tests whether when receiving "0" in the two parameters, it returns the result "0"', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Tests whether it triggers an error, if it receives a string as a parameter', () => {
    expect(() => { sum(4, '5'); }).toThrow();
  });

  test('Tests whether the error message is "parameters must be numbers" when calling sum(4, "5")', () => {
    expect(() => { sum(4, '5'); }).toThrow('parameters must be numbers');
  });
});
