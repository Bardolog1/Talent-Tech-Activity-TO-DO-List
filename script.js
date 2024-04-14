const inputTODO = document.querySelector("#toDoInput");
const toDoList = document.querySelector("#toDoList");
inputTODO.addEventListener("keypress", newTaskEnter);

loadTasks();

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    for (var task in tasks) {
      createElements(task, tasks[task]);
    }
  }
}

function newTask() {
  var taskText = inputTODO.value;

  if (
    taskText === "" ||
    taskText === null ||
    taskText === undefined ||
    taskText === " "
  ) {
    swal("Error!", "Task input is empty", "error");
    return;
  }
  createElements(taskText);
  inputTODO.value = "";
  swal("Good job!", "Task is Added!", "success");
  saveTasks();

}

function createElements(text, completed = false) {
  var taskElement = document.createElement("li");
  const buttonRemove = document.createElement("div");
  const buttonCheck = document.createElement("div");
  const textContainer = document.createElement("div");
  const btnsContainer = document.createElement("div");

  btnsContainer.classList.add("btnsContainer");
  buttonCheck.innerText = "✔️";
  buttonCheck.classList.add("check");
  buttonRemove.innerText = "❌";
  buttonRemove.classList.add("remove");
  textContainer.innerText = "📌  " + text;
  textContainer.classList.add("text");
  buttonCheck.addEventListener("click", checkTask);
  buttonRemove.addEventListener("click", removeTask);
  btnsContainer.appendChild(buttonCheck);
  btnsContainer.appendChild(buttonRemove);
  taskElement.appendChild(textContainer);
  taskElement.appendChild(btnsContainer);
  if (completed) {
    taskElement.classList.add("taskCompleted");
  }
  toDoList.appendChild(taskElement);
}

function newTaskEnter(event) {
  if (event.key === "Enter") {
    newTask();
  }
}

function checkTask(event) {
  var taskElement = event.target;
  if (
    taskElement.parentElement.parentElement.classList.contains("taskCompleted")
  ) {
    swal("Error!", "Task is already completed", "error");
    return;
  }
  swal("Congratulations 🎉🏆🚀!", "Task is Completed!", "success");

  taskElement.parentElement.parentElement.classList.toggle("taskCompleted");
  saveTasks();
}

function removeTask(event) {
  var taskElement = event.target;
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this task!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your task has been deleted!", {
        icon: "success",
      });
      toDoList.removeChild(taskElement.parentElement.parentElement);
      saveTasks();
    } else {
      swal("Your task is safe!");
    }
  });
}

function clearAll() {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this task!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your tasks has been deleted!", {
        icon: "success",
      });
      toDoList.innerHTML = "";
      saveTasks();
    } else {
      swal("Your tasks are safe!");
    }
  });
}
function clearCompleted() {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this task!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your tasks has been deleted!", {
        icon: "success",
      });
      var completedTasks = document.querySelectorAll(".taskCompleted");
      completedTasks.forEach((task) => {
        toDoList.removeChild(task);
        saveTasks();
      });
    } else {
      swal("Your tasks are safe!");
    }
  });
}

function filterActive() {
  var tasks = document.querySelectorAll("li");
  tasks.forEach((task) => {
    if (task.classList.contains("taskCompleted")) {
      task.style.display = "none";
    } else {
      task.style.display = "flex";
    }
  });
}

function filterCompleted() {
  var tasks = document.querySelectorAll("li");
  tasks.forEach((task) => {
    if (task.classList.contains("taskCompleted")) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}

function filterAll() {
  var tasks = document.querySelectorAll("li");
  tasks.forEach((task) => {
    task.style.display = "flex";
  });
}

function saveTasks() {
  var tasks = document.querySelectorAll("li");
  const tasksObject = {};
  tasks.forEach((task) => {
    tasksObject[task.querySelector(".text").innerText.split("📌 ")[1].trim()] =
      task.classList.contains("taskCompleted");
  });
  localStorage.setItem("tasks", JSON.stringify(tasksObject));
  console.log(tasksObject);
}

function save() {
  saveTasks();
  swal("Good job!", "Tasks are saved in Local Storage!", "success");
}
