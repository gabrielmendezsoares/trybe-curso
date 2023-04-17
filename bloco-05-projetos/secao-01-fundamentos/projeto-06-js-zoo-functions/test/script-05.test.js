const countAnimals = require('../source/script-05');

describe('05 - Tests for `countAnimals`', () => {
  test('Tests with empty parameter', () => {
    const expected = {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6
    };

    const actual = countAnimals();

    expect(actual).toStrictEqual(expected);
  });

  test('Tests with `species` key', () => {
    {
      const actual = countAnimals({ species: 'penguins' });
      const expected = 4;

      expect(actual).toBe(expected);
    }

    {
      const actual = countAnimals({ species: 'giraffes' });
      const expected = 6;

      expect(actual).toBe(expected);
    }
  });

  test('Tests with `species` and `sex` key', () => {
    {
      const actual = countAnimals({ species: 'bears', sex: 'female' });
      const expected = 0;

      expect(actual).toBe(expected);
    }

    {
      const actual = countAnimals({ species: 'elephants', sex: 'male' });
      const expected = 2;

      expect(actual).toBe(expected);
    }
  });
});
