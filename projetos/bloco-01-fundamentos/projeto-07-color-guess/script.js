const generateRandomColor = (array) => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = `rgb(${red}, ${green}, ${blue})`;

  while (array.includes(color)) {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    color = `rgb(${red}, ${green}, ${blue})`;
  }

  return color;
};

const generateRandomPalette = () => {
  const colorArray = [];

  while (colorArray.length !== 6) {
    const color = generateRandomColor(colorArray);

    colorArray.push(color);
  }

  return colorArray;
};

const playTurn = (event) => {
  const score = document.getElementById('score');
  const colorDisplay = document.getElementById('rgb-color');
  const answer = document.getElementById('answer');
  const ballElements = document.querySelectorAll('.ball');

  if (colorDisplay.innerText === event.target.style.backgroundColor) {
    const scoreNumber = Number(score.innerText);

    score.innerHTML = scoreNumber + 3;
    answer.innerHTML = 'Acertou!';
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }

  for (let index = 0; index < 6; index += 1) {
    ballElements[index].removeEventListener('click', playTurn);
  }
};

const generateGame = () => {
  const colorDisplay = document.getElementById('rgb-color');
  const answer = document.getElementById('answer');
  const ballElements = document.querySelectorAll('.ball');
  const randomPalette = generateRandomPalette();

  colorDisplay.innerHTML = randomPalette[Math.floor(Math.random() * 6)];
  answer.innerHTML = 'Escolha uma cor';

  for (let index = 0; index < 6; index += 1) {
    ballElements[index].style.backgroundColor = randomPalette[index];
    ballElements[index].addEventListener('click', playTurn);
  }
};

window.onload = () => {
  const resetButton = document.getElementById('reset-game');

  resetButton.addEventListener('click', generateGame);
  generateGame();
};
