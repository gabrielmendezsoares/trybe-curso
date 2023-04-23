const { calculateEntry, countEntrants } = require('../source/script-07');

describe('07 - Tests for `calculateEntry` and `countEntrants`', () => {
  test('Tests with entrants', () => {
    const entrants = [
      { name: 'Jhon', age: 5 },
      { name: 'Lucas', age: 5 },
      { name: 'Caio', age: 5 },
      { name: 'Emanuel', age: 18 },
      { name: 'Gabriel', age: 18 },
      { name: 'Ana', age: 50 }
    ];

    const actual = countEntrants(entrants);
    const expected = { adult: 2, child: 3, senior: 1 };

    expect(actual).toEqual(expected);
  });

  test('Tests with empty parameter', () => {
    const actual = calculateEntry();
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('Tests with empty array as parameter', () => {
    const actual = calculateEntry([]);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('Tests with bill', () => {
    const entrants = [
      { name: 'Jhon', age: 5 },
      { name: 'Lucas', age: 5 },
      { name: 'Caio', age: 5 },
      { name: 'Emanuel', age: 18 },
      { name: 'Gabriel', age: 18 },
      { name: 'Ana', age: 50 }
    ];

    const actual = calculateEntry(entrants);
    const expected = 187.94;

    expect(actual).toEqual(expected);
  });

  test('Tests with adult entrant', () => {
    const entrants = [{ name: 'Jhon', age: 18 }];
    const actual = calculateEntry(entrants);
    const expected = 49.99;

    expect(actual).toEqual(expected);
  });

  test('Tests with senior entrant', () => {
    const entrants = [{ name: 'Jhon', age: 50 }];
    const actual = calculateEntry(entrants);
    const expected = 24.99;

    expect(actual).toEqual(expected);
  });

  test('Tests with child entrant', () => {
    const entrants = [{ name: 'Jhon', age: 5 }];
    const actual = calculateEntry(entrants);
    const expected = 20.99;

    expect(actual).toEqual(expected);
  });

  test('Tests with child and senior entrants', () => {
    const entrants = [
      { name: 'Jhon', age: 5 },
      { name: 'Lucas', age: 50 }
    ];

    const actual = calculateEntry(entrants);
    const expected = 45.98;

    expect(actual).toEqual(expected);
  });
});
