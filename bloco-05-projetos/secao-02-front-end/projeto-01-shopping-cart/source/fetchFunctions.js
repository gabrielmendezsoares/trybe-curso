export const fetchProduct = async (id) => {
  if (!id || typeof id !== 'string') {
    throw new Error('ID não informado');
  }

  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);

    if (!response.ok) {
      throw new Error('Erro de requisição');
    }

    const data = await response.json();

    return data;
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const fetchProductsList = async (query) => {
  if (!query || typeof query !== 'string') {
    throw new Error('Termo de busca não informado');
  }

  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);

    if (!response.ok || response.results === []) {
      throw new Error('Erro de requisição');
    }

    const { results } = await response.json();

    return results;
  } catch ({ message }) {
    throw new Error(message);
  }
};
