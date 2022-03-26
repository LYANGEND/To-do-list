const getTaskFromLocalStorage = () => {
  if (JSON.parse(localStorage.getItem('tasks')) === null || localStorage.getItem('tasks') === '[]') {
    return [];
  }
  return JSON.parse(localStorage.getItem('tasks'));
};

const setTaskIntoLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export { getTaskFromLocalStorage, setTaskIntoLocalStorage };