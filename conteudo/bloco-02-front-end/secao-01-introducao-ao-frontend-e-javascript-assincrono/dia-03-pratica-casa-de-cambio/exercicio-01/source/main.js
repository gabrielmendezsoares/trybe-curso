import Swal from 'sweetalert2';
import coin from './assets/coin.svg'
import './style.css';

const searchBar = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button');
const tableTitle = document.querySelector('#table-title');
const tableList = document.querySelector('#table-list');
const API_URL = 'https://api.exchangerate.host/latest?base=';

const validateCurrency = (currency, base) => {
  if (currency.toLowerCase() !== base.toLowerCase() && currency.length > 0) {
    throw new Error('Invalid currency!');
  }

  if (currency.length === 0) {
    throw new Error('You need to insert a currency');
  }
};

const createCurrency = (key, value) => {
  const newListItem = document.createElement('li');
  const newContainer = document.createElement('div');
  const newIcon = document.createElement('img');
  const newCurrencyName = document.createElement('p');
  const newCurrencyValue = document.createElement('p');

  newContainer.id = 'currency-wrapper';
  newIcon.src = coin;
  newCurrencyName.innerHTML = `${key}`;
  newCurrencyValue.innerHTML = `${value}`;
  newCurrencyValue.className = 'value-highlight';
  newContainer.appendChild(newIcon);
  newContainer.appendChild(newCurrencyName);
  newListItem.appendChild(newContainer);
  newListItem.appendChild(newCurrencyValue);
  tableList.appendChild(newListItem);
};

searchButton.addEventListener('click', (event) => {
  event.preventDefault();

  const currency = searchBar.value;
  const API_ENTRYPOINT = `${API_URL}${currency}`;

  fetch(API_ENTRYPOINT)
    .then((response) => response.json())
    .then(({ base, rates }) => {
      validateCurrency(currency, base);
      tableTitle.innerHTML = `Currencies referring to <span class="title-highlight">1 ${currency.toUpperCase()}</span>`;
      tableList.innerHTML = '';

      const currencies = Object.entries(rates)
        .filter(([key]) => key.toLowerCase() !== currency.toLowerCase());

      currencies.forEach(([key, value]) => {
        createCurrency(key, value);
      });
    })
    .catch(({ message }) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: `${message}`
      });
    });
});
