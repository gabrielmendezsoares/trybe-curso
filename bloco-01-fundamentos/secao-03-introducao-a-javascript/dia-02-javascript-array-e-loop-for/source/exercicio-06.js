const arrayNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const arrayMultiplied = [];
const inputFormat = 'Quadrado';
const inputSymbol = '*';
const bubbleSort = '+';

for (let index = 0; index < arrayNumbers.length; index += 1) {
  if (index < (arrayNumbers.length - 1)) {
    arrayMultiplied.push(arrayNumbers[index] * arrayNumbers[index + 1]);
  } else {
    arrayMultiplied.push(arrayNumbers[index] * 2);
  }
}

if (bubbleSort === '+') {
  for (let externalIndex = 1; externalIndex < arrayNumbers.length; externalIndex += 1) {
    for (let internalIndex = 0; internalIndex < externalIndex; internalIndex += 1) {
      if (arrayNumbers[externalIndex] < arrayNumbers[internalIndex]) {
        const externalObject = arrayNumbers[externalIndex];

        arrayNumbers[externalIndex] = arrayNumbers[internalIndex];
        arrayNumbers[internalIndex] = externalObject;
      }
    }
  }

  console.log('Números: ' + arrayNumbers);
} else if (bubbleSort === '-') {
  for (let externalIndex = 1; externalIndex < arrayNumbers.length; externalIndex += 1) {
    for (let internalIndex = 0; internalIndex < externalIndex; internalIndex += 1) {
      if (arrayNumbers[externalIndex] > arrayNumbers[internalIndex]) {
        const externalObject = arrayNumbers[externalIndex];

        arrayNumbers[externalIndex] = arrayNumbers[internalIndex];
        arrayNumbers[internalIndex] = externalObject;
      }
    }
  }

  console.log('Números: ' + arrayNumbers);
}

if (inputFormat === 'Quadrado') {
  let inputLine = '';
  const inputLimit = 25;

  for (let index = 0; index < inputLimit; index += 1) {
    inputLine += inputSymbol;
  }

  for (let index = 0; index < inputLimit; index += 1) {
    console.log(inputLine);
  }
} else if (inputFormat === 'Triângulo Retângulo Esquerdo') {
  let inputLine = '';
  const inputLimit = 25;

  for (let index = 0; index < inputLimit; index += 1) {
    inputLine += inputSymbol;
    console.log(inputLine);
  }
} else if (inputFormat === 'Triângulo Retângulo Direito') {
  let inputLine = '';
  const inputLimit = 25;
  let inputPosition = inputLimit - 1;

  for (let externalIndex = 0; externalIndex < inputLimit; externalIndex += 1) {
    for (let internalIndex = 0; internalIndex < inputLimit; internalIndex += 1) {
      if (internalIndex < inputPosition) {
        inputLine += ' ';
      } else {
        inputLine += inputSymbol;
      }
    }

    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
  }
} else if (inputFormat === 'Triângulo Equilátero Interno') {
  let inputLine = '';
  const inputLimit = 25;
  const inputMatrix = (inputLimit + 1) / 2;
  let controlLeft = inputMatrix - 1;
  let controlRight = inputMatrix + 1;

  for (let externalIndex = 1; externalIndex <= inputMatrix; externalIndex += 1) {
    inputLine = '';

    for (let internalIndex = 1; internalIndex <= inputLimit; internalIndex += 1) {
      if (internalIndex > controlLeft && internalIndex < controlRight) {
        inputLine += inputSymbol;
      } else {
        inputLine += ' ';
      }
    }

    controlLeft -= 1;
    controlRight += 1;
    console.log(inputLine);
  }
} else if (inputFormat === 'Triângulo Equilátero Externo') {
  let inputLine = '';
  const inputLimit = 25;
  const inputMatrix = (inputLimit + 1) / 2;
  let controlLeft = inputMatrix;
  let controlRight = inputMatrix;

  for (let externalIndex = 1; externalIndex <= inputMatrix; externalIndex += 1) {
    inputLine = '';

    for (let internalIndex = 1; internalIndex <= inputLimit; internalIndex += 1) {
      if (internalIndex === controlLeft || internalIndex === controlRight || externalIndex === inputMatrix) {
        inputLine += inputSymbol;
      } else {
        inputLine += ' ';
      }
    }

    controlLeft -= 1;
    controlRight += 1;
    console.log(inputLine);
  }
}
