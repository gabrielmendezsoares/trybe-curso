const getSchedule = require('../source/script-08');

describe('08 - Tests for `getSchedule`', () => {
  test('Tests for animal parameters', () => {
    {
      const actual = getSchedule('lions');
      const expected = ['Tuesday', 'Thursday', 'Saturday', 'Sunday'];

      expect(actual).toEqual(expected);
    }

    {
      const actual = getSchedule('penguins');
      const expected = ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'];

      expect(actual).toEqual(expected);
    }
  });

  test('Tests with empty parameter', () => {
    const actual = getSchedule();

    const expected = {
      Tuesday: {
        officeHour: 'Open from 8am until 6pm',
        exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes']
      },
      Wednesday: {
        officeHour: 'Open from 8am until 6pm',
        exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes']
      },
      Thursday: {
        officeHour: 'Open from 10am until 8pm',
        exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes']
      },
      Friday: {
        officeHour: 'Open from 10am until 8pm',
        exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes']
      },
      Saturday: {
        officeHour: 'Open from 8am until 10pm',
        exhibition: [
          'lions', 'tigers',
          'bears', 'penguins',
          'otters', 'frogs',
          'snakes', 'elephants'
        ]
      },
      Sunday: {
        officeHour: 'Open from 8am until 8pm',
        exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants']
      },
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }
    };

    expect(actual).toEqual(expected);
  });

  test('Tests with invalid parameter', () => {
    const actual = getSchedule('qualquercoisa');

    const expected = {
      Tuesday: {
        officeHour: 'Open from 8am until 6pm',
        exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes']
      },
      Wednesday: {
        officeHour: 'Open from 8am until 6pm',
        exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes']
      },
      Thursday: {
        officeHour: 'Open from 10am until 8pm',
        exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes']
      },
      Friday: {
        officeHour: 'Open from 10am until 8pm',
        exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes']
      },
      Saturday: {
        officeHour: 'Open from 8am until 10pm',
        exhibition: [
          'lions', 'tigers',
          'bears', 'penguins',
          'otters', 'frogs',
          'snakes', 'elephants'
        ]
      },
      Sunday: {
        officeHour: 'Open from 8am until 8pm',
        exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants']
      },
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }
    };

    expect(actual).toEqual(expected);
  });

  test('Tests with `Monday` parameter', () => {
    const actual = getSchedule('Monday');

    const expected = {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }
    };

    expect(actual).toEqual(expected);
  });

  test('Tests with day schedule', () => {
    {
      const actual = getSchedule('Tuesday');

      const expected = {
        Tuesday: {
          officeHour: 'Open from 8am until 6pm',
          exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes']
        }
      };

      expect(actual).toEqual(expected);
    }

    {
      const actual = getSchedule('Wednesday');

      const expected = {
        Wednesday: {
          officeHour: 'Open from 8am until 6pm',
          exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes']
        }
      };

      expect(actual).toEqual(expected);
    }
  });
});
