const valueA = 10;
const valueB = 20;
const valueC = 30;

if (a > b && a > c) {
  console.log('O valor "A" é maior que o valor "B" e "C".');
} else if (b > a && b > c) {
  console.log('O valor "B" é maior que o valor "A" e "C".');
} else if (c > a && c > b) {
  console.log('O valor "C" é maior que o valor "A" e "B".');
} else {
  console.log('Erro, valor inválido!');
}
