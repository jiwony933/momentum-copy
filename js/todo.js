const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function handleClickDelete(event) {
  //어디서 클릭이 발생했는지 파악하기 위해서 console.dir(event.target)  확인 -> parnetElement -> innerText
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  //paintTodo는 li와 span을 생성시킴
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", handleClickDelete);
  // li 아래에 span 데꼬가기
  li.appendChild(span);
  li.appendChild(button);
  // span 내부의 텍스트를 newTodo로 바꿔주고
  span.innerText = newTodo;
  // li를 todolist안에 넣어주기
  todoList.appendChild(li);
}

function onTodoSubmit(event) {
  event.preventDefault();
  // 현재의 값을  newTodo에 복사해 두는 과정
  const newTodo = todoInput.value;
  //todo 를 입렵하고 난 뒤에 input 창을 비워주기
  todoInput.value = "";
  //그리고 newTodo를 paintTodo에 넣어서 실행
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", onTodoSubmit);
