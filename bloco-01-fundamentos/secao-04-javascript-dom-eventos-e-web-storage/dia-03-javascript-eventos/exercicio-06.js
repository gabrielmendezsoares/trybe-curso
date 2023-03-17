const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidayDaysList = [24, 25, 31];
const fridayDaysList = [4, 11, 18, 25];
const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const holidayButton = document.querySelector('#btn-holiday');
const fridayButton = document.querySelector('#btn-friday');
const addButton = document.querySelector('#btn-add');
const taskList = document.querySelector('#task-list');
const daysList = document.querySelector('#days');
const weekDaysList = document.querySelector('.week-days');
const taskInput = document.querySelector('#task-input');
const taskElements = document.querySelectorAll('.task');
let holidayButtonState = false;
let fridayButtonState = false;

const createDaysOfDecember = () => {
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const dayListItem = document.createElement('li');

    dayListItem.className = 'day';
    dayListItem.innerHTML = decemberDaysList[index];

    if (holidayDaysList.includes(decemberDaysList[index])) {
      dayListItem.classList.add('holiday');
    }
    if (fridayDaysList.includes(decemberDaysList[index])) {
      dayListItem.classList.add('friday');
    }

    daysList.appendChild(dayListItem);
  }
}

const createDaysOfTheWeek = () => {
  for (let index = 0; index < weekDays.length; index += 1) {
    const dayListItem = document.createElement('li');

    dayListItem.innerHTML = weekDays[index];
    weekDaysList.appendChild(dayListItem);
  }
}

function setInputs(params) {
  const dayDays = document.querySelectorAll('.day');
  const holidayDays = document.querySelectorAll('.holiday');
  const fridayDays = document.querySelectorAll('.friday');

  function resetTasks() {
    for (let index = 0; index < taskElements.length; index += 1) {
      if (taskElements[index].classList.contains('selected')) {
        taskElements[index].classList.remove('selected');
      }
    }
  }

  holidayButton.addEventListener('click', (event) => {
    if (!holidayButtonState) {
      holidayButtonState = true;

      for (let index = 0; index < holidayDays.length; index += 1) {
        holidayDays[index].style.backgroundColor = 'lightblue';
      }
    } else if (holidayButtonState) {
      holidayButtonState = false;

      for (let index = 0; index < holidayDays.length; index += 1) {
        holidayDays[index].style.backgroundColor = 'rgb(238,238,238)';
      }
    }
  });

  fridayButton.addEventListener('click', (event) => {
    if (!fridayButtonState) {
      fridayButtonState = true;

      for (let index = 0; index < fridayDays.length; index += 1) {
        fridayDays[index].innerHTML = '✅';
      }
    } else if (fridayButtonState) {
      fridayButtonState = false;

      for (let index = 0; index < fridayDays.length; index += 1) {
        fridayDays[index].innerHTML = fridayDaysList[index];
      }
    }
  });

  addButton.addEventListener('click', (event) => {
    if (taskInput.value.length <= 0) {
      alert('Nome inválido ou vazio!');
    } else if (taskInput.value.length > 0) {
      const taskListItem = document.createElement('li');

      taskListItem.innerHTML = taskInput.value;
      taskList.appendChild(taskListItem);
    }
  });

  taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      if (taskInput.value.length <= 0) {
        alert('Nome inválido ou vazio!');
      } else if (taskInput.value.length > 0) {
        const taskListItem = document.createElement('li');

        taskListItem.innerHTML = taskInput.value;
        taskList.appendChild(taskListItem);
      }
    }
  });

  for (let index = 0; index < taskElements.length; index += 1) {
    taskElements[index].addEventListener('click', (event) => {
      if (!taskElements[index].classList.contains('selected')) {
        resetTasks();
        taskElements[index].classList.add('selected');
      } else if (taskElements[index].classList.contains('selected')) {
        resetTasks();
        taskElements[index].classList.remove('selected');
      }
    });
  }

  for (let index = 0; index < dayDays.length; index += 1) {
    dayDays[index].addEventListener('click', (event) => {
      let selectedTask = document.querySelector('.selected');
      if (!selectedTask || dayDays[index].style.color === selectedTask.style.backgroundColor) {
        dayDays[index].style.color = 'rgb(119,119,119)';
      } else if (selectedTask && dayDays[index].style.color !== selectedTask.style.backgroundColor) {
        dayDays[index].style.color = selectedTask.style.backgroundColor;
      }
    });

    dayDays[index].addEventListener('mouseover', (event) => {
      dayDays[index].style.fontSize = '30px';
      dayDays[index].style.fontWeight = '600';
    });

    dayDays[index].addEventListener('mouseout', (event) => {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    });
  }
}

createDaysOfDecember();
createDaysOfTheWeek();
setInputs();
