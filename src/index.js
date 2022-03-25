import './style.css';
import addTask from '../modules/addTask.js';
import getTasks from '../modules/displayTasks.js';
import removeTask from '../modules/removeTask.js';
import updateTask from '../modules/updateTask.js';
import completedTask from '../modules/completedTasks.js';
import updateCheckbox from '../modules/updateCheckbox.js';
import { setTaskIntoLocalStorage } from '../modules/localStorage.js';

const newTask = document.getElementById('add-task');
const showTasks = document.getElementById('show-tasks');
const completedTaskButton = document.getElementById('completed-task');
if (localStorage.getItem('tasks') === null || localStorage.getItem('tasks') === '[]') {
  setTaskIntoLocalStorage([]);
}

const checkboxClickHandler = (e) => {
  if (e.target.checked === true) {
    e.target.parentNode.children[1].classList.add('strike');
  } else {
    e.target.parentNode.children[1].classList.remove('strike');
  }
  updateCheckbox(e);
};
const optionClickHandler = (e) => {
  const input = e.target.parentNode.children[1];
  const ellipsis = e.target.parentNode.children[2];
  const trash = e.target.parentNode.children[3];

  if (e.target.className.indexOf('visible') > -1) {
    trash.classList.remove('invisible');

    e.target.parentNode.style.backgroundColor = '#ffffe0';
    input.style.backgroundColor = '#ffffe0';
    e.target.classList.add('invisible');
  } else if (e.target.className.indexOf('task') > -1) {
    ellipsis.classList.remove('invisible');
    trash.classList.add('invisible');
    e.target.parentNode.style.backgroundColor = '';
    input.style.backgroundColor = '';
  } else if (e.target.checked === true) {
    ellipsis.classList.remove('invisible');
    trash.classList.add('invisible');
    e.target.parentNode.style.backgroundColor = '';
    input.style.backgroundColor = '';
  }
};

const updateTaskHandler = (e) => {
  updateTask(e.target);
};
const refreshTaskList = () => {
  const sortedTasks = getTasks();
  showTasks.innerHTML = '';
  for (let i = 0; i < sortedTasks.length; i += 1) {
    let str = '';
    let strike = '';
    if (sortedTasks[i].completed === true) {
      str = 'checked';
      strike = 'strike';
    }
    showTasks.innerHTML += `<div class="task-list">
          <input type="checkbox" class="checkbox" ${str} ><input type="text" class="task ${strike}" id="${sortedTasks[i].index}" value="${sortedTasks[i].description}" ><i class="fa fa-ellipsis-v visible" ></i><i class="fa fa-trash invisible"></i>

        </div>
        <hr>`;
  }

  const checkboxes = document.querySelectorAll('.checkbox');
  const optionIcon = document.getElementsByClassName('fa-ellipsis-v');
  const trashIcon = document.getElementsByClassName('fa-trash');
  const inputElem = document.getElementsByClassName('task');
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('change', (e) => {
      checkboxClickHandler(e);
      optionClickHandler(e);
    });
    optionIcon[i].addEventListener('click', (e) => {
      optionClickHandler(e);
    });

    trashIcon[i].addEventListener('click', (e) => {
      /* eslint-disable-next-line no-use-before-define */
      removeTaskHandler(e);
    });
    inputElem[i].addEventListener('click', (e) => {
      optionClickHandler(e);
    });
    inputElem[i].addEventListener('blur', (e) => {
      updateTaskHandler(e);
    });
  }
};
const removeTaskHandler = (e) => {
  const trashIcon = e.target;
  removeTask(trashIcon.parentNode.children[1]);
  refreshTaskList();
};

newTask.addEventListener('keyup', (e) => {
  e.stopImmediatePropagation();
  if (e.keyCode === 13) {
    addTask(e.target.value);
    e.target.value = '';
    refreshTaskList();
  }
});

completedTaskButton.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  completedTask();
  refreshTaskList();
});

window.onload = () => {
  refreshTaskList();
};