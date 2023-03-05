const valueA = 10;
const valueB = 20;
const valueC = 30;
let valueStatus;

if (valueA % 2 !== 0 || valueB % 2 !== 0 || valueC % 2 !== 0) {
  valueStatus = 'Ímpar';
} else if (valueA % 2 === 0 || valueB % 2 === 0 || valueC % 2 === 0) {
  valueStatus = 'Par';
}

console.log('Status Valor: ' + valueStatus);
