import { getTaskFromLocalStorage } from './localStorage.js';

const getTasks = () => {
  const tasks = getTaskFromLocalStorage();
  const sortedTasks = tasks.sort((v1, v2) => v1.index - v2.index);
  return sortedTasks;
};

export default getTasks;