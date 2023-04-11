// const button = document.getElementById("random");
// console.log(button);
// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// let intup = document.querySelector("#input");
// let btn = document.querySelector("#btn");
// let lastMessage = document.querySelector("lastMessage");

// console.log(value);
// console.log(increase);

// increase.addEventListener("click", () => {
//   value.innerHTML++;
// });
// decrease.addEventListener("click", () => {
//   value.innerHTML--;
// });

// if (value.innerHTML > 0) {
//   value.style.color = "green";
// } else if (value === 0) {
//   value.style.color = "white";
// } else {
//   value.style.color = "red";
// }

// let y = 0;
// for (let x = 20; x <= 30; x++) {
//   y++;

//   console.log(y);
// }

// const quotes = [
//   {
//     quote:
//       "Spread love everywhere you go. Let no one ever come to you without leaving happier",
//     name: "mother Teresa",
//   },
//   {
//     quote: "When you reach the end of your rope, tie a knot in it and hang on.",
//     name: "Franklin D. Roosevelt",
//   },
//   {
//     quote:
//       "Don't judge each day by the harvest you reap but by the seeds that you plant.",
//     name: "Robert Louis Stevenson",
//   },
//   {
//     quote:
//       "The future belongs to those who believe in the beauty of their dreams.",
//     name: "Eleanor Roosevelt",
//   },
//   {
//     quote:
//       "It is during our darkest moments that we must focus to see the light.",
//     name: "Aristotle",
//   },
//   {
//     quote: "Whoever is happy will make others happy too.",
//     name: "Anne Frank",
//   },
// ];

// const quoteBtn = document.getElementById("generateQuote");
// const quoteAuthor = document.getElementById("quotesName");
// const quote = document.getElementById("quote");

// console.log(quoteAuthor);

// quoteBtn.addEventListener("click", displayQuote);

// function displayQuote() {
//   let number = Math.floor(Math.random() * quotes.length);
//   quoteAuthor.innerHTML = quotes[number].name;
//   quote.innerHTML = quotes[number].quote;
// }

// const btn = document.querySelector(".btn");
// const input = document.querySelector(".input");
// const showMessage = document.querySelector(".lastMessage");

// console.log(btn);
// console.log(showMessage);
// console.log(input);

// btn.addEventListener("click", sendMsg);

// function sendMsg() {
//   let msg = input.value;
//   if (msg === "") {
//     showMessage.innerHTML = "cannot send empty";
//   } else {
//     showMessage.innerHTML = msg;
//     input.value = "";
//   }
// }

const value = document.getElementById("counterValue");
const increase = document.getElementById("increase");
const decrease = document.querySelector(".decrease");

console.log(increase);
console.log(decrease);

let count = 0;

increase.addEventListener("click", increaseCounter);
decrease.addEventListener("click", decreaseCounter);

function increaseCounter() {
  count++;
  value.innerHTML = count;
  if (count > "0") {
    value.style.color = "green";
  } else if (value.innerHTML === "0") {
    value.style.color = "white";
  }
}
function decreaseCounter() {
  count--;
  value.innerHTML = count;
  if (count < "0") {
    value.style.color = "red";
  } else if (value.innerHTML === "0") {
    value.style.color = "white";
  }
}
