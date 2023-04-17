const getAnimalsOlderThan = require('../source/script-02');

describe('02 - Tests for `getAnimalsOlderThan`', () => {
  test('Tests with age', () => {
    {
      const actual = getAnimalsOlderThan('otters', 7);
      const expected = true;

      expect(actual).toEqual(expected);
    }

    {
      const actual = getAnimalsOlderThan('penguins', 10);
      const expected = false;

      expect(actual).toEqual(expected);
    }
  });
});
