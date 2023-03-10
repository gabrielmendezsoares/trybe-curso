let divisors = 1;
let numberToCheck = 31;

for (let index = 2; index <= numberToCheck; index += 1) {
  if (numberToCheck % index === 0) {
    divisors += 1;
  }
}

if (divisors === 2) {
  console.log(numberToCheck + ' é primo')
} else {
  console.log(numberToCheck + ' não é primo')
}
