import Swal from 'sweetalert2';
import './styles/style.css';

const image = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const randomId = Math.floor(Math.random() * 1000);
  const ID_API = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomId}.json`;

  fetch(ID_API)
    .then((response) => response.json())
    .then(({ name: heroName, images: { md } }) => {
      image.src = md;
      name.innerHTML = `<em>${heroName}</em>`;
    })
    .catch(({ message }) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${message}`
      });
    });
});
