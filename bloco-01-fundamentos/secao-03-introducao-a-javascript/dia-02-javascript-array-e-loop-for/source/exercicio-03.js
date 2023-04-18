const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const content = [];
let higherNumber = numbers[0];
let lowerNumber = numbers[0];
let evenCount = 0;
let oddCount = 0;
let sum = 0;
let average = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 0) {
    evenCount += 1;
  }
  if (numbers[index] % 2 !== 0) {
    oddCount += 1;
  }
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
  if (numbers[index] < lowerNumber) {
    lowerNumber = numbers[index];
  }

  sum += numbers[index];
  console.log('Element number: ' + numbers[index]);
}

for (let index = 1; index <= 20; index += 1) {
  content.push(index);
}

for (let index = 0; index < content.length; index += 1) {
  const operation = content[index] / 2;
  console.log('Division result: ' + operation);
}

if (evenCount > 0) {
  console.log('Even values: ' + evenCount);
} else if (evenCount === 0) {
  console.log('No even value found');
} else {
  console.log('Invalid information');
}

if (oddCount > 0) {
  console.log('Odd values: ' + oddCount);
} else if (oddCount === 0) {
  console.log('No odd value found');
} else {
  console.log('Invalid information');
}

if (sum >= 0) {
  if (sum > 10) {
    console.log('+ 10');
  } else if (sum < 10) {
    console.log('- 10');
  } else if (sum === 10) {
    console.log('10');
  } else if (sum === 0) {
    console.log('0');
  }
} else {
  console.log('Total sum is negative');
}

average = sum / numbers.length;
console.log('Array [numbers]: ' + numbers);
console.log('Array [content]: ' + content);
console.log('Highest number: ' + higherNumber);
console.log('Lowest number: ' + lowerNumber);
console.log('Even: ' + evenCount);
console.log('Odd: ' + oddCount);
console.log('Total sum: ' + sum);
console.log('Average: ' + average);
