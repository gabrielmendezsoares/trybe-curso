const lesson1 = {
  subject: 'Mathematic',
  studentNumber: 20,
  teacher: 'Maria Clara',
  turn: 'morning'
};

const lesson2 = {
  subject: 'History',
  studentNumber: 20,
  teacher: 'Carlos'
};

const lesson3 = {
  subject: 'Mathematic',
  studentNumber: 10,
  teacher: 'Maria Clara',
  turn: 'night'
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
    total += obj[keys[index]].studentNumber;
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
    if (obj[keys[index]].subject === 'Mathematic') {
      total += obj[keys[index]].studentNumber;
    }
  }

  return total;
}

function getInfo (obj, name) {
  const allLessons = [];
  let numberStudents = 0;
  const values = Object.values(obj);

  for (const index in values) {
    if (values[index].teacher === name) {
      allLessons.push(values[index].subject);
      numberStudents += values[index].studentNumber;
    }
  }

  return { classes: allLessons, students: numberStudents };
}

function createReport (allLessons, name) {
  const report = {};

  report.teacher = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}

addKey(lesson2, 'turn', 'afternoon');
getKeys(lesson1);
getValues(lesson1);
getLength(lesson1);
console.log(getNumberOfStudents(allLessons));
console.log(verifyPair(lesson2, 'teacher', 'Carlos'));
console.log(getNumberOfStudentsMath(allLessons));
console.log(createReport(allLessons, 'Maria Clara'));
