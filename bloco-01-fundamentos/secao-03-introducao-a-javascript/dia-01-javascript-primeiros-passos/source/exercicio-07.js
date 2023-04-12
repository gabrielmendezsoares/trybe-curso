const valueA = 10;
const valueB = 20;
const valueC = 30;

if (valueA > valueB && valueA > valueC) {
  console.log('The "A" value is greater than "B" and "C" value.');
} else if (valueB > valueA && valueB > valueC) {
  console.log('The "B" value is greater than the "A" and "C" value.');
} else if (valueC > valueA && valueC > valueB) {
  console.log('The "C" value is greater than the "A" and "B" value.');
} else {
  console.log('Invalid information');
}
