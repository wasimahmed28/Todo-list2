const taskAdd = document.getElementById("addTask");
const addedTask = document.getElementById("addedTask");
const addTaskSubmit = document.getElementById("addTaskSubmit");

var addedTaskId = 0;

addTaskSubmit.addEventListener("click", () => {
  if (taskAdd.value) {
    let addElement = document.createElement("div");
    let addDate = document.createElement("div");
    let addText = document.createElement("div");
    let paraText = document.createElement("p");
    addElement.className = "taskBox";
    addDate.className = "DateBox";
    addText.className = "TextBox";
    addElement.id = "task" + ++addedTaskId;
    addDate.id = "task" + addedTaskId;
    addText.id = "task" + addedTaskId;
    addElement.onclick = getClickedTask;
    addDate.textContent = new Date().toDateString();
    paraText.textContent = taskAdd.value;
    addText.appendChild(paraText);
    addElement.appendChild(addDate);
    addElement.appendChild(addText);
    addedTask.appendChild(addElement);
    taskAdd.value = "";
  }
});

const getClickedTask = (e) => {
  let taskBox = document.getElementById(e.target.id);
  taskBox.className = "taskBox  taskboxDone";
};
