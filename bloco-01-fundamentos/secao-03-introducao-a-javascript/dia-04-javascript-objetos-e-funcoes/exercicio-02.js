const student = {};
const nameKey = 'name';
const emailKey = 'email';
const phoneKey = 'phone';
const githubKey = 'github';
const linkedinKey = 'linkedin';
const nameValue = 'Gabriel';
const emailValue = 'gabrielmendezsoares@gmail.com';
const phoneValue = '+55 (62) 99332-7201';
const githubValue = 'https://github.com/gabrielmendezsoares';
const linkedinValue = 'https://www.linkedin.com/in/gabriel-mendez-soares';

function addProperty (key, value) {
  student[key] = value;
}

addProperty(student, nameKey, nameValue);
addProperty(student, emailKey, emailValue);
addProperty(student, phoneKey, phoneValue);
addProperty(student, githubKey, githubValue);
addProperty(student, linkedinKey, linkedinValue);
console.table(student);
