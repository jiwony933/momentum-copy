const quotes = [
  {
    quote:
      "It is not our abilities that show what we truly are, it is our choices ",
    author: "Dumbledore, Harry Potter",
  },
  {
    quote:
      "The past can hurt, but you can either run from it, or learn from it ",
    author: "Lion King",
  },
  {
    quote:
      "At some point you've got to decide for yourself who you gonna be. Can't let nobody make that decision for you",
    author: "Juan, Moonlight",
  },
  {
    quote: "Every man dies, not every man really lives.",
    author: "Braveheart",
  },
  {
    quote: "There's no place like home.",
    author: "The Wizard of Oz",
  },
  {
    quote: "I don't regret the things I've done, but those I did not do.",
    author: "Empire Records",
  },
  {
    quote: "Good words, good thoughts and good deeds",
    author: "Bomi Bulsara, Bohemian Rhapsody",
  },
  {
    quote:
      "I tried to live everyday as if it was the final day of my extraordinary, ordinary life.",
    author: "About Time",
  },
  {
    quote: "The best way to guarantee a loss is to quit.",
    author: "Morgan Freeman",
  },
  {
    quote:
      "That's what I love about music.All these banalities suddenly turn into beautiful pearls.",
    author: "Begin Again",
  },
  {
    quote: "Some people are worth melting for",
    author: "Frozen",
  },
  {
    quote: "You gotta hear this one song. It'll change your life, I swear.",
    author: "Garden State",
  },
  {
    quote: "Honest to blog?",
    author: "Juno",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

// Math.random()  -> 0~1 사이 랜덤 숫자
// Math.floor()  -> 버 림
// Math.ceil()  -> 올림
// Math.round()  -> 반올림

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;
