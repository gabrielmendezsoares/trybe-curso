const textInput = document.querySelector('#text-input');
const fileInput = document.querySelector('#meme-insert');
const containerHandler = document.querySelector('#meme-image-container');
const imageHandler = document.querySelector('#meme-image');
const textHandler = document.querySelector('#meme-text');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');
const firstImg = document.querySelector('#meme-1');
const secondImg = document.querySelector('#meme-2');
const thirdImg = document.querySelector('#meme-3');
const fourthImg = document.querySelector('#meme-4');

textInput.addEventListener('input', () => {
  textHandler.innerHTML = textInput.value;
});

fileInput.addEventListener('change', () => {
  const uploadedFile = fileInput.files[0];
  const fileReader = new FileReader();

  fileReader.onload = () => {
    imageHandler.src = fileReader.result;
  };

  fileReader.readAsDataURL(uploadedFile);
});

fireButton.addEventListener('click', () => {
  containerHandler.style.border = '3px dashed red';
});

waterButton.addEventListener('click', () => {
  containerHandler.style.border = '5px double blue';
});

earthButton.addEventListener('click', () => {
  containerHandler.style.border = '6px groove rgb(0, 128, 0)';
});

firstImg.addEventListener('click', () => {
  imageHandler.src = firstImg.src;
  containerHandler.style.display = 'block';
});

secondImg.addEventListener('click', () => {
  imageHandler.src = secondImg.src;
  containerHandler.style.display = 'block';
});

thirdImg.addEventListener('click', () => {
  imageHandler.src = thirdImg.src;
  containerHandler.style.display = 'block';
});

fourthImg.addEventListener('click', () => {
  imageHandler.src = fourthImg.src;
  containerHandler.style.display = 'block';
});
