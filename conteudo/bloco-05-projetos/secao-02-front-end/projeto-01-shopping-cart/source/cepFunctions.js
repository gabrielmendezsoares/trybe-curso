export const getAddress = async (cep) => {
  const cepResult = document.querySelector('#cart-address');

  try {
    const response = await Promise
      .any([
        fetch(`https://cep.awesomeapi.com.br/json/${cep}`),
        fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
      ]);

    if (!response.ok) {
      cepResult.innerHTML = 'CEP não encontrado';
    } else {
      const {
        street,
        address,
        neighborhood,
        district, city,
        state
      } = await response.json();

      const rua = (street) || address;
      const bairro = (neighborhood) || district;

      cepResult.innerHTML = `${rua} - ${bairro} - ${city} - ${state}`;
    }
  } catch ({ message }) {
    cepResult.innerHTML = message;
  }
};

export const searchCep = () => {
  const { value } = document.querySelector('#cep-input');

  getAddress(value);
};
