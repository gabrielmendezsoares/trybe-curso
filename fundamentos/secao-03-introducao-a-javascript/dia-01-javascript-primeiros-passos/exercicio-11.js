const grade = 100;
let gradeStatus;

if (grade >= 0 && grade <= 100) {
  if (grade >= 90) {
    gradeStatus = 'A';
  } else if (grade >= 80) {
    gradeStatus = 'B';
  } else if (grade >= 70) {
    gradeStatus = 'C';
  } else if (grade >= 60) {
    gradeStatus = 'D';
  } else if (grade >= 50) {
    gradeStatus = 'E';
  } else if (grade < 50) {
    gradeStatus = 'F';
  } else {
    console.log('Erro, nota inválida!');
  }
} else {
  console.log('Erro, nota inválida!');
}

console.log('Status Nota: ' + gradeStatus);
