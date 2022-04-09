/**
 * @jest-environment jsdom
 */

import addTask from "../modules/addTask.js";
import completedTask from "../modules/completedTasks.js";
import updateTask from "../modules/updateTask.js";

describe("Test the Update, Checkbox, and Clear all features", () => {
  test("Add a new item to the list", () => {
    document.body.innerHTML = `<div class="task-list">
         <input type="checkbox" class="checkbox" >
         <input type="text" class="task">
         <i class="fa fa-ellipsis-v visible" ></i>
         <i class="fa fa-trash invisible"></i>
 
       </div>
       <hr>`;
    addTask("add a removeItem function");
    const list = document.querySelectorAll(".task-list");
    expect(list).toHaveLength(1);
  });
  test("Updating an item status ", () => {
    const storage = JSON.parse(localStorage.getItem("tasks"));
    storage[0].completed = true;
    completedTask();
    expect(storage[0].completed).toBe(true);
  });
  test("verify local storage after invoking addItem function ", () => {
    const storage = JSON.parse(localStorage.getItem("tasks"));
    expect(storage.length).toBe(1);
  });
  test("edit function", () => {
    const storage = JSON.parse(localStorage.getItem("tasks"));
    document.body.innerHTML = '<div id="show-tasks"></div>';
    storage.forEach(() => {
      const container = document.getElementById("show-tasks");
      container.innerHTML += `
                                     <div class="task-list">
                                     <input type="checkbox" class="checkbox" >
                                     <input type="text" class="task">
                                     <i class="fa fa-ellipsis-v visible" ></i>
                                     <i class="fa fa-trash invisible"></i>
                           
                                   </div>
                                   <hr>`;
    });
    updateTask(0, "add a removeItem function");
    expect(storage[0].description).toBe("add a removeItem function");
  });

  test("verify the localStorage is updated ", () => {
    const storage = JSON.parse(localStorage.getItem("tasks"));
    expect(storage[0].description).toBe("add a removeItem function");
  });

  test("test auto completed", () => {
    const storage = JSON.parse(localStorage.getItem("tasks"));
    document.body.innerHTML = '<div id="show-tasks"></div>';
    const container = document.getElementById("show-tasks");
    storage.forEach(() => {
      container.innerHTML += `<div class="task-list">
                                     <input type="checkbox" class="checkbox" >
                                     <input type="text" class="task">
                                     <i class="fa fa-ellipsis-v visible" ></i>
                                     <i class="fa fa-trash invisible"></i>
                           
                                   </div>
                                   <hr>`;
    });
    const list = document.querySelectorAll(".task-list");
    expect(list).toHaveLength(1);
  });

  /*test('check the localStorage after call clearAllCompleted function ', () => {
         const storage = JSON.parse(localStorage.getItem('tasks'));
         expect(storage.length).toBe(1);
         expect(storage[0].completed).toBe(false);
     });*/
});
