const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

const todayImage = images[Math.floor(Math.random() * images.length)];

//createElement -> html에 새로운 요소를 추가
const bgImage = document.createElement("img");

bgImage.src = `images/${todayImage}`;

//bgImage를 body 안에 집어넣기 appendChild
document.body.appendChild(bgImage);
