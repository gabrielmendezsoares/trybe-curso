const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const content = [];
let higherNumber = numbers[0];
let lowerNumber = numbers[0];
let evenCount = 0;
let oddCount = 0;
let sum = 0;
let average = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 0) {
    evenCount += 1;
  }
  if (numbers[index] % 2 !== 0) {
    oddCount += 1;
  }
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
  if (numbers[index] < lowerNumber) {
    lowerNumber = numbers[index];
  }

  sum += numbers[index];
  console.log('Elemento Número: ' + numbers[index]);
}

for (let index = 1; index <= 20; index += 1) {
  content.push(index);
}

for (let index = 0; index < content.length; index += 1) {
  const operation = content[index] / 2;
  console.log('Resultado Divisão: ' + operation);
}

if (evenCount > 0) {
  console.log('Valores pares achados: ' + evenCount);
} else if (evenCount === 0) {
  console.log('Nenhum valor par achado.');
} else {
  console.log('Erro, valor inválido!');
}

if (oddCount > 0) {
  console.log('Valores ímpares achados: ' + oddCount);
} else if (oddCount === 0) {
  console.log('Nenhum valor ímpar achado.');
} else {
  console.log('Erro, valor inválido!');
}

if (sum >= 0) {
  if (sum > 10) {
    console.log('A soma total é maior que 10.');
  } else if (sum < 10) {
    console.log('A soma total é menor que 10.');
  } else if (sum === 10) {
    console.log('A soma total é igual a 10.');
  } else if (sum === 0) {
    console.log('A soma total é igual a 0.');
  }
} else {
  console.log('A soma total é negativa.');
}

average = sum / numbers.length;
console.log(' ');
console.log('----------[SUMÁRIO]----------');
console.log(' ');
console.log('Array [numbers]: ' + numbers);
console.log('Array [content]: ' + content);
console.log('Maior Número: ' + higherNumber);
console.log('Menor Número: ' + lowerNumber);
console.log('Pares: ' + evenCount);
console.log('Ímpares: ' + oddCount);
console.log('Soma Total: ' + sum);
console.log('Média: ' + average);
