const purchasePrice = 10;
const salePrice = 20;
const percentage = 0.08;
const quantity = 1000;

if (purchasePrice >= 0 && salePrice >= 0) {
  const taxValue = purchasePrice * percentage;
  const costValue = purchasePrice + taxValue;
  const profitValue = (salePrice - costValue) * quantity;
  console.log(profitValue);
} else {
  console.log('Erro, valor inválido!');
}
