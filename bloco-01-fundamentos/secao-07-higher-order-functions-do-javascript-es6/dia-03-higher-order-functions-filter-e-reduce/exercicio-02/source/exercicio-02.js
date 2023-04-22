const estudantes = require('../data/exercicio-02');
const getSubject = (accumulator, subject) => (subject.nota > accumulator.nota) ? subject : accumulator;

const getStudents = () => estudantes.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getSubject).name
}));

console.log(getStudents());
