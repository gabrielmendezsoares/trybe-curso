const taskInput = document.getElementById('texto-tarefa');
const taskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
const clearSelectedButton = document.getElementById('remover-selecionado');
const clearCompletedButton = document.getElementById('remover-finalizados');
const clearButton = document.getElementById('apaga-tudo');
const saveButton = document.getElementById('salvar-tarefas');

const connectSelected = (element) => {
  element.addEventListener('click', () => {
    const liElements = document.querySelectorAll('li');
    const elementClassList = element.classList;

    for (let index = 0; index < liElements.length; index += 1) {
      liElements[index].classList.remove('selected');
    }

    elementClassList.add('selected');
  });
};

const connectCompleted = (element) => {
  element.addEventListener('dblclick', () => {
    const elementClassList = element.classList;

    if (elementClassList.contains('completed')) {
      elementClassList.remove('completed');
    } else {
      elementClassList.add('completed');
    }
  });
};

const getData = () => {
  if (localStorage.getItem('task')) {
    const liArray = JSON.parse(localStorage.getItem('task'));

    for (let index = 0; index < liArray.length; index += 1) {
      taskList.innerHTML += liArray[index];
    }

    const liElementsA = document.querySelectorAll('li');

    for (let index = 0; index < liElementsA.length; index += 1) {
      connectSelected(liElementsA[index]);
      connectCompleted(liElementsA[index]);
    }
  }
};

taskButton.addEventListener('click', () => {
  const newTask = document.createElement('li');

  newTask.innerHTML = taskInput.value;
  taskInput.value = '';
  taskList.appendChild(newTask);
  connectSelected(newTask);
  connectCompleted(newTask);
});

moveUpButton.addEventListener('click', () => {
  const selectedElement = document.getElementsByClassName('selected')[0];
  let state = false;

  if (selectedElement) {
    state = true;
  }

  if (state === true && selectedElement.previousElementSibling) {
    const parent = selectedElement.parentNode;
    const previousSibling = selectedElement.previousElementSibling;

    parent.insertBefore(selectedElement, previousSibling);
  }
});

moveDownButton.addEventListener('click', () => {
  const selectedElement = document.getElementsByClassName('selected')[0];
  let state = false;

  if (selectedElement) {
    state = true;
  }

  if (state === true && selectedElement.nextElementSibling) {
    const parent = selectedElement.parentNode;
    const nextSibling = selectedElement.nextElementSibling;

    parent.insertBefore(nextSibling, selectedElement);
  }
});

clearSelectedButton.addEventListener('click', () => {
  const selectedElements = document.querySelectorAll('.selected');

  for (let index = 0; index < selectedElements.length; index += 1) {
    selectedElements[index].remove();
  }
});

clearCompletedButton.addEventListener('click', () => {
  const completedElements = document.querySelectorAll('.completed');

  for (let index = 0; index < completedElements.length; index += 1) {
    completedElements[index].remove();
  }
});

clearButton.addEventListener('click', () => {
  const liElements = document.querySelectorAll('li');

  for (let index = 0; index < liElements.length; index += 1) {
    liElements[index].remove();
  }
});

saveButton.addEventListener('click', () => {
  const liElements = document.querySelectorAll('li');
  const liArray = [];

  for (let index = 0; index < liElements.length; index += 1) {
    liArray.push(liElements[index].outerHTML);
  }

  localStorage.setItem('task', JSON.stringify(liArray));
});

window.onload = () => {
  getData();
};
