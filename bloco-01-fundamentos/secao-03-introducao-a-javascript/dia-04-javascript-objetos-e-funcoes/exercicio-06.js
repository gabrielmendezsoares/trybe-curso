const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã'
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos'
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite'
};

const allLessons = Object.assign({}, {
  lessonN1: lesson1,
  lessonN2: lesson2,
  lessonN3: lesson3
});

function addKey (object, key, value) {
  object[key] = value;
}

function getKeys (object) {
  return Object.keys(object);
}

function getValues (object) {
  return Object.values(object);
}

function getLength (object) {
  return Object.keys(object).length;
}

function getNumberOfStudents (obj) {
  let total = 0;
  const keys = Object.keys(obj);

  for (const index in keys) {
    total += obj[keys[index]].numeroEstudantes;
  }

  return total;
}

function verifyPair (obj, key, value) {
  const entries = Object.entries(obj);
  let isEqual = false;

  for (const index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) {
      isEqual = true;
    }
  }

  return isEqual;
}

function getNumberOfStudentsMath (obj) {
  let total = 0;
  const keys = Object.keys(obj);

  for (const index in keys) {
    if (obj[keys[index]].materia === 'Matemática') {
      total += obj[keys[index]].numeroEstudantes;
    }
  }

  return total;
}

function getInfo (obj, name) {
  const allLessons = [];
  let numberStudents = 0;
  const values = Object.values(obj);

  for (const index in values) {
    if (values[index].professor === name) {
      allLessons.push(values[index].materia);
      numberStudents += values[index].numeroEstudantes;
    }
  }

  return {
    aulas: allLessons, estudantes: numberStudents
  };
}

function createReport (allLessons, name) {
  const report = {};

  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}

addKey(lesson2, 'turno', 'tarde');
getKeys(lesson1);
getValues(lesson1);
getLength(lesson1);
console.log(getNumberOfStudents(allLessons));
console.log(verifyPair(lesson2, 'professor', 'Carlos'));
console.log(getNumberOfStudentsMath(allLessons));
console.log(createReport(allLessons, 'Maria Clara'));
