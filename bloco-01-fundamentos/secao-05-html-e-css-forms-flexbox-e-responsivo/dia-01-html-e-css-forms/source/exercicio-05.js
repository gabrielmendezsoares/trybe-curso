window.onload = () => {
  const agreement = document.getElementById('agreement');
  const submit = document.getElementById('submit-btn');

  agreement.addEventListener('change', () => {
    if (!agreement.checked) {
      submit.setAttribute('disabled', 'disabled');
    } else if (agreement.checked) {
      submit.removeAttribute('disabled');
    }
  });

  submit.addEventListener('click', (event) => {
    event.preventDefault();
  });
};
