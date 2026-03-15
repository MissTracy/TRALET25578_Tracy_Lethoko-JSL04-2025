const todoContainer = document.getElementById("todo-tasks");
const doingContainer = document.getElementById("doing-tasks");
const doneContainer = document.getElementById("done-tasks");

const modal = document.getElementById("task-modal");
const inputTitle = document.getElementById("task-title");
const inputDesc = document.getElementById("task-desc");
const selectStatus = document.getElementById("task-status");

/**
 * Renders all tasks from the initialTasks array
 * using task id to add it to the DOM accoring to their status
 */
function renderTasks() {

    console.log(initialTasks);

    initialTasks.forEach(function (task) {
  
      const taskElement = document.createElement("div");
  
      taskElement.classList.add("task-div");
      taskElement.textContent = task.title;
  
      taskElement.dataset.id = task.id;
  
      taskElement.addEventListener("click", function () {
        openModal(task.id);
      });
  
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

  /**
   * Finds a task by ID and adds it to the modal with 
   * all it's details before opening it
   * @param {number} taskId  The identifier for the task to display
   */
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


  //listens for when button is clicked so it can close modal
  const closeBtn = document.querySelector(".close-modal");

  closeBtn.addEventListener("click", function () {
    modal.close();
  });
