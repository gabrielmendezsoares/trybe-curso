function verifyValues () {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;

  if (!value1 || !value2) {
    throw new Error('Fill in the fields to perform the sum');
  }

  if (Number.isNaN(Number(value1)) || Number.isNaN(Number(value2))) {
    throw new Error('Enter two numbers to add');
  }
}

function sum () {
  const value1 = document.getElementById('value1');
  const value2 = document.getElementById('value2');
  const resultInput = document.getElementById('result');

  try {
    verifyValues();
    resultInput.innerHTML = `Result: ${Number(value1.value) + Number(value2.value)}`;
  } catch (error) {
    resultInput.innerHTML = `Result: ${error.message}`;
  } finally {
    value1.value = '';
    value2.value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');

  button.addEventListener('click', sum);
};
