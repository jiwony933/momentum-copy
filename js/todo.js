const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

const todos = [];
// 뭐든지 텍스트로 만들어 주는 JSON.stringify()
// stringfy된 값을 js가 인식할 수 있게 하는  parse
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

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
  todos.push(newTodo);

  //그리고 newTodo를 paintTodo에 넣어서 실행
  paintTodo(newTodo);

  //todo array에 추가된 내용들을 저장
  saveTodos();
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);

if (savedTodos !== null) {
  //문자열로 변환된 것을 활용할 수 있는 array로 만들어주기 (parse)
  const parsedTodos = JSON.parse(savedTodos);
  //parse된 배열의 각각의 요소에 함수 적용 (arrow function사용)
  parsedTodos.forEach((item) => console.log("say hello" + item));
}
