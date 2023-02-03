const newTaskInput = document.querySelector("#add-task input");
const tasksFunction = document.querySelector("#tasks");
let deleteTasks, editTasks;
let count;
let updateTask = "";

window.addEventListener('load', (event) =>{
  console.log("Page Loaded");
  displayTodos();
});

const displayTodos = () => {

  if (Object.keys(localStorage).length > 0) {
    tasksFunction.style.display = "inline-block";
  } else {
    tasksFunction.style.display = "none";
  }
  tasksFunction.innerHTML = "";
  let tasks = Object.keys(localStorage);
  console.log(tasks)
  for (let key of tasks) {
    let value = localStorage.getItem(key);
    console.log(value)
    let taskInnerDiv = document.createElement("div");
    taskInnerDiv.classList.add("task");
    taskInnerDiv.setAttribute("id", key);
    taskInnerDiv.innerHTML = `<span id="taskname">${key.split("_")[1]}</span>`;
    taskInnerDiv.innerHTML += `<button class="edit">Edit</button>`;
    taskInnerDiv.innerHTML += `<button class="delete">Delete</button>`;
    tasksFunction.appendChild(taskInnerDiv);
  }
}

const updateTodos = (index, taskValue, completed) => {
  localStorage.setItem(`${index}_${taskValue}`,completed);
  displayTodos();
};

document.querySelector("#add").addEventListener("click", () => {
  if(newTaskInput.value.length == 0) {
    alert("Enter your task");
  }
  else {
    if (updateTask == "") {
      updateTodos(count,newTaskInput.value,false);
    }
    count += 1;
    newTaskInput.value = "";
  }
})
