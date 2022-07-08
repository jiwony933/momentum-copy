const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  todoList.appendChild(li);
}

function onTodoSubmit(event) {
  event.preventDefault();
  // 현재의 값을  newTodo에 복사해 두는 과정
  const newTodo = todoInput.value;
  //todo 를 입렵하고 난 뒤에 input 창을 비워주기
  todoInput.value = "";
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", onTodoSubmit);
