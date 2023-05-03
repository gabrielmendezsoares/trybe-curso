const toggleState = (state) => {
  const status = (state === 'off')
    ? 'on'
    : 'off';

  console.log(`Status: ${status}`);
  return status;
};

const circleArea = (radius) => {
  const pi = 3.14;
  const area = pi * (radius * radius);
  const message = (typeof radius === 'number')
    ? `Circle area: ${area}`
    : 'Radius must be a number';

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

toggleState('off');
circleArea(30);
longestWord('Longest word');
longestWordSort('Longest word');
