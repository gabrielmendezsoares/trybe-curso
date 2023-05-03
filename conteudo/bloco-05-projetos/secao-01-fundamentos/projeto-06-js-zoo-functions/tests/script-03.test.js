const getEmployeeByName = require('../source/script-03');

const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
const bearsId = 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d';
const snakesId = '78460a91-f4da-4dea-a469-86fd2b8ccc84';

describe('03 - Tests for `getEmployeeByName`', () => {
  test('Tests with empty parameter', () => {
    const actual = getEmployeeByName();
    const expected = {};

    expect(actual).toEqual(expected);
  });

  test('Tests with first name as parameter', () => {
    const actual = getEmployeeByName('Emery');

    const expected = {
      id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
      firstName: 'Emery',
      lastName: 'Elser',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: [
        lionId,
        bearsId,
        elephantsId
      ]
    };

    expect(actual).toEqual(expected);
  });

  test('Tests with last name as parameter', () => {
    const actual = getEmployeeByName('Wishart');

    const expected = {
      id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
      firstName: 'Wilburn',
      lastName: 'Wishart',
      managers: [
        '0e7b460e-acf4-4e17-bcb3-ee472265db83',
        'fdb2543b-5662-46a7-badc-93d960fdc0a8'
      ],
      responsibleFor: [
        snakesId,
        elephantsId
      ]
    };

    expect(actual).toEqual(expected);
  });
});
