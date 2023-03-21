function verificaPalindromo(string) {
  const reverseString = string.split('').reverse().join('');
 
  if (reverseString === string) {
    return true;
  }
  return false;
}

function indiceDoMaior(array) {
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

function indiceDoMenor(array) {
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

function maiorPalavra(array) {
  let higherString = array[0];
  
  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > higherString.length) {
      higherString = array[index];
    }
  }
  return higherString;
}

function criarDicionario(array) {
  let dictionary = {};
  
  for (let index = 0; index < array.length; index += 1) {
    if (!dictionary[array[index]]) {
      dictionary[array[index]] = {
        repetitions: 0,
      };
    } else {
      dictionary[array[index]].repetitions += 1;
    }
  }
  
  return dictionary;
}

function maisRepetido(array) {
  const dictionary = criarDicionario(array);
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

function somatorio(number) {
  let sum = 0;
  
  for (let index = 1; index <= number; index += 1) {
    sum += index;
  }
  
  if (number >= 0) {
    return sum;
  }
  
  return 'ERRO';
}

function verificaFimPalavra(palavra1, palavra2) {
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
