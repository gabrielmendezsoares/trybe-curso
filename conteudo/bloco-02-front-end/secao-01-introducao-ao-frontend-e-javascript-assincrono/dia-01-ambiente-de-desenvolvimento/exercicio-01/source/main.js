import validator from 'validator';
import './styles/style.css';

const textInput = document.querySelector('#text-input');
const option = document.querySelector('#option');
const button = document.querySelector('#button');
const answer = document.querySelector('#answer');
const UUID_VERSION = 4;

button.addEventListener('click', (event) => {
  event.preventDefault();

  const fields = {
    'tax-id': validator.isTaxID(textInput.value, 'pt-BR'),
    'hex-color': validator.isHexColor(textInput.value),
    email: validator.isEmail(textInput.value),
    uuid: validator.isUUID(textInput.value, UUID_VERSION),
    url: validator.isURL(textInput.value)
  };

  answer.innerHTML = `Validation returned ${fields[option.value]}`;
});
