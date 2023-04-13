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

  it('retorna a quantida', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
