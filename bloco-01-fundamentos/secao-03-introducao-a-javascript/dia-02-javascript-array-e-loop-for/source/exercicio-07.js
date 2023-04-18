let divisors = 1;
const numberToCheck = 31;

for (let index = 2; index <= numberToCheck; index += 1) {
  if (numberToCheck % index === 0) {
    divisors += 1;
  }
}

if (divisors === 2) {
  console.log(numberToCheck + ' is cousin');
} else {
  console.log(numberToCheck + ' its not cousin');
}
