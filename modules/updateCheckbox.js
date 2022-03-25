import { getTaskFromLocalStorage, setTaskIntoLocalStorage } from './localStorage.js';

const updateCheckbox = (e) => {
  const id = parseInt(e.target.parentNode.children[1].id, 10);

  const tasks = getTaskFromLocalStorage();
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].index === id) { tasks[i].completed = e.target.checked; }
  }
  setTaskIntoLocalStorage(tasks);
};

export default updateCheckbox;