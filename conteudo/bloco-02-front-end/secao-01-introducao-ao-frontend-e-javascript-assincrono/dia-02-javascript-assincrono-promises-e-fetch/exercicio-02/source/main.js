import Swal from 'sweetalert2';
import './styles/style.css';

const image = document.querySelector('#image');
const dogButton = document.querySelector('#dog-button');
const catButton = document.querySelector('#cat-button');
const surpriseButton = document.querySelector('#surprise-button');
const DOG_API = 'https://dog.ceo/api/breeds/image/random';
const CAT_API = 'https://aws.random.cat/meow';

dogButton.addEventListener('click', (event) => {
  event.preventDefault();

  fetch(DOG_API)
    .then((response) => response.json())
    .then(({ message }) => {
      image.src = message;
    })
    .catch(({ message }) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${message}`
      });
    });
});

catButton.addEventListener('click', (event) => {
  event.preventDefault();

  fetch(CAT_API)
    .then((response) => response.json())
    .then(({ file }) => {
      image.src = file;
    })
    .catch(({ message }) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${message}`
      });
    });
});

surpriseButton.addEventListener('click', (event) => {
  event.preventDefault();

  Promise.any([
    fetch(DOG_API),
    fetch(CAT_API)
  ])
    .then((response) => response.json())
    .then((data) => {
      const petImage = data.message || data.file;

      image.src = petImage;
    })
    .catch(({ message }) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${message}`
      });
    });
});
