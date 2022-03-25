import { getTaskFromLocalStorage, setTaskIntoLocalStorage } from './localStorage.js';

const updateTask = (e) => {
  const tasks = getTaskFromLocalStorage();
  const selectedID = parseInt(e.id, 10);

  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].index === selectedID) {
      tasks[i].description = e.value;
      break;
    }
  }
  setTaskIntoLocalStorage(tasks);
};
export default updateTask;