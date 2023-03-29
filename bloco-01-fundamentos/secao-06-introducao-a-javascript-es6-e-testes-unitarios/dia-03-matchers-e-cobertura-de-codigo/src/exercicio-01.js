const createItem = (itemName, itemUnit, itemPrice, itemQuantity) => {
  if (typeof itemName !== 'string') {
    throw new Error('O nome do item deve ser uma string');
  }

  if (itemPrice <= 0) {
    throw new Error('O preço do item deve ser maior que zero');
  }

  if (itemQuantity === undefined) {
    itemQuantity = 0;
  }

  return {
    name: itemName,
    quantity: itemQuantity,
    unit: itemUnit,
    price: itemPrice
  };
};

module.exports = createItem;
