const inputTarefas = document.querySelector("#input-task");
const btnTask = document.querySelector("#btn-task");
const listTask = document.querySelector("#tasks ");

function addTaskScreen(addTaskInput) {
  const elementLI = document.createElement("li");
  const buttonDelete = document.createElement("button");
  elementLI.innerHTML = addTaskInput;
  inputTarefas.focus();
  listTask.appendChild(elementLI);
  buttonDelete.innerHTML += "Apagar";
  elementLI.appendChild(buttonDelete);
  buttonDelete.setAttribute("class", "delete");
  buttonDelete.setAttribute("title", "Apague esta tarefa");
  cleanInput();
  saveTasks();
}

function saveTasks() {
  const readTasks = listTask.querySelectorAll("li");
  const saveListTasks = [];

  for (let listTask of readTasks) {
    let taskText = listTask.innerText;
    taskText = taskText.replace("Apagar", "").trim();

    saveListTasks.push(taskText);
  }

  const tasksJSON = JSON.stringify(saveListTasks);
  localStorage.setItem("tarefas", tasksJSON);
}

function cleanInput() {
  inputTarefas.value = "";
}

function addSavedTasks() {
  const listTask = localStorage.getItem("tarefas");
  const listofTasks = JSON.parse(listTask);
  for (let tarefa of listofTasks) {
    addTaskScreen(tarefa);
  }
}

inputTarefas.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!inputTarefas.value) return;
    addTaskScreen(inputTarefas.value);
  }
});

btnTask.addEventListener("click", function (e) {
  if (!inputTarefas.value) return;
  addTaskScreen(inputTarefas.value);
});

document.addEventListener("click", function (e) {
  const elementPress = e.target;
  if (elementPress.classList.contains("delete")) {
    elementPress.parentElement.remove();
    saveTasks();
  }
});
addSavedTasks();
