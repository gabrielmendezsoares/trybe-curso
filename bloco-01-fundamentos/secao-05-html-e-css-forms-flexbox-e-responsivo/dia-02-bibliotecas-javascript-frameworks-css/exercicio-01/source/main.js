const validate = new JustValidate(
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

const picker = new Pikaday({
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
      errorMessage: 'Name is required.'
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'Limit 40 characters.'
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Minimum 10 character.'
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required.'
    },
    {
      rule: 'email',
      errorMessage: 'Email is not valid.'
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'Limit is 50 characters.'
    }
  ])
  .addField('#why', [
    {
      rule: 'required',
      errorMessage: 'Answer is required.'
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'Limit is 500 character'
    }
  ])
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'Date is required.'
    }
  ]);

window.onload = function () {
  const clearBtn = document.querySelector('#clear-btn');
  const agreement = document.querySelector('#agreement');

  console.log(picker);
  clearBtn.addEventListener('click', clearFields);
  agreement.addEventListener('change', enableSubmit);
};
