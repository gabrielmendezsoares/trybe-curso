const hydrate = require('../source/main');

describe('Test the hydrate function', () => {
  test('Tests if the hydrate function is defined', () => {
    expect(hydrate).toBeDefined();
  });

  test('Tests if hydrate is a function', () => {
    expect(typeof hydrate).toBe('function');
  });

  test('When receiving a string, return the suggestion of how many glasses of water to drink', () => {
    expect(hydrate('1 beer')).toBe('1 glass of water');
    expect(hydrate('1 cachaça, 5 beers and 1 glass of wine')).toBe('7 glasses of water');
    expect(hydrate('2 shots of tequila, 2 beers and 1 corote')).toBe('5 glasses of water');
    expect(hydrate('1 glass of catuaba, 1 beer and 1 glass of wine')).toBe('3 glasses of water');
    expect(hydrate('4 caipirinhas and 2 beers')).toBe('6 glasses of water');
  });
});
