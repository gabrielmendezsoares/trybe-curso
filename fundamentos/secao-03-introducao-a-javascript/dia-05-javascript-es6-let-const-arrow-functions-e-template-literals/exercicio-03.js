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
  let wordsArray = word.split(' ');
  let higherWord = wordsArray[0];
  for (const iterator of wordsArray) {
    if (iterator.length > higherWord.length) {
      higherWord = iterator;
    }
  }
  return higherWord;
};
