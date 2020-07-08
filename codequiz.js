//variables
//obejcts and folder
var questionAndAnswer = [
  {
    question: "1. Where was the jersey shore filmed?",
    options: ["LBI, NJ", "Seaside Heights, NJ", "Cape May, NJ"],
    correct: 1,
  },
  {
    question: "2. Jenny's nick-name on the show was?",
    options: ["Jmoney", "J420", "Jwow"],
    correct: 2,
  },
  {
    question: "3. Where did the cast work while in Seaside Heights?",
    options: ["Bakery", "T-shirt Shop", "Pizzeria"],
    correct: 1,
  },
];
var qIndex = 0;
var secondsLeft = 100;
var score = 0;
var timerInterval;

//console.log(questionAndAnswer[0].options);

// console.log(questionAndAnswer[1].question);
// console.log(questionAndAnswer[1].options);

// console.log(questionAndAnswer[2].question);
// console.log(questionAndAnswer[2].options);

// for (var i = 0; i < questionAndAnswer.length; i++) {
//   console.log(questionAndAnswer[i].question);
//   console.log(questionAndAnswer[i].options);
//   for (var k = 0; k < questionAndAnswer[i].options.length; k++) {
//     console.log(questionAndAnswer[i].options[k]);
//   }
//   console.log(questionAndAnswer[i].correct);
// }

//timer
var timeEl = document.querySelector(".timer");

var mainEl = document.getElementById("main");
var questionsEl = document.getElementById("questions");

displayQuestion();

function displayQuestion() {
  questionsEl.innerHTML = "";

  var question = document.createElement("h1");
  question.textContent = questionAndAnswer[qIndex].question;

  questionsEl.appendChild(question);
}

function setTime() {
  clearInterval(timerInterval);

  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
    }
  }, 1 * 1000);
}

//if statements

//objects

//click start button

//the timer starts and score counter

//first questions pops up user input

//IF  first question correct move on

//ELSE first question wrong time is subtractes

// IF when the timer is out its game over

//ELSE IF when all questions are over game is over

//save score

//return to start

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  // imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);
}

setTime();
