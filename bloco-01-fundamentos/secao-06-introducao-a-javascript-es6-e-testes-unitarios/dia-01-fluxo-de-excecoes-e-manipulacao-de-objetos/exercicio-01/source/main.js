const promo = [
  { product: 'Beach tennis ball', price: 29.99 },
  { product: '20 Liter hiking backpack', price: 120.99 },
  { product: 'Cyclist helmet', price: 180.59 },
  { product: 'Compact drying towel', price: 39.99 },
  { product: 'Kit of 5 Dry Fit t-shirts', price: 99.99 },
  { product: 'Weight shin guards - 3kg (pair)', price: 44.99 },
  { product: 'Gymnastic ball and pilates', price: 149.59 },
  { product: 'Swimming goggles', price: 18.99 },
  { product: 'Surfboard protective cover', price: 89.59 },
  { product: 'Basketball', price: 39.99 }
];

const button = document.querySelector('#send-button');

const validateAverage = (n1, n2, n3, n4) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number') {
    throw new Error('Attention! Values must be numeric');
  }
};

const calculateAverage = (n1, n2, n3, n4) => {
  try {
    validateAverage(n1, n2, n3, n4);
    const sum = n1 + n2 + n3 + n4;
    const media = sum / 4;
    return media;
  } catch (error) {
    return error.message;
  }
};

const checkName = (name) => {
  const letters = /[aA-zZ]+/;

  if (!name.match(letters)) {
    throw new Error('You must enter a valid name');
  }
};

const checkNumber = (number) => {
  if (isNaN(number)) {
    throw new Error('You must enter a number');
  }
};

const checkValidRange = (number) => {
  if (number < 1 || number > 10) {
    throw new Error('You must enter a number between 1 and 10');
  }
};

const checkPromo = (number) => {
  for (let index = 0; index < promo.length; index += 1) {
    if (number - 1 === index) {
      return promo[index];
    }
  }
};

const showPromo = (name, number) => {
  const firstText = document.querySelector('#text-initial');
  const secondText = document.querySelector('#text-final');

  try {
    checkName(name);
    checkNumber(parseInt(number));
    checkValidRange(number);

    const productObject = checkPromo(number);

    firstText.innerHTML = `Welcome, ${name}!`;
    secondText.innerHTML = `The promotion of the day is: 
    ${productObject.product} in the amount of BRL ${productObject.price}`;
  } catch (err) {
    secondText.innerHTML = err.message;
  }
};

button.addEventListener('click', () => {
  const name = document.querySelector('#name-id').value;
  const number = document.querySelector('#number-id').value;

  showPromo(name, number);
});

console.log(calculateAverage(5, 6, 7, '8'));
