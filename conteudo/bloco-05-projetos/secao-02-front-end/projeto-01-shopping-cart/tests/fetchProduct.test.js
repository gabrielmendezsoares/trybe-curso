// import './mocks/fetchSimulator';
import { fetchProduct } from '../source/fetchFunctions';
// import product from './mocks/product';

describe('Teste a função fetchProduct', () => {
  test('fetchProduct é uma função', () => {
    const actual = typeof fetchProduct;
    const expected = 'function';

    expect(actual).toBe(expected);
  });

  test('fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  test('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  test('fetchProduct retorna um objeto igual product', async () => {
    const actual = fetchProduct('MLB1405519561');

    // await expect(actual).resolves.toStrictEqual(product);
  });

  test('fetchProduct retorna um erro ao executar a função com um argumento incorreto', async () => {
    const actual = fetchProduct('MLB140551956?');

    await expect(actual).rejects.toThrow('Erro de requisição');
  });

  test('fetchProduct retorna um erro ao executar a função sem argumento', async () => {
    const actual = fetchProduct();

    await expect(actual).rejects.toThrow('ID não informado');
  });
});
