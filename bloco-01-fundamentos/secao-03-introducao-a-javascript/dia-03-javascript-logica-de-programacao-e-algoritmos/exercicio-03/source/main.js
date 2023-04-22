function verifyPalindrome (string) {
  const reverseString = string.split('').reverse().join('');

  if (reverseString === string) {
    return true;
  }

  return false;
}

function indexOfHighest (array) {
  let higherElement = array[0];
  let higherIndex = 0;

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > higherElement) {
      higherElement = array[index];
      higherIndex = array.indexOf(array[index]);
    }
  }

  return higherIndex;
}

function indexOfLowest (array) {
  let lowerElement = array[0];
  let lowerIndex = 0;

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < lowerElement) {
      lowerElement = array[index];
      lowerIndex = array.indexOf(array[index]);
    }
  }

  return lowerIndex;
}

function biggestWord (array) {
  let higherString = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > higherString.length) {
      higherString = array[index];
    }
  }

  return higherString;
}

function createDictionary (array) {
  const dictionary = {};

  for (let index = 0; index < array.length; index += 1) {
    if (!dictionary[array[index]]) {
      dictionary[array[index]] = {
        repetitions: 0
      };
    } else {
      dictionary[array[index]].repetitions += 1;
    }
  }

  return dictionary;
}

function mostRepeated (array) {
  const dictionary = createDictionary(array);
  let mostRepeated = 0;
  let highestScore = 0;

  for (const key in dictionary) {
    if (dictionary[key].repetitions > highestScore) {
      mostRepeated = Number(key);
      highestScore = dictionary[key].repetitions;
    }
  }

  return mostRepeated;
}

function sum (number) {
  let sum = 0;

  for (let index = 1; index <= number; index += 1) {
    sum += index;
  }

  if (number >= 0) {
    return sum;
  }

  return 'Invalid information';
}

function verifyWordEnd (palavra1, palavra2) {
  const indexPosition = palavra1.length - palavra2.length;
  let stringWord = '';

  if (indexPosition >= 0) {
    for (let index = indexPosition; index < palavra1.length; index += 1) {
      stringWord += palavra1[index];
    }
  }

  if (stringWord === palavra2) {
    return true;
  }

  return false;
}

verifyPalindrome('arara');
indexOfHighest([1, 3, 5, 7, 9, 11]);
indexOfLowest([1, 3, 5, 7, 9, 11]);
biggestWord(['Anna', 'João', 'Gabriel']);
mostRepeated([1, 3, 5, 7, 9, 11, 1]);
sum(10);
verifyWordEnd('João', 'ão');
