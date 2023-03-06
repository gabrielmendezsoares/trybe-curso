let array = ['java', 'javascript', 'python', 'html', 'css'];
let higherElement = array[0];
let lowerElement = array[0];
let biggestPrimeNumber = 0;

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > higherElement.length) {
    higherElement = array[index];
  }
  if (array[index].length < lowerElement.length) {
    lowerElement = array[index];
  }
}

for (let currentNumber = 50; currentNumber >= 2; currentNumber -= 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
    break;
  }
}

console.log(biggestPrimeNumber);
console.log(higherElement);
console.log(lowerElement);
