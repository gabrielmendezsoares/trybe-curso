const createItem = (itemName, itemUnit, itemPrice, itemQuantity) => {
  if (typeof itemName !== 'string') {
    throw new Error('Item name must be a string');
  }

  if (itemPrice <= 0) {
    throw new Error('Item price must be greater than zero');
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
