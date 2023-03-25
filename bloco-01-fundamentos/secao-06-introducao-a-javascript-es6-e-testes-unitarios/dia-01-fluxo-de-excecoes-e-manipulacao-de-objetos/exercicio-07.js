function verifyValues () {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;

  if (!value1 || !value2) {
    throw new Error('Preencha os campos para realizar a soma');
  }

  if (Number.isNaN(Number(value1)) || Number.isNaN(Number(value2))) {
    throw new Error('Informe dois números para realizar a soma');
  }
}

function sum () {
  const value1 = document.getElementById('value1');
  const value2 = document.getElementById('value2');
  const resultInput = document.getElementById('result');

  try {
    verifyValues();
    resultInput.innerHTML = `Resultado: ${Number(value1.value) + Number(value2.value)}`;
  } catch (error) {
    resultInput.innerHTML = `Resultado: ${error.message}`;
  } finally {
    value1.value = '';
    value2.value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');

  button.addEventListener('click', sum);
};
