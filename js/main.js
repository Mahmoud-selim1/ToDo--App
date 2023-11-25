let btn = document.getElementById("btn");
let mode = document.getElementsByClassName("mode")[0];
//##############
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let noTasks = document.getElementById("noTasks");
let allTasks = document.getElementById("allTasks");
let inputCard = document.getElementById("inputCard");
let taskCard = document.getElementById("taskCard");
let tasksCounter = document.getElementById("tasksCounter");
let counter = document.getElementById("counter");
let h2 = document.getElementById("h2");
let validationMessage = document.getElementById("validationMessage");
// ===> For Changee Mode
let changeMode = () => {
  mode.classList.toggle("dark");
  h2.classList.toggle("dark-counter");
  inputCard.classList.toggle("bg-dark");
  taskCard.classList.toggle("dark-card");
  counter.classList.toggle("dark-counter");
  // mode.style.clipPath = "circle(100%)";
};
btn.addEventListener("click", changeMode);
// check if allTasks is empty or not
let check = () => {
  if (allTasks.childElementCount > 0) {
    validationMessage.classList.add("d-none");
    noTasks.classList.add("d-none");
  } else {
    noTasks.classList.remove("d-none");
  }
};
// Function to add tasks
let addTasks = () => {
  allTasks.innerHTML += `<div class="alert alert-success">${taskInput.value}
  <i class="deleteIcon fa-solid fa-trash-can fs-4"></i>
  </div>`;
  tasksCounter.innerText = allTasks.childElementCount;
  check();
  taskInput.value = "";
};

// delete single task
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteIcon")) {
    event.target.parentElement.remove();
    tasksCounter.innerText = allTasks.childElementCount;
    check();
  }
});
// validation
let validation = (e) => {
  let valid = false;
  if (taskInput.value != "") {
    addTasks();
  } else {
    validationMessage.classList.remove("d-none");
    e.preventDefault();
  }
};
addBtn.addEventListener("click", validation);
