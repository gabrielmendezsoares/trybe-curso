import data from '../data/students.js';

const getSubject = (accumulator, subject) => (subject.nota > accumulator.nota) ? subject : accumulator;

const getStudents = () => data.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getSubject).name
}));

console.log(getStudents());
