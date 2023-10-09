const todoList = [];
function renderTodo() {
  let todoHtml = "";
  for (let i = 0; i <= todoList.length - 1; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoHtml += html;
    document.querySelector(".js-display-todo-list").innerHTML = todoHtml;
  }
}
function todoAdd() {
  const inputElement = document.querySelector(".js-input-button");
  const inputValue = inputElement.value;
  todoList.push(inputValue);
  inputElement.value = "";
  renderTodo();
}
function enterButton(event) {
  if (event.key === "Enter") {
    todoAdd();
  }
}
