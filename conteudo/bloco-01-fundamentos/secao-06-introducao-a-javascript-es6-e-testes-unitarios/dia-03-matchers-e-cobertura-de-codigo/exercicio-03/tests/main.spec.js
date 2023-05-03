const { info, printMessage } = require('../source/main');

describe('2 - Implement the test case for the `printMessage` function', () => {
  test('Tests the character property on the object.', () => {
    expect(info).toHaveProperty('character');
  });
});

describe('3 - Still on the `printMessage` function, add the following test cases`', () => {
  test('the welcome information.', () => {
    expect(printMessage(info)).toMatch('Welcome,');
  });

  test('Tests the information regarding the character\'s name.', () => {
    expect(printMessage(info)).toMatch(info.character);
  });
});

describe('4 - Create an exception flow for the `printMessage` function', () => {
  test('Tests the exception flow of the printMessage function.', () => {
    expect(() => printMessage('Daisy Duck')).toThrow('Invalid object');
  });
});
