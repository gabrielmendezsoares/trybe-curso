const myFizzBuzz = require('../source/main');

describe('Tests the myFizzBuzz function', () => {
  test('Checks whether, according to the received parameter, it returns the expected value', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz('2')).toBe(false);
  });
});
