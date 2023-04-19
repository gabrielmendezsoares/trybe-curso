import validator from 'validator';

const value = document.querySelector('#value');
const option = document.querySelector('#option');
const button = document.querySelector('#button');
const answer = document.querySelector('#answer');
const UUID_VERSION = 4;

button.addEventListener('click', (event) => {
  event.preventDefault();

  const fields = {
    taxID: validator.isTaxID(value.value, 'pt-BR'),
    hexColor: validator.isHexColor(value.value),
    email: validator.isEmail(value.value),
    uuid: validator.isUUID(value.value, UUID_VERSION),
    url: validator.isURL(value.value)
  };

  answer.innerHTML = `A validação retornou ${fields[option.value]}`;
});
