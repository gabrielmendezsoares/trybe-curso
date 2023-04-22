const textInput = document.getElementById('c-text');
const generateButton = document.getElementById('c-create');
const textParagraph = document.getElementById('c-generated');
const counterParagraph = document.getElementById('c-counter');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

const randomizeClasses = (event) => {
  const randomStyle = styleGroup[Math.floor(Math.random() * styleGroup.length)];
  const randomSize = sizeGroup[Math.floor(Math.random() * sizeGroup.length)];
  const randomRotation = rotationGroup[Math.floor(Math.random() * rotationGroup.length)];
  const randomInclination = inclinationGroup[Math.floor(Math.random() * inclinationGroup.length)];
  const randomizedClasses = `${randomStyle} ${randomSize} ${randomRotation} ${randomInclination}`;

  if (event) {
    const eventTarget = event.target;
    eventTarget.className = randomizedClasses;
    return;
  }

  return randomizedClasses;
};

const connectSpans = () => {
  const spanElements = document.querySelectorAll('span');

  for (let index = 0; index < spanElements.length; index += 1) {
    spanElements[index].addEventListener('click', randomizeClasses);
  }
};

generateButton.addEventListener('click', () => {
  if (!textInput.value.trim()) {
    textParagraph.innerHTML = 'Enter something.';
    counterParagraph.innerHTML = 0;
    return;
  }

  const wordArray = textInput.value.split(' ');

  for (let index = 0; index < wordArray.length; index += 1) {
    wordArray[index] = `<span class="${randomizeClasses()}">${wordArray[index]}</span>`;
  }

  const word = wordArray.join(' ');

  textParagraph.innerHTML = word;
  counterParagraph.innerHTML = wordArray.length;
  connectSpans();
});
