const productDetails = require('../source/script-08');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(productDetails('Alcool gel', 'Máscara')).toBeInstanceOf(Array);
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
    productDetails('Alcool gel', 'Máscara').forEach((element) => { expect(typeof element).toBe('object'); });
    expect(productDetails('Alcool gel', 'Máscara')).not.toEqual(productDetails('Máscara', 'Alcool gel'));
    productDetails('Alcool gel', 'Máscara').forEach((element) => { expect(element.details.productId).toMatch(/123/); });
  });
});
