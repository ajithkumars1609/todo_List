const todoList = JSON.parse(localStorage.getItem("todoList")) || [
  {
    name: "make food",
    dueDate: "2022-09-21",
  },
  {
    name: "watch youtube",
    dueDate: "2022-09-21",
  },
];
function renderTodo() {
  let todoHtml = "";
  for (let i = 0; i <= todoList.length - 1; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
     <div>${name}</div>
     <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i},1);
        renderTodo();
        // whenever we update the todo List. Save in LocalStorage 
        saveStorage();
      " class="delete-todo-button">Delete</button>`;
    todoHtml += html;
  }
  document.querySelector(".js-display-todo-list").innerHTML = todoHtml;
}
function todoAdd() {
  const inputElement = document.querySelector(".js-input-button");
  const name = inputElement.value;
  const dueDateElment = document.querySelector(".js-due-date-input");
  const dueDate = dueDateElment.value;
  inputElement.value = "";
  dueDateElment.value = "";
  todoList.push({
    name: name,
    dueDate: dueDate,
    // name
    // dueDate // simple variable and same //
  });

  renderTodo();
  // when we update the todo List. save in localStorage
  saveStorage();
}
function enterButton(event) {
  if (event.key === "Enter") {
    todoAdd();
  }
}
function saveStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
