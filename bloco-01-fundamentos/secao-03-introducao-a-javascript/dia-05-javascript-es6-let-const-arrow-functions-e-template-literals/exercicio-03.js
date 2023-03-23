const ligarDesligar = (state) => {
  const status = (state === 'desligado')
    ? 'ligado'
    : 'desligado';

  console.log(`O motor está ${status}`);
  return status;
};

const circleArea = (radius) => {
  const pi = 3.14;
  const area = pi * (radius * radius);
  const message = (typeof radius === 'number')
    ? `Essa é a área do círculo: ${area}`
    : 'O parâmetro radius deve ser um número';

  return message;
};

const longestWord = (word) => {
  const wordsArray = word.split(' ');
  let higherWord = wordsArray[0];

  for (const iterator of wordsArray) {
    if (iterator.length > higherWord.length) {
      higherWord = iterator;
    }
  }

  return higherWord;
};

const longestWordSort = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

ligarDesligar('desligado');
circleArea(30);
longestWord('Essa é a minha maior palavra');
longestWordSort('Essa é a minha maior palavra');
