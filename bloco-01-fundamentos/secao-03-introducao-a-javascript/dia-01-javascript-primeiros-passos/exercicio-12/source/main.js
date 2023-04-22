const valueA = 10;
const valueB = 20;
const valueC = 30;

let valueStatus = 'Odd';

if ([valueA, valueB, valueC].some((value) => value % 2 !== 0)) {
  valueStatus = 'Odd';
} else {
  valueStatus = 'Even';
}

console.log(`Value: ${valueStatus}`);
