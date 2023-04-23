const getAnimalMap = require('../source/script-12');

describe('12 - Tests for `getAnimalMap`', () => {
  test('Tests with empty parameter', () => {
    const actual = getAnimalMap();

    const expected = {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes']
    };

    expect(actual).toEqual(expected);
  });

  test('Testes with `sex` key', () => {
    const expected = {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes']
    };

    const options = { sex: 'female' };
    const actual = getAnimalMap(options);

    expect(actual).toEqual(expected);
  });

  test('Tests without `includeNames` key and with `sorted` key', () => {
    const expected = {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes']
    };

    const options = { sex: 'female', sorted: true };
    const actual = getAnimalMap(options);

    expect(actual).toEqual(expected);
  });

  test('Tests with `includeNames` key', () => {
    const options = { includeNames: true };
    const actual = getAnimalMap(options);

    const expected = {
      NE: [
        { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
        { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] }
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: ['Hiram', 'Edwardo', 'Milan'] },
        { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] }
      ],
      SE: [
        { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
        { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] }
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette', 'Bill'] }
      ]
    };

    expect(actual).toEqual(expected);
  });

  test('Tests with `includeNames` and `sorted` keys', () => {
    const options = { includeNames: true, sorted: true };
    const actual = getAnimalMap(options);

    const expected = {
      NE: [
        { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
        { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] }
      ],
      NW: [
        { tigers: ['Esther', 'Shu'] },
        { bears: ['Edwardo', 'Hiram', 'Milan'] },
        { elephants: ['Bea', 'Ilana', 'Jefferson', 'Orval'] }
      ],
      SE: [
        { penguins: ['Joe', 'Keri', 'Nicholas', 'Tad'] },
        { otters: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] }
      ],
      SW: [
        { frogs: ['Annice', 'Cathey'] }, { snakes: ['Bill', 'Paulette'] }
      ]
    };

    expect(actual).toEqual(expected);
  });

  test('Tests for `includeNames` and `sex` keys', () => {
    const options = { includeNames: true, sex: 'female' };
    const actual = getAnimalMap(options);

    const expected = {
      NE: [
        { lions: ['Zena', 'Dee'] },
        { giraffes: ['Gracia', 'Vicky'] }
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: [] },
        { elephants: ['Ilana', 'Bea'] }
      ],
      SE: [
        { penguins: ['Keri'] },
        { otters: ['Mercedes', 'Margherita'] }
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette'] }
      ]
    };

    expect(actual).toEqual(expected);
  });

  test('Tests for `includeNames`, `sex` and `sorted` keys', () => {
    const options = { includeNames: true, sex: 'female', sorted: true };
    const actual = getAnimalMap(options);

    const expected = {
      NE: [
        { lions: ['Dee', 'Zena'] },
        { giraffes: ['Gracia', 'Vicky'] }
      ],
      NW: [
        { tigers: ['Esther', 'Shu'] },
        { bears: [] },
        { elephants: ['Bea', 'Ilana'] }
      ],
      SE: [
        { penguins: ['Keri'] },
        { otters: ['Margherita', 'Mercedes'] }
      ],
      SW: [
        { frogs: ['Annice', 'Cathey'] },
        { snakes: ['Paulette'] }
      ]
    };

    expect(actual).toEqual(expected);
  });
});
