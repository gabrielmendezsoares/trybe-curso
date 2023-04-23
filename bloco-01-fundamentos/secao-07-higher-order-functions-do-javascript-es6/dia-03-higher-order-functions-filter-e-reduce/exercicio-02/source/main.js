const students = require('../data/students');
const getSubject = (accumulator, subject) => (subject.nota > accumulator.nota) ? subject : accumulator;

const getStudents = () => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getSubject).name
}));

console.log(getStudents());
