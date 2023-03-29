const valueA = 10;
const valueB = 20;
const valueC = 30;

if (valueA > valueB && valueA > valueC) {
  console.log('O valor "A" é maior que o valor "B" e "C".');
} else if (valueB > valueA && valueB > valueC) {
  console.log('O valor "B" é maior que o valor "A" e "C".');
} else if (valueC > valueA && valueC > valueB) {
  console.log('O valor "C" é maior que o valor "A" e "B".');
} else {
  console.log('Erro, valor inválido!');
}
