const clock = document.querySelector("h2#clock");

// function sayHello() {
//   console.log("hellllo");
// }
// setInterval(sayHello, 5000); ms마다 함수 실행 (반복 실행))
// setTimeout(sayHello, 5000); ms후에 함수 실행 (1회 실행)

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//화면이 로드 되자 마자 시계가 뜨려면 getClock 먼저 호출
getClock();
setInterval(getClock, 1000);
