import { getSavedCartIDs, saveCartID } from './cartFunctions';
import { searchCep } from './cepFunctions';
import { fetchProduct, fetchProductsList } from './fetchFunctions';

import {
  updateTotalPrice,
  getIdFromProduct,
  createCartProductElement,
  createProductElement
} from './shopFunctions';

import '../styles/style.css';

const createStatus = (name, text) => {
  const productSection = document.querySelector('#product-section');
  const statusElement = document.createElement('p');

  statusElement.className = name;
  statusElement.innerHTML = text;
  productSection.appendChild(statusElement);
};

const createProducts = async () => {
  const productSection = document.querySelector('#product-section');

  try {
    createStatus('loading', 'Carregando...');

    const data = await fetchProductsList('computador');

    productSection.innerHTML = '';

    data.forEach((product) => {
      const productElement = createProductElement(product);
      const button = productElement.querySelector('.product-button-add');
      const cartList = document.querySelector('#cart-list');

      productSection.appendChild(productElement);

      button.addEventListener('click', async () => {
        const productId = getIdFromProduct(productElement);
        const productData = await fetchProduct(productId);
        const cartElement = createCartProductElement(productData);

        cartList.appendChild(cartElement);
        saveCartID(productId);
        updateTotalPrice();
      });
    });
  } catch (error) {
    productSection.innerHTML = '';
    createStatus('error', 'Algum erro ocorreu, recarregue a página e tente novamente');
  }
};

const createCart = async () => {
  const cartList = document.querySelector('#cart-list');
  const productIdList = getSavedCartIDs();

  const productPromises = productIdList
    .map((productId) => fetchProduct(productId));

  const productList = await Promise
    .all(productPromises);

  productList.forEach((product) => {
    const cartElement = createCartProductElement(product);

    cartList.appendChild(cartElement);
  });

  updateTotalPrice();
};

const cepButton = document.querySelector('#cep-button');

cepButton.addEventListener('click', searchCep);
createProducts();
createCart();
