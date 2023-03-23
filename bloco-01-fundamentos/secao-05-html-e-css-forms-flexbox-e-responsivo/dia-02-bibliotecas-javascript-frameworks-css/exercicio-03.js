const validate = new JustValidate (
  '#form',
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red'
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined'
    },
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top'
    }
  }
);

function clearFields () {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');

  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];

    userInput.value = '';
    userInput.checked = false;
  }

  textArea.value = '';
};

function enableSubmit () {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');

  submitBtn.disabled = !agreement.checked;
}

const picker = new Pikaday ({
  field: document.getElementById('date'),
  format: 'D/M/YYYY',

  toString (date, format) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  },
  parse (dateString, format) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    return new Date(year, month, day);
  }
});

validate
  .addField('#fullName', [
    {
      rule: 'required',
      errorMessage: 'O campo de nome é obrigatório.'
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O limite é de 40 caracteres.'
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'O mínimo é de 10 caracteres.'
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'O campo de email é obrigatório.'
    },
    {
      rule: 'email',
      errorMessage: 'O email digitado não é válido.'
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O limite é de 50 caracteres.'
    }
  ])
  .addField('#why', [
    {
      rule: 'required',
      errorMessage: 'O campo de resposta é obrigatório.'
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'O limite é de 500 caracteres'
    }
  ])
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'O campo de data é obrigatório.'
    }
  ]);

window.onload = function () {
  const clearBtn = document.querySelector('#clear-btn');
  const agreement = document.querySelector('#agreement');

  clearBtn.addEventListener('click', clearFields);
  agreement.addEventListener('change', enableSubmit);
};
