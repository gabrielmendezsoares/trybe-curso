const handlerElephants = require('../src/handlerElephants');

describe('Tests for `HandlerElephants`', () => {
  it('Test with `empty` parameter', () => {
    const actual = handlerElephants();

    expect(actual).toBeUndefined();
  });

  it('Test with `0` parameter', () => {
    const actual = handlerElephants(0);
    const expected = 'Parâmetro inválido, é necessário uma string';

    expect(actual).toBe(expected);
  });

  it('Test with `test` parameter', () => {
    const actual = handlerElephants('test');

    expect(actual).toBeNull();
  });

  it('Test with `count` parameter', () => {
    const actual = handlerElephants('count');
    const expected = 4;

    expect(actual).toBe(expected);
  });

  it('Test with `names` parameter', () => {
    const actual = handlerElephants('names');
    const expected = 'Jefferson';

    expect(actual).toContain(expected);
  });

  it('Test with `averageAge` parameter', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;

    expect(actual).toBeCloseTo(expected);
  });

  it('Test with `location` parameter', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';

    expect(actual).toBe(expected);
  });

  it('Test with `popularity` parameter', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;

    expect(actual).toBe(expected);
  });

  it('Test with `availability` parameter', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];

    expect(actual).toEqual(expected);
  });
});
