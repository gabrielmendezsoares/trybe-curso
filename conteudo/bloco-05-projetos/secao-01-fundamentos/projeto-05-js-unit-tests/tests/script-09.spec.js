const createMenu = require('../source/script-09');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(typeof createMenu().fetchMenu).toBe('function');
    expect(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu())).toStrictEqual(['food', 'drinks']);
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toEqual({ food: {}, drinks: {} });
    expect(createMenu({ food: {}, drinks: {} }).consumption).toEqual([]);

    const objetoRetornadoCreateMenu = createMenu(
      {
        food: { coxinha: 3.90, sanduiche: 9.90 },
        drinks: { agua: 3.90, cerveja: 6.90 }
      });

    expect(objetoRetornadoCreateMenu.order('picanha')).toBe('Item indisponível');
    expect(objetoRetornadoCreateMenu.order('coxinha')).toEqual(['coxinha']);
    expect(objetoRetornadoCreateMenu.order('sanduiche')).toEqual(['coxinha', 'sanduiche']);
    expect(objetoRetornadoCreateMenu.order('agua')).toEqual(['coxinha', 'sanduiche', 'agua']);
    expect(objetoRetornadoCreateMenu.order('cerveja')).toEqual(['coxinha', 'sanduiche', 'agua', 'cerveja']);
    expect(objetoRetornadoCreateMenu.order('cerveja')).toEqual(['coxinha', 'sanduiche', 'agua', 'cerveja', 'cerveja']);
    expect(objetoRetornadoCreateMenu.pay()).toBeCloseTo(34.65);
  });
});
