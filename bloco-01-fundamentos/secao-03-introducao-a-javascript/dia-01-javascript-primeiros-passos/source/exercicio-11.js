const grade = 100;
let gradeStatus;

if (grade >= 0 && grade <= 100) {
  switch (Math.floor(grade / 10)) {
    case 10:
      gradeStatus = 'A+';
      break;

    case 9:
      gradeStatus = 'A';
      break;

    case 8:
      gradeStatus = 'B';
      break;

    case 7:
      gradeStatus = 'C';
      break;

    case 6:
      gradeStatus = 'D';
      break;

    case 5:
      gradeStatus = 'E';
      break;

    default:
      gradeStatus = 'F';
  }
} else {
  throw new Error('Invalid information');
}

console.log(`Grade: ${gradeStatus}`);
