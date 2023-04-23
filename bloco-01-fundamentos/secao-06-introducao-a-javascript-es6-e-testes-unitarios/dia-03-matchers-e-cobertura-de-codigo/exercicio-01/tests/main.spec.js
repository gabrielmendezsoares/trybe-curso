const createItem = require('../source/main');

describe('The createItem function', () => {
  test('Create a valid item', () => {
    const expected = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };
    const actual = createItem('banana', 'kg', 1.99, 20);

    expect(actual).toEqual(expected);
  });

  test('Uses zero as default quantity', () => {
    const expected = 0;
    const actual = createItem('banana', 'kg', 1.99);

    expect(actual).toHaveProperty('quantity', expected);
  });

  test('Throws an error when not given parameters', () => {
    expect(() => createItem()).toThrow();
  });

  test('Throws an error if item name is not a string', () => {
    expect(() => createItem(1.99, 'kg', 'banana', 20)).toThrow('Item name must be a string');
  });

  test('Throws an error if the price is negative', () => {
    expect(() => createItem('banana', 'kg', -0.01)).toThrow('Item price must be greater than zero');
  });

  test('Throws an error if price is zero', () => {
    expect(() => createItem('banana', 'kg', 0.00)).toThrow('Item price must be greater than zero');
  });
});
