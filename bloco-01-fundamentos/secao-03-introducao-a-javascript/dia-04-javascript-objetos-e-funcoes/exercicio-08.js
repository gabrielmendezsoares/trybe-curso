const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];
const evenValues = [];
const oddValues = [];

function arrayOfNumbers(vector) {
  for (let externalIndex = 0; externalIndex < vector.length; externalIndex += 1) {
    for (let internalIndex = 0; internalIndex < vector[externalIndex].length; internalIndex += 1) {
      if (vector[externalIndex][internalIndex] % 2 === 0) {
        evenValues.push(vector[externalIndex][internalIndex]);
      } else {
        oddValues.push(vector[externalIndex][internalIndex]);
      }
    }
  }
}

arrayOfNumbers(vector);
console.log(`Even Values: ${evenValues.join(', ')}`);
console.log(`Odd Values: ${oddValues.join(', ')}`);
