let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestPrimeNumber = 0;
let higherElement = array[0];
let lowerElement = array[0];

for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    
    if (element.length > higherElement.length) {
        higherElement = element;
    };

    if (element.length < lowerElement.length) {
        lowerElement = element;
    };
};

for (let currentNumber = 50; currentNumber >= 2; currentNumber -= 1) {
    let isPrime = true;

    for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
        if (currentNumber % currentDivisor === 0) {
            isPrime = false;
        };
    };
 
    if (isPrime) {
    biggestPrimeNumber = currentNumber;
    break;
    };
};

console.log(biggestPrimeNumber);
console.log(higherElement);
console.log(lowerElement);

