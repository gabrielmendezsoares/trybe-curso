const circle = require('../source/script-02');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    expect(circle('3')).toBeUndefined();
    expect(typeof circle(3)).toBe('object');
    expect(Object.keys(circle(3))).toHaveLength(3);
    expect(circle()).toBeUndefined();
    expect(circle(2).circumference).toBeCloseTo(2 * 3.14 * 2);
    expect(circle(3).area).toBeCloseTo(3.14 * 3 * 3);
    expect(circle(3)).toEqual({
      radius: 3,
      area: 3.14 * 3 * 3,
      circumference: 2 * 3.14 * 3
    });
  });
});
