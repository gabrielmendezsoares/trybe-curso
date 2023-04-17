const handlerElephants = require('../source/script-06');

describe('06 - Tests for `HandlerElephants`', () => {
  test('Tests with empty parameter', () => {
    const actual = handlerElephants();

    expect(actual).toBeUndefined();
  });

  test('Tests with `0` parameter', () => {
    const actual = handlerElephants(0);
    const expected = 'Parâmetro inválido, é necessário uma string';

    expect(actual).toBe(expected);
  });

  test('Tests with `test` parameter', () => {
    const actual = handlerElephants('test');

    expect(actual).toBeNull();
  });

  test('Tests with `count` parameter', () => {
    const actual = handlerElephants('count');
    const expected = 4;

    expect(actual).toBe(expected);
  });

  test('Tests with `names` parameter', () => {
    const actual = handlerElephants('names');
    const expected = 'Jefferson';

    expect(actual).toContain(expected);
  });

  test('Tests with `averageAge` parameter', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;

    expect(actual).toBeCloseTo(expected);
  });

  test('Tests with `location` parameter', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';

    expect(actual).toBe(expected);
  });

  test('Tests with `popularity` parameter', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;

    expect(actual).toBe(expected);
  });

  test('Tests with `availability` parameter', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];

    expect(actual).toEqual(expected);
  });
});
