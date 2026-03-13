const todoContainer = document.getElementById("todo-tasks");
const doingContainer = document.getElementById("doing-tasks");
const doneContainer = document.getElementById("done-tasks");

const modal = document.getElementById("task-modal");
const inputTitle = document.getElementById("task-title");
const inputDesc = document.getElementById("task-desc");
const selectStatus = document.getElementById("task-status");

function renderTasks() {

    console.log(initialTasks);

    initialTasks.forEach(function (task) {
  
      const taskElement = document.createElement("div");
  
      taskElement.classList.add("task-div");
      taskElement.textContent = task.title;
  
      // store task id in the DOM element
      taskElement.dataset.id = task.id;
  
      taskElement.addEventListener("click", function () {
        openModal(task.id);
      });
  
      // if statements to iterate through array and place task in correct column
      if (task.status === "todo") {
        todoContainer.appendChild(taskElement);
      }
  
      if (task.status === "doing") {
        doingContainer.appendChild(taskElement);
      }
  
      if (task.status === "done") {
        doneContainer.appendChild(taskElement);
      }
  
    });
  
  }

  function openModal(taskId) {

    const task = initialTasks.find(function (taskItem) {
        return taskItem.id === taskId;
      });
  
    if (!task) return;
  
    inputTitle.value = task.title;
    inputDesc.value = task.description;
    selectStatus.value = task.status;
  
    modal.showModal();

  }
  renderTasks();

  const closeBtn = document.querySelector(".close-modal");

  closeBtn.addEventListener("click", function () {
    modal.close();
  });
