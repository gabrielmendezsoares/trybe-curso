let word = 'tryber';
let reverseWordLoop = '';
let reverseWordMethod = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
    const element = word[index];
    reverseWordLoop += element;
};

reverseWordMethod = word.split('').reverse().join('');
console.log(reverseWordLoop);
console.log(reverseWordMethod);
