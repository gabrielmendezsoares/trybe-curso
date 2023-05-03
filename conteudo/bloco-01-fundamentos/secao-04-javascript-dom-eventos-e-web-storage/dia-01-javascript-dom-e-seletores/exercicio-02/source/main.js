const header = document.getElementById('header-container');
const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
const footer = document.getElementById('footer-container');

header.style.backgroundColor = 'rgb(0, 176, 105)';
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';
footer.style.backgroundColor = 'rgb(0, 53, 51)';

for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}
