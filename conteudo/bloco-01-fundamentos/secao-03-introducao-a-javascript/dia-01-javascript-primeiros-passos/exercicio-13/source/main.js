const purchasePrice = 10;
const salePrice = 20;
const percentage = 0.08;
const quantity = 1000;

if (purchasePrice < 0 || salePrice < 0) {
  throw new Error('Invalid information');
}

const costValue = purchasePrice + (purchasePrice * percentage);
const profitValue = (salePrice - costValue) * quantity;

console.log(`Profit: ${profitValue}`);
