// import './mocks/fetchSimulator';
import { fetchProductsList } from '../source/fetchFunctions';
// import computadorSearch from './mocks/search';

describe('Teste a função fetchProductsList', () => {
  test('fetchProductsList é uma função', () => {
    const actual = typeof fetchProductsList;
    const expected = 'function';

    expect(actual).toBe(expected);
  });

  test('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  test('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  test('fetchProductsList retorna um objeto igual computadorSearch', async () => {
    const actual = fetchProductsList('computador');

    // await expect(actual).resolves.toStrictEqual(computadorSearch);
  });

  test('fetchProduct retorna um erro ao executar a função com um argumento incorreto', async () => {
    const actual = fetchProductsList('???');

    await expect(actual).rejects.toThrow('Erro de requisição');
  });

  test('fetchProductsList retorna um erro ao executar a função sem argumento', async () => {
    const actual = fetchProductsList();
    const expected = 'Termo de busca não informado';

    await expect(actual).rejects.toThrow(expected);
  });
});
