const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});

function addKey(object, key, value) {
  object[key] = value;
}

function getKeys(object) {
  return Object.keys(object);
}

function getValues(object) {
  return Object.values(object);
}

function getLength(object) {
  return Object.keys(object).length;
}

function getNumberOfStudents(obj) {
  let total = 0;
  let keys = Object.keys(obj);
  
  for (index in keys) {
    total += obj[keys[index]].numeroEstudantes;
  }
  
  return total;
}

console.log(getNumberOfStudents(allLessons));

function verifyPair(obj, key, value) {
  let entries = Object.entries(obj);
  let isEqual = false;
  
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) {
      isEqual = true;
    }
  }
  
  return isEqual;
}

console.log(verifyPair(lesson2, 'professor', 'Carlos'));

function getNumberOfStudentsMath(obj) {
  let total = 0;
  let keys = Object.keys(obj);
  
  for (index in keys) {
    if (obj[keys[index]].materia === 'Matemática') {
      total += obj[keys[index]].numeroEstudantes;
    }
  }
  
  return total;
}

console.log(getNumberOfStudentsMath(allLessons));

function getInfo(obj, name) {
  let allLessons = [];
  let numberStudents = 0;
  let values = Object.values(obj);
  
  for (index in values) {
    if (values[index].professor === name) {
      allLessons.push(values[index].materia)
      numberStudents += values[index].numeroEstudantes;
    }
  }
  
  return {
    aulas: allLessons, estudantes: numberStudents
  };
}

function createReport(allLessons, name) {
  let report = {};
  
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));
