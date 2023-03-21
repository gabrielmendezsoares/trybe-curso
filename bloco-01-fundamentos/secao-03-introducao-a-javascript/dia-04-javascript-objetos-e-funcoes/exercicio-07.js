const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanConverter(string) {
  string = string.toUpperCase();
  let totalLength = string.length;
  let totalSum = romanNumerals[string[totalLength - 1]];
  let currentElement = romanNumerals[string[totalLength - 1]];
  
  for (let index = 2; index <= totalLength; index += 1) {
    let nextElement = romanNumerals[string[totalLength - index]];
    
    if (currentElement <= nextElement) {
      totalSum += nextElement;
    } else {
      totalSum -= nextElement;
    }
    
    currentElement = nextElement;
  }
  
  return totalSum;
}

console.log(romanConverter('MMXVIII'));
