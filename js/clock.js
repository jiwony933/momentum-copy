const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hellllo");
}
setInterval(sayHello, 5000);
setTimeout(sayHello, 5000);
