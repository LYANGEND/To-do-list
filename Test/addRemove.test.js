/**
 * @jest-environment jsdom
 */

import addTask from "../modules/addTask.js";
import removeTask from "../modules/removeTask.js";

describe("addTask", () => {
  test("Add a new item to the list", () => {
    document.body.innerHTML = `<div class="task-list">
         <input type="checkbox" class="checkbox" ><input type="text" class="task"><i class="fa fa-ellipsis-v visible" ></i><i class="fa fa-trash invisible"></i>
 
       </div>
       <hr>`;
    addTask("add a removeItem function");
    const list = document.querySelectorAll(".task-list");
    expect(list).toHaveLength(1);
  });

  test("verify local storage after invoking addItem function ", () => {
    const storage = JSON.parse(localStorage.getItem("tasks"));
    expect(storage.length).toBe(1);
  });

  test("remove an item from the list", () => {
    const storage = JSON.parse(localStorage.getItem("tasks"));
    document.body.innerHTML = '<div id="show-tasks"></div>';
    const container = document.getElementById("show-tasks");
    storage.forEach(() => {
      container.innerHTML += `<div class="task-list">
                                     <input type="checkbox" class="checkbox" ><input type="text" class="task"><i class="fa fa-ellipsis-v visible" ></i><i class="fa fa-trash invisible"></i>
                           
                                   </div>
                                   <hr>`;
    });
    removeTask(1);
    const list = document.querySelectorAll(".task-list");
    expect(list).toHaveLength(1);
  });

  /*test('verify local storage after invoking removeItem function ', () => {
         const storage = JSON.parse(localStorage.getItem('tasks'));
         expect(storage.length).toBe(1);
     });*/
});
