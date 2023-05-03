const validateInfo = (name, age) => {
  if (!name || !age) {
    throw new Error('All information is required');
  }
};

const validateLegalAge = (age) => {
  if (age < 18) {
    throw new Error('Oops, unfortunately at this moment you can\'t take the classes');
  }
};

const studentRegister = (name, age) => {
  try {
    validateInfo(name, age);
    validateLegalAge(age);
    return `${name}, welcome to AuTer!`;
  } catch (error) {
    return error.message;
  }
};

console.log(studentRegister('Carlos', 18));
console.log(studentRegister('Carlos', 12));
console.log(studentRegister('Renan'));
