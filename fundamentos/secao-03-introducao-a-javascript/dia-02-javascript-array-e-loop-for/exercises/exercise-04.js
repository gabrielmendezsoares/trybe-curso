let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let content = [];
let sum = 0;
let oddCount = 0;
let higherNumber = 0;
let lowerNumber = numbers[0];
let average;

for (let index = 0; index < numbers.length; index += 1) {
    const primaryElement = numbers[index];
    
    if (primaryElement % 2 !== 0) {
        oddCount += 1;
    };

    if (primaryElement > higherNumber) {
        higherNumber = primaryElement;
    };
    
    if (primaryElement < lowerNumber) {
        lowerNumber = primaryElement;
    };

    sum += primaryElement;
    console.log('Array [numbers] element: ' + primaryElement);
};

for (let index = 1; index <= 25; index += 1) {
    const element = content[index];
    content.push(index);
};

for (let index = 0; index < content.length; index += 1) {
    const element = content[index];
    const operation = element / 2;
    console.log('Array [content] operation result: ' + operation);
};

if (sum > 20) {
    console.log('Value greater than 20.');
} else if (sum < 20 & sum >= 0) {
    console.log('Value less than 20.');
} else if (sum === 20) {
    console.log('Valor equal to 20.');
} else {
    console.log('Invalid sum.');
};

if (oddCount > 0) {
    console.log('Odd values found: ' + oddCount);
} else if (oddCount === 0) {
    console.log('No odd value found.');
} else {
    console.log('Invalid count.');
};

average = sum / numbers.length;
console.log(' ');
console.log('----------[SUMMARY]----------');
console.log('Array [numbers]: ' + numbers);
console.log('Array [content]: ' + content);
console.log('Higher Number: ' + higherNumber);
console.log('Lower Number: ' + lowerNumber);
console.log('Sum result: ' + sum);
console.log('Average: ' + average);
console.log('Odd count: ' + oddCount);
