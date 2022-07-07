const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // 이벤트가 원래 하려는 행동 멈추기
  event.preventDefault();
  // 로그인폼 에서 hidden class를 추가하기 (로그인폼 숨기기)
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 로그인인풋에 입력된 내용을 username으로 저장하기
  const username = loginInput.value;
  // username 이라는 키값에 위에서 저장된 username 저장하기
  localStorage.setItem(USERNAME_KEY, username);
  // paintGreetings 함수 호출하기
  paintingGreetings(username);
}

function paintingGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${username}`;
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintingGreetings(saveUsername);
}
