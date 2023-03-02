let arrayNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayMultiplied = [];
let inputSymbol = '*';
let inputLine = '';
let inputLimit = 7;
let inputPosition = 9;
let centerMatrix = (inputLimit + 1) / 2;
let controlLeft = centerMatrix;
let controlRight = centerMatrix;

for (let index = 0; index < arrayNumbers.length; index += 1) { 
  if (index < (arrayNumbers.length - 1)) {
    arrayMultiplied.push(arrayNumbers[index] * arrayNumbers[index + 1]);
  } else {
    arrayMultiplied.push(arrayNumbers[index] * 2);
  }
}

for (let externalIndex = 1; externalIndex < arrayNumbers.length; externalIndex += 1) { 
  for (let internalIndex = 0; internalIndex < externalIndex; internalIndex += 1) {
    if (arrayNumbers[externalIndex] < arrayNumbers[internalIndex]) {
      let externalObject = arrayNumbers[externalIndex];
      arrayNumbers[externalIndex] = arrayNumbers[internalIndex];
      arrayNumbers[internalIndex] = externalObject;
    }
  }
}

for (let externalIndex = 1; externalIndex < arrayNumbers.length; externalIndex += 1) { 
  for (let internalIndex = 0; internalIndex < externalIndex; internalIndex += 1) {
    if (arrayNumbers[externalIndex] > arrayNumbers[internalIndex]) {
      let externalObject = arrayNumbers[externalIndex];
      arrayNumbers[externalIndex] = arrayNumbers[internalIndex];
      arrayNumbers[internalIndex] = externalObject;
    }
  }
}

for (let index = 0; index < inputLimit; index += 1) {
  inputLine = inputLine + inputSymbol;
}

for (let index = 0; index < inputLimit; index += 1) {
  console.log(inputLine);
}

for (let index = 0; index < inputLimit; index += 1) { 
  inputLine = inputLine + inputSymbol;
  console.log(inputLine);
}

for (let externalIndex = 0; externalIndex < inputLimit; externalIndex += 1) {
  for (let internalIndex = 0; internalIndex < inputLimit; internalIndex += 1) {
    if (internalIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + inputSymbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}

for (let externalIndex = 0; externalIndex <= centerMatrix; externalIndex += 1) {
  for (let internalIndex = 0; internalIndex <= inputLimit; internalIndex += 1) {
    if (internalIndex > controlLeft && internalIndex < controlRight) {
      inputLine = inputLine + inputSymbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
}

for (let externalIndex = 1; externalIndex <= centerMatrix; externalIndex += 1) {
  let outputLine = '';
  for (let internalIndex = 1; internalIndex <= inputLimit; internalIndex += 1) {
    if (internalIndex == controlLeft || internalIndex == controlRight || externalIndex == centerMatrix) {
      outputLine += inputSymbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}